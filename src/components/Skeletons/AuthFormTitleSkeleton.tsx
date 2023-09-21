import classNames from 'classnames'

interface Props {
  variant: 'login' | 'signup'
}

const AuthFormTitleSkeleton = ({ variant }: Props) => {
  return (
    <div className="grid gap-2 sm:gap-3">
      <div
        className={classNames('h-9 animate-pulse rounded-full bg-slate-200', {
          'w-4/5': variant === 'login',
          'w-2/5': variant === 'signup',
        })}
      />
      <div
        className={classNames('h-6 animate-pulse rounded-full bg-slate-200', {
          'w-3/5': variant === 'login',
          'w-4/5': variant === 'signup',
        })}
      />
    </div>
  )
}

export default AuthFormTitleSkeleton
