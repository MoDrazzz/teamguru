import { PropsWithChildren } from 'react'

const ArticleWrapper = ({ children }: PropsWithChildren) => {
  return (
    <article className="grid w-full justify-items-start gap-3">
      {children}
    </article>
  )
}

export default ArticleWrapper
