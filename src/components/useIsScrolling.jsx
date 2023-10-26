import * as React from 'react'

export const useIsScrolling = () => {
  const [isScrolling, setIsScrolling] = React.useState(false)
  const on = React.useCallback(() => setIsScrolling(true), [])
  const off = React.useCallback(() => setIsScrolling(false), [])
  React.useEffect(() => {
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('scrollend', off)
    return () => {
      window.removeEventListener('scroll', on)
      window.removeEventListener('scrollend', off)
    }
  })

  return isScrolling
}

