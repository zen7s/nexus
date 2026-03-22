import { useRef } from 'react'

import { useGSAP } from '@gsap/react'

import { gsap } from '@shared/lib/gsap'

const gradients = [
  'linear-gradient(90deg, transparent 0%, #ec4899 50%, transparent 100%)',
  'linear-gradient(90deg, transparent 0%, #8b5cf6 50%, transparent 100%)',
  'linear-gradient(90deg, transparent 0%, #06b6d4 50%, transparent 100%)',
]

export const GlowingLines = () => {
  const container = useRef(null)

  useGSAP(
    () => {
      const q = gsap.utils.selector(container)

      const topBase = q('.top-base')
      const topOverlay = q('.top-overlay')
      const bottomBase = q('.bottom-base')
      const bottomOverlay = q('.bottom-overlay')

      gsap.to([topBase, topOverlay], {
        backgroundPosition: '200% center',
        duration: 6,
        repeat: -1,
        ease: 'none',
      })

      gsap.to([bottomBase, bottomOverlay], {
        backgroundPosition: '200% center',
        duration: 5,
        repeat: -1,
        ease: 'none',
      })

      function animateGradient(el: gsap.TweenTarget, list: string[], duration: number) {
        const tl = gsap.timeline({ repeat: -1 })

        list.forEach((gradient: string) => {
          tl.set(el, { backgroundImage: gradient })
          tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: duration / list.length })
          tl.to(el, { opacity: 0, duration: duration / list.length })
        })
      }

      animateGradient(topOverlay, gradients, 10)
      animateGradient(bottomOverlay, [...gradients].reverse(), 8)
    },
    { scope: container },
  )

  return (
    <div ref={container}>
      {/* TOP */}
      <div className="absolute top-1/4 left-0 w-full h-px opacity-20 overflow-hidden">
        <div
          className="top-base absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent, #ec4899, transparent)',
            backgroundSize: '200% 100%',
          }}
        />
        <div className="top-overlay absolute inset-0" style={{ backgroundSize: '200% 100%' }} />
      </div>

      {/* BOTTOM */}
      <div className="absolute bottom-1/4 left-0 w-full h-px opacity-20 overflow-hidden">
        <div
          className="bottom-base absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)',
            backgroundSize: '200% 100%',
          }}
        />
        <div className="bottom-overlay absolute inset-0" style={{ backgroundSize: '200% 100%' }} />
      </div>
    </div>
  )
}
