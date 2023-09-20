import { PageHeading, ThemeSettings } from '@/components'

export default function AppearanceSettings() {
  return (
    <main className="flex w-full flex-col gap-8 bg-slate-50 p-16">
      <PageHeading
        title="Appearance"
        subtitle="Choose your favourite theme to make the application even better."
      />
      <ThemeSettings />
    </main>
  )
}
