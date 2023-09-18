'use client'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const themes = {
  light: {
    url: '/light-shell-mockup.png',
    alt: 'Light theme mockup',
    label: 'Light',
  },
  dark: {
    url: '/dark-shell-mockup.png',
    alt: 'Dark theme mockup',
    label: 'Dark',
  },
  system: {
    url: '/system-shell-mockup.png',
    alt: 'System default theme mockup',
    label: 'System Default',
  },
}

interface Props {
  theme: keyof typeof themes
}

const Theme = ({ theme }: Props) => {
  const { url, alt, label } = themes[theme]
  const { theme: activeTheme, setTheme } = useTheme()

  const isActive = theme === activeTheme

  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        id={theme}
        src={url}
        alt={alt}
        width={256}
        height={136}
        className={classNames('w-64 rounded-lg border-2 transition-colors', {
          'border-primary-500': isActive,
          'border-slate-400': !isActive,
        })}
        onClick={() => setTheme(theme)}
      />
      <label
        htmlFor={theme}
        className={classNames('text-sm font-semibold transition-colors', {
          'text-primary-500': isActive,
          'text-slate-500': !isActive,
        })}
      >
        {label}
      </label>
    </div>
  )
}

export default Theme
