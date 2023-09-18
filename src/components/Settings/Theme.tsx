import classNames from 'classnames'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

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
  setTheme: Dispatch<SetStateAction<keyof typeof themes>>
  isActive: boolean
}

const Theme = ({ theme, setTheme, isActive }: Props) => {
  const { url, alt, label } = themes[theme]

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
