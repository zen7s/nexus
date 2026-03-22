import { useRef } from 'react'

import { useGSAP } from '@gsap/react'

import { gsap } from '@shared/lib/gsap'

const colors = ['#ec4899', '#8b5cf6', '#06b6d4', '#f59e0b']

export const Particles = () => {
  const container = useRef(null)

  useGSAP(
    () => {
      const particles = gsap.utils.toArray<HTMLElement>('.particle')

      particles.forEach((el) => {
        const size = Math.random() * 4 + 2
        const duration = Math.random() * 5 + 5

        gsap.set(el, {
          width: size,
          height: size,
          xPercent: -50,
          yPercent: -50,
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          backgroundColor: gsap.utils.random(colors),
        })

        const xMove = gsap.utils.random(-50, 50)
        const yMove = gsap.utils.random(-300, -100)

        gsap
          .timeline({
            repeat: -1,
            delay: Math.random() * 5,
          })
          .fromTo(
            el,
            { opacity: 0, scale: 0 },
            { opacity: 0.6, scale: 1, duration: duration / 2, ease: 'power1.out' },
          )
          .to(el, {
            x: xMove,
            y: yMove,
            opacity: 0,
            scale: 0,
            duration: duration / 2,
            ease: 'power1.in',
          })
      })
    },
    { scope: container },
  )

  return (
    <div ref={container} className="absolute inset-0 z-5">
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="particle absolute rounded-full blur-[1px] shadow-current" />
      ))}
    </div>
  )
}
