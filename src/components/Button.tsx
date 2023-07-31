import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  // eslint-disable-next-line no-unused-vars
  onClick: (...args: any[]) => void
  type?: 'button' | 'submit'
}

const Button = ({ children, onClick, type = 'button' }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary-500 text-sm sm:text-base rounded-lg text-primary-50 px-4 sm:px-5 py-2 font-semibold"
    >
      {children}
    </button>
  )
}

export default Button
