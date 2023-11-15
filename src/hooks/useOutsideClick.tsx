import { RefObject, useEffect } from 'react'

function useOutsideClick(
  refs: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  action: () => void,
  disabler?: boolean,
) {
  useEffect(() => {
    if (disabler) return

    function handleClickOutside(event: MouseEvent) {
      if (Array.isArray(refs)) {
        if (
          refs.every(
            (ref) => ref.current && !ref.current.contains(event.target as Node),
          )
        ) {
          action()
        }
      } else {
        if (refs.current && !refs.current.contains(event.target as Node)) {
          action()
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [refs, disabler, action])
}

export default useOutsideClick
