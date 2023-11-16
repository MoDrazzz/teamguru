import { ButtonAlt } from '@/components'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  length: number
}

const Pagination = ({ page, setPage, length }: Props) => {
  return (
    <div className="flex items-center">
      <ButtonAlt
        onClick={() => setPage((prev) => prev - 1)}
        icon={faArrowLeft}
        disabled={page === 1}
      />
      <p className="w-14 select-none text-center text-sm font-medium">
        {page} / {length}
      </p>
      <ButtonAlt
        onClick={() => setPage((prev) => prev + 1)}
        icon={faArrowRight}
        disabled={page === length}
      />
    </div>
  )
}

export default Pagination
