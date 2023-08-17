import { Link } from '@/components'

interface Props {
  variant: 'login' | 'signup'
}

const AuthFormTitle = ({ variant }: Props) => {
  const isLogin = variant === 'login'

  return (
    <div className="grid gap-2 sm:gap-3">
      <h1 className="text-2xl font-semibold sm:text-3xl">
        {isLogin ? 'Welcome back' : 'Sign up'}
      </h1>
      <h2 className="text-sm sm:text-base">
        {isLogin ? 'Are you new?' : 'Already have an account?'}{' '}
        <Link href={isLogin ? '/signup' : '/login'}>
          {isLogin ? 'Sign up' : 'Log in'}
        </Link>
      </h2>
    </div>
  )
}

export default AuthFormTitle
