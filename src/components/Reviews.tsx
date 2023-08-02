'use client'

import { Database, Reviewer } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ReviewsSkeleton, Review } from '@/components'
import classNames from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'

interface ReviewType {
  id: string
  content: string
  reviewer: Reviewer
}

const Reviews = () => {
  const supabase = createClientComponentClient<Database>()
  const [reviews, setReviews] = useState<ReviewType[]>([])
  const [activeReview, setActiveReview] = useState(0)

  const intervalRef = useRef<NodeJS.Timer | null>(null)
  const intervalFn = useCallback(() => {
    setActiveReview((prev) => (prev + 1 < reviews.length ? prev + 1 : 0))
  }, [reviews, setActiveReview])

  useEffect(() => {
    const getReviews = async () => {
      const { data: reviews, error } = await supabase.from('reviews').select(`
        id,
        content,
        reviewer_position,
        profiles (id,first_name,last_name,avatar_url)
      `)

      if (!reviews || error) {
        return
      }

      setReviews(
        reviews.map((review) => ({
          id: review.id,
          content: review.content,
          reviewer: {
            name: `${review.profiles!.first_name} ${
              review.profiles!.last_name
            }`,
            position: review.reviewer_position,
            avatar_url: review.profiles!.avatar_url,
          },
        })),
      )
    }

    getReviews()
  }, [supabase])

  useEffect(() => {
    if (!reviews.length) return

    const interval = setInterval(intervalFn, 5000)

    intervalRef.current = interval

    return () => clearInterval(interval)
  }, [reviews, intervalFn])

  const handleChangeReview = (reviewIndex: number) => {
    const interval = intervalRef.current

    if (!interval) return

    setActiveReview(reviewIndex)

    clearInterval(interval)
    intervalRef.current = setInterval(intervalFn, 5000)
  }

  return !reviews.length ? (
    <ReviewsSkeleton />
  ) : (
    <div className="gap-3 grid">
      <Review
        review={reviews[activeReview].content}
        reviewer={reviews[activeReview].reviewer}
      />
      <div className="flex gap-2 justify-center">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={classNames(
              'block w-2 h-2 rounded-full cursor-pointer bg-primary-50',
              {
                'opacity-50': activeReview !== index,
              },
            )}
            onClick={() => handleChangeReview(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Reviews
