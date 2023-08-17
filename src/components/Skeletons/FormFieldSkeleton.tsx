const FormFieldSkeleton = () => {
  return (
    <div className="relative grid w-full animate-pulse gap-1">
      <div className="h-5 w-2/5 rounded-full bg-slate-200" />
      <div className="h-10 w-full rounded-lg bg-slate-200" />
    </div>
  )
}

export default FormFieldSkeleton
