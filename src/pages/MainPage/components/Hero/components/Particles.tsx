import { useRef } from 'react'

import { useGSAP } from '@gsap/react'

import { gsap } from '@shared/lib/gsap'

export const Particles = () => {
  const container = useRef(null)

  useGSAP(
    () => {
      const dots = gsap.utils.toArray('.dot')

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dots.forEach((dot: any) => {
        const randomX = () => Math.random() * window.innerWidth
        const randomY = () => Math.random() * window.innerHeight

        gsap.set(dot, {
          x: randomX(),
          y: randomY(),
        })

        gsap.to(dot, {
          x: randomX(),
          y: randomY(),
          duration: Math.random() * 20 + 15,
          repeat: -1,
          yoyo: true,
          ease: 'none',
        })
      })
    },
    { scope: container },
  )

  return (
    <div ref={container} className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <div key={i} className="dot absolute w-1 h-1 bg-purple-400/40 rounded-full" />
      ))}
    </div>
  )
}
