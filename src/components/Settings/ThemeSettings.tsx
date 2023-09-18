'use client'

import { Theme, Title } from '@/components'
import { useState } from 'react'

const ThemeSettings = () => {
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark' | 'system'>(
    'light',
  )

  return (
    <section className="grid gap-3">
      <Title>Theme</Title>
      <div className="flex gap-3">
        <Theme
          theme="light"
          setTheme={setActiveTheme}
          isActive={activeTheme === 'light'}
        />
        <Theme
          theme="dark"
          setTheme={setActiveTheme}
          isActive={activeTheme === 'dark'}
        />
        <Theme
          theme="system"
          setTheme={setActiveTheme}
          isActive={activeTheme === 'system'}
        />
      </div>
    </section>
  )
}

export default ThemeSettings
