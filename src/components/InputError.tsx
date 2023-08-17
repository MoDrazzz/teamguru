interface Props {
  message: string
}

const InputError = ({ message }: Props) => {
  return (
    <span className="absolute left-0 top-full w-max select-none text-sm font-medium text-red-500">
      {message}
    </span>
  )
}

export default InputError
