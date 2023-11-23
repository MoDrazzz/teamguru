import { PropsWithChildren } from 'react'

const ArticleSkeleton = ({ children }: PropsWithChildren) => {
  return (
    <article className="grid w-full justify-items-start gap-3">
      <div className="skeleton-alt h-7 w-32 rounded-full" />
      <div className="w-full rounded-xl bg-slate-50 shadow-main dark:bg-zinc-900">
        {children}
      </div>
    </article>
  )
}

export default ArticleSkeleton
