import { useRef } from 'react'

import { useGSAP } from '@gsap/react'

import { gsap } from '@shared/lib/gsap'

import { Carousel } from './components'

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  useGSAP(() => {
    if (!containerRef.current || !sectionRef.current) return

    const cards = containerRef.current.querySelectorAll('.project-card')
    console.log(containerRef.current!.offsetWidth)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        pin: true,
        scrub: 1,
        end: () => `+=${containerRef.current!.offsetWidth}`,
      },
    })

    tl.to(cards, {
      xPercent: -100 * cards.length,
      ease: 'none',
    })

    cards.forEach((card, _) => {
      const arrow = card.querySelector('.arrow')

      card.addEventListener('mouseenter', () => {
        gsap.to(arrow, { x: 10, duration: 0.3 })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(arrow, { x: 0, duration: 0.3 })
      })
    })
  })

  return (
    <section ref={sectionRef} className="bg-black py-20 overflow-hidden min-h-screen">
      <div className="mb-16 px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-6">Проекты</h2>

        <Carousel ref={containerRef} />
      </div>
    </section>
  )
}
