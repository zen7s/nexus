import { useRef } from 'react'

import { useGSAP } from '@gsap/react'

import { gsap } from '@shared/lib/gsap'

export const CompanyName = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  const letters = title.split('').map((letter, i) => (
    <span key={i} className="letter inline-block">
      {letter}
    </span>
  ))

  useGSAP(() => {
    gsap.fromTo(
      '.letter',
      { opacity: 0, y: 100, rotationX: -90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        delay: 0.2,
      },
    )

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: 'power3.out' },
      )
    }
  })

  return (
    <div className="text-center">
      <h1 ref={titleRef} className="text-9xl">
        {letters}
      </h1>
      <p ref={subtitleRef} className="text-xl md:text-2xl text-purple-300 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  )
}
