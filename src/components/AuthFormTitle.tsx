import Link from 'next/link'

interface Props {
  variant: 'login' | 'signup'
}

const AuthFormTitle = ({ variant }: Props) => {
  const isLogin = variant === 'login'

  return (
    <div className="grid sm:gap-3 gap-2">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        {isLogin ? 'Welcome back' : 'Sign up'}
      </h1>
      <h2 className="text-sm sm:text-base">
        {isLogin ? 'Are you new?' : 'Already have an account?'}{' '}
        <Link
          href={isLogin ? '/signup' : '/login'}
          className="text-primary-500 font-semibold"
        >
          {isLogin ? 'Sign up' : 'Log in'}
        </Link>
      </h2>
    </div>
  )
}

export default AuthFormTitle
