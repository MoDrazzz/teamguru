interface Props {
  message: string
}

const InputError = ({ message }: Props) => {
  return (
    <span className="select-none text-sm font-medium text-red-500 absolute top-full">
      {message}
    </span>
  )
}

export default InputError
