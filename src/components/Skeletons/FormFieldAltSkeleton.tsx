const FormFieldAltSkeleton = () => {
  return (
    <div className="grid w-full gap-1">
      <div className="h-5 w-2/5 animate-pulse rounded-full bg-slate-200 dark:bg-zinc-700" />
      <div className="h-[22px] w-full animate-pulse rounded-lg bg-slate-200 dark:bg-zinc-700" />
    </div>
  )
}

export default FormFieldAltSkeleton
