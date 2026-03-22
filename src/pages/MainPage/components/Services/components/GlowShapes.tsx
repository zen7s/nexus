import { useRef } from 'react'

import { useGSAP } from '@gsap/react'

import { gsap } from '@shared/lib/gsap'

const gradients1 = [
  'radial-gradient(circle, #ec4899 0%, transparent 70%)',
  'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
  'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
]

const gradients2 = [
  'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
  'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
  'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
]

const gradients3 = [
  'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
  'radial-gradient(circle, #ec4899 0%, transparent 70%)',
  'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
]

export const GlowShapes = () => {
  const container = useRef(null)

  useGSAP(
    () => {
      const q = gsap.utils.selector(container)

      function animateBlob(
        base: gsap.TweenTarget,
        overlay: gsap.TweenTarget,
        gradients: string[],
        duration: number,
        move: { x: number; y: number },
      ) {
        gsap.to(base, {
          x: move.x,
          y: move.y,
          duration,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        })

        const tl = gsap.timeline({ repeat: -1 })

        gradients.forEach((g: string) => {
          tl.set(overlay, { backgroundImage: g })
          tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: duration / gradients.length })
          tl.to(overlay, {
            opacity: 0,
            duration: duration / gradients.length,
          })
        })
      }

      animateBlob(q('.blob1-base'), q('.blob1-overlay'), gradients1, 15, { x: -100, y: 100 })

      animateBlob(q('.blob2-base'), q('.blob2-overlay'), gradients2, 18, { x: 100, y: -100 })

      gsap.to(q('.blob3-base'), {
        scale: 1.2,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })

      const tl = gsap.timeline({ repeat: -1 })
      gradients3.forEach((g) => {
        tl.set(q('.blob3-overlay'), { backgroundImage: g })
        tl.fromTo(q('.blob3-overlay'), { opacity: 0 }, { opacity: 1, duration: 4 })
        tl.to(q('.blob3-overlay'), { opacity: 0, duration: 4 })
      })
    },
    { scope: container },
  )

  return (
    <div ref={container} className="absolute inset-0 z-0">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-30 blur-[120px] saturate-120 mix-blend-screen">
        <div className="blob1-base absolute inset-0" />
        <div className="blob1-overlay absolute inset-0" />
      </div>

      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full opacity-30 blur-[120px] saturate-120 mix-blend-screen">
        <div className="blob2-base absolute inset-0" />
        <div className="blob2-overlay absolute inset-0" />
      </div>

      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px] saturate-120 mix-blend-screen">
        <div className="blob3-base absolute inset-0" />
        <div className="blob3-overlay absolute inset-0" />
      </div>
    </div>
  )
}
