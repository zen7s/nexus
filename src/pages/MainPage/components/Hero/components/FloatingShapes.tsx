import { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const FloatingShapes = () => {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap
        .timeline({ repeat: -1 })
        .to('.shape1', { rotate: 360, y: -30, duration: 7.5, ease: 'none' })
        .to('.shape1', { y: 0, duration: 7.5, ease: 'none' })

      gsap
        .timeline({ repeat: -1 })
        .to('.shape2', { scale: 1.3, x: 20, duration: 5, ease: 'power1.inOut' })
        .to('.shape2', { scale: 1, x: 0, duration: 5, ease: 'power1.inOut' })

      gsap
        .timeline({ repeat: -1 })
        .to('.shape3', { rotate: 405, y: 40, duration: 6, ease: 'none' })
        .to('.shape3', { y: 0, duration: 6, ease: 'none' })

      gsap
        .timeline({ repeat: -1 })
        .to('.light', { scale: 1.2, opacity: 0.4, duration: 3, ease: 'power1.inOut' })
        .to('.light', { scale: 1, opacity: 0.2, duration: 3, ease: 'power1.inOut' })
    },
    { scope: container },
  )

  return (
    <div ref={container}>
      <div className="shape1 absolute top-1/4 left-1/4 w-20 h-20 border border-purple-500/20 rounded-lg" />

      <div className="shape2 absolute bottom-1/3 right-1/4 w-16 h-16 border border-blue-400/20 rounded-full" />

      <div className="shape3 absolute top-1/2 right-1/3 w-12 h-12 border border-pink-400/20" />

      <div
        className="light absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 50%)',
        }}
      />
    </div>
  )
}
