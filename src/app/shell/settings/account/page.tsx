import { PageHeading } from '@/components'

export default function AccountSettings() {
  return (
    <main className="flex w-full flex-col gap-8 p-16">
      <PageHeading
        title="Account"
        subtitle="Update email or password to keep your account safe."
      />
    </main>
  )
}
