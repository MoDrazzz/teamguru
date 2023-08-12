const FormFieldSkeleton = () => {
  return (
    <div className="relative grid gap-1 w-full animate-pulse">
      <div className="rounded-full w-2/5 h-5 bg-slate-200" />
      <div className="w-full h-10 bg-slate-200 rounded-lg" />
    </div>
  )
}

export default FormFieldSkeleton
