interface Props {
  isError: boolean
}

const ModalError = ({ isError }: Props) => {
  return (
    isError && (
      <p className="absolute bottom-3 right-12 font-bold text-red-500 dark:text-red-600">
        An error occured.
      </p>
    )
  )
}

export default ModalError
