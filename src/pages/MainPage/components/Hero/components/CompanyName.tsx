import { useRef } from 'react'

import { useGSAP } from '@gsap/react'

import { gsap } from '@shared/lib/gsap'

export const CompanyName = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const container = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)

  const letters = title.split('').map((letter, i) => (
    <span key={i} className="letter inline-block">
      {letter}
    </span>
  ))

  useGSAP(
    () => {
      if (!titleRef.current) return
      const lettersEl = titleRef.current?.querySelectorAll('.letter')

      gsap.fromTo(
        lettersEl,
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

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.2,
          ease: 'power3.out',
        },
      )

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 40%',
          end: 'bottom top',
          scrub: true,
        },
      })

      tl.to(
        titleRef.current,
        {
          y: -200,
          opacity: 0,
          scale: 0.8,
          filter: 'blur(10px)',
          ease: 'none',
        },
        0,
      )

      tl.to(
        subtitleRef.current,
        {
          y: -100,
          opacity: 0,
          scale: 0.9,
          filter: 'blur(6px)',
          ease: 'none',
        },
        0,
      )
    },
    { scope: container },
  )

  return (
    <div ref={container} className="text-center">
      <h1 ref={titleRef} className="text-9xl">
        {letters}
      </h1>
      <p ref={subtitleRef} className="text-xl md:text-2xl text-purple-300 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  )
}
