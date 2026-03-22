import { CompanyName, FloatingShapes, MotionOrbs, Particles } from './components'

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-950 via-slate-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      <CompanyName title="NEXUS" subtitle="web studio" />
      <MotionOrbs />
      <Particles />
      <FloatingShapes />
    </section>
  )
}
