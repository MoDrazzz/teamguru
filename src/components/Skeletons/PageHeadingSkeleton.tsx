import { Spacer } from '@/components'
import classNames from 'classnames'

interface Props {
  alt?: boolean
}

const PageHeadingSkeleton = ({ alt = false }: Props) => {
  return (
    <div className="flex w-full flex-col">
      <div
        className={classNames('mb-2 h-8 w-1/5 rounded-full', {
          skeleton: !alt,
          'skeleton-alt': alt,
        })}
      />
      <div
        className={classNames('mb-4 h-6 w-3/5 rounded-full', {
          skeleton: !alt,
          'skeleton-alt': alt,
        })}
      />
      <Spacer />
    </div>
  )
}

export default PageHeadingSkeleton
