import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  items: string[]
}

const TeamFooter = ({ items, children }: Props) => {
  return (
    <footer className="flex items-center gap-6">
      {items.map((item, index) => (
        <p
          key={index}
          className="text-sm font-medium text-slate-600 dark:text-zinc-400"
        >
          {item}
        </p>
      ))}
      <div className='ml-auto'>{children}</div>
    </footer>
  )
}

export default TeamFooter
