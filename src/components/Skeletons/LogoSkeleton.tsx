const LogoSkeleton = () => {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <div className="h-8 w-8 animate-pulse rounded-lg bg-gradient-to-b from-slate-200 to-slate-300 dark:from-zinc-700 dark:to-zinc-800 sm:h-10 sm:w-10" />
      <div className="skeleton h-9 w-32 rounded-full" />
    </div>
  )
}

export default LogoSkeleton
