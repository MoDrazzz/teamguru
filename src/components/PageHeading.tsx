import { Spacer } from '@/components'

interface Props {
  title: string
  subtitle: string
  noSpacer?: boolean
}

const PageHeading = ({ title, subtitle, noSpacer = false }: Props) => {
  return (
    <div className="flex w-full flex-col">
      <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
      <h2 className="mb-4 text-slate-600 dark:text-zinc-400">{subtitle}</h2>
      {!noSpacer && <Spacer />}
    </div>
  )
}

export default PageHeading
