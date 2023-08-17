const LogoSkeleton = () => {
  return (
    <div className="flex gap-2 sm:gap-3 justify-center items-center">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-b from-slate-200 to-slate-300 grid place-items-center" />
      <div className="rounded-full w-32 h-9 bg-slate-200" />
    </div>
  )
}

export default LogoSkeleton
