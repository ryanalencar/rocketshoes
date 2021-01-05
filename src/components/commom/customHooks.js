import { useEffect, useRef } from 'react'

export function useIsMounted() {
  const isMounted = useRef(true)

  useEffect(
    () => () => {
      isMounted.current = false
    },
    []
  )

  return isMounted
}
