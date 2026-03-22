import { useRef } from 'react'

import { useGSAP } from '@gsap/react'

import { gsap } from '@shared/lib/gsap'

export const AnimatedGrid = () => {
  const container = useRef(null)

  useGSAP(() => {
    const el = container.current

    gsap.to(el, {
      backgroundPosition: '100px 100px',
      duration: 20,
      repeat: -1,
      ease: 'none',
      modifiers: {
        backgroundPosition: (value) => {
          return value
        },
      },
    })
  })

  return (
    <div className="absolute inset-0 z-5">
      <div
        ref={container}
        className="w-full h-full opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 80%)',
        }}
      />
    </div>
  )
}
