import classNames from 'classnames'

interface Props {
  variant: 'login' | 'signup'
}

const AuthFormTitleSkeleton = ({ variant }: Props) => {
  return (
    <div className="grid sm:gap-3 gap-2 animate-pulse">
      <div
        className={classNames('rounded-full h-9 bg-slate-200', {
          'w-4/5': variant === 'login',
          'w-2/5': variant === 'signup',
        })}
      />
      <div className={classNames("rounded-full h-6 bg-slate-200", {
          'w-3/5': variant === 'login',
          'w-4/5': variant === 'signup',
        })} />
    </div>
  )
}

export default AuthFormTitleSkeleton
