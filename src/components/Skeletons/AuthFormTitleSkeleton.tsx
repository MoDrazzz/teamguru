import classNames from 'classnames'

interface Props {
  variant: 'login' | 'signup'
}

const AuthFormTitleSkeleton = ({ variant }: Props) => {
  return (
    <div className="grid gap-2 sm:gap-3">
      <div
        className={classNames('skeleton h-9 rounded-full', {
          'w-4/5': variant === 'login',
          'w-2/5': variant === 'signup',
        })}
      />
      <div
        className={classNames('skeleton h-6 rounded-full', {
          'w-3/5': variant === 'login',
          'w-4/5': variant === 'signup',
        })}
      />
    </div>
  )
}

export default AuthFormTitleSkeleton
