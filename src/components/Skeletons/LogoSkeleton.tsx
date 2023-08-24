const LogoSkeleton = () => {
  return (
    <div className="flex animate-pulse items-center justify-center gap-2 sm:gap-3">
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-b from-slate-200 to-slate-300 sm:h-10 sm:w-10" />
      <div className="h-9 w-32 rounded-full bg-slate-200" />
    </div>
  )
}

export default LogoSkeleton
