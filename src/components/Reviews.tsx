'use client'

import { DatabaseType, ReviewType } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ReviewsSkeleton, Review } from '@/components'
import classNames from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'

const Reviews = () => {
  const supabase = createClientComponentClient<DatabaseType>()
  const [reviews, setReviews] = useState<ReviewType[]>([])
  const [activeReview, setActiveReview] = useState(0)

  const intervalRef = useRef<NodeJS.Timer | null>(null)
  const intervalFn = useCallback(() => {
    setActiveReview((prev) => (prev + 1 < reviews.length ? prev + 1 : 0))
  }, [reviews, setActiveReview])

  useEffect(() => {
    const getReviews = async () => {
      const { data: reviews, error } = await supabase
        .from('random_three_reviews')
        .select(
          `
        id,
        content,
        reviewer:profile_id (
          *
        )
      `,
        )
        .returns<ReviewType[]>()

      if (!reviews || error) {
        return
      }

      setReviews(reviews)
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
    <div className="grid gap-3">
      <Review key={reviews[activeReview].id} review={reviews[activeReview]} />
      <div className="flex justify-center gap-2">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={classNames(
              'block h-2 w-2 cursor-pointer rounded-full bg-primary-50',
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
