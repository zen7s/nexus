import { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Orbs } from '../model/orbs.data'

type MotionOrbProps = {
  x: number
  y: number
  scale: number
  className: string
}

export const MotionOrb = ({ x, y, scale, className }: MotionOrbProps) => {
  const orbRef = useRef(null)

  useGSAP(() => {
    gsap.to(orbRef.current, {
      x: x,
      y: y,
      scale: scale,
      duration: 1.9,
      repeat: -1,
      yoyoEase: true,
      ease: 'power1.inOut',
    })
  })

  return <div ref={orbRef} className={className}></div>
}

export const MotionOrbs = () => {
  return (
    <>
      {Orbs.map((orb, i) => (
        <MotionOrb key={i} {...orb} />
      ))}
    </>
  )
}
