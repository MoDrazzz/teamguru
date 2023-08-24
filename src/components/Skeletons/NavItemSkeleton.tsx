const NavItemSkeleton = () => {
  return (
    <div className="flex w-full animate-pulse items-center gap-3 rounded-md px-3 py-2 transition-colors">
      <span className="flex w-7 items-center justify-center">
        <div className="h-7 w-7 rounded-lg bg-slate-200" />
      </span>
      <div className="h-7 w-24 rounded-full bg-slate-200" />
    </div>
  )
}

export default NavItemSkeleton
