interface Props {
  message: string
}

export default function InputError({ message }: Props) {
  return (
    <span className="select-none text-sm font-medium text-red-500 absolute top-full">
      {message}
    </span>
  )
}
