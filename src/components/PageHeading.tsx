import { Spacer } from '@/components'

interface Props {
  title: string
  subtitle: string
}

const PageHeading = ({ title, subtitle }: Props) => {
  return (
    <div className="flex w-full flex-col">
      <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
      <h2 className="mb-4 text-slate-600 dark:text-zinc-400">{subtitle}</h2>
      <Spacer />
    </div>
  )
}

export default PageHeading
