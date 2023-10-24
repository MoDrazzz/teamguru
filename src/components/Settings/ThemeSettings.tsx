'use client'

import { Theme, Title } from '@/components'

const ThemeSettings = () => {
  return (
    <section className="grid gap-3">
      <Title>Theme</Title>
      <div className="flex gap-3">
        <Theme theme="light" />
        <Theme theme="dark" />
        <Theme theme="system" />
      </div>
    </section>
  )
}

export default ThemeSettings
