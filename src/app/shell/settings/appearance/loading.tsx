import { PageHeadingSkeleton, ThemeSkeleton } from '@/components'

export default function AppearanceSettingsLoading() {
  return (
    <main className="flex w-full flex-col gap-8 p-16">
      <PageHeadingSkeleton />
      <section className="grid gap-3">
        <div className="h-7 w-36 animate-pulse rounded-full bg-slate-200 dark:bg-zinc-700" />
        <div className="flex gap-3">
          <ThemeSkeleton />
          <ThemeSkeleton />
          <ThemeSkeleton />
        </div>
      </section>
    </main>
  )
}
