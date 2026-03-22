import { useEffect } from 'react'

import Lenis from 'lenis'

import { ScrollTrigger } from '@shared/lib/gsap'

export const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
