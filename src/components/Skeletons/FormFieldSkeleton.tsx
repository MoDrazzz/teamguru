const FormFieldSkeleton = () => {
  return (
    <div className="relative grid w-full gap-1">
      <div className="skeleton h-5 w-2/5 rounded-full" />
      <div className="skeleton h-10 w-full rounded-lg" />
    </div>
  )
}

export default FormFieldSkeleton
