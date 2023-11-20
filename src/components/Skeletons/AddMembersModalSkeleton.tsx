const AddMembersModalSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="skeleton h-7 w-32 rounded-full" />
      <div className="skeleton h-10 w-full rounded-lg" />
      <div className={'min-h-[282px] flex flex-col gap-3 min-w-[616px]'}>
        <div className="skeleton h-6 w-4/5 rounded-lg" />
        <div className="skeleton h-6 w-3/4 rounded-lg" />
        <div className="skeleton h-6 w-3/5 rounded-lg" />
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="skeleton h-6 w-16 rounded-lg" />
        <div className="skeleton h-10 w-40 rounded-lg" />
      </div>
    </div>
  )
}

export default AddMembersModalSkeleton
