import { useRef } from 'react'

import { useGSAP } from '@gsap/react'

import { gsap } from '@shared/lib/gsap'

import { AnimatedGrid, GlowingLines, GlowShapes, Particles } from './components'

export const Services = () => {
  const container = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: '-=400 top',
          end: '+=250',
          scrub: true,
          // markers: true,
          // pin: true,
        },
      })

      tl.from('.title', {
        y: 100,
        opacity: 0,
        duration: 1,
      })

      tl.from('.card', {
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
      })

      // tl.to('.title', {
      //   y: -100,
      //   opacity: 0,
      // })
    },
    { scope: container },
  )

  const services = [
    {
      title: 'Брендинг',
      desc: 'Создаём уникальные визуальные идентичности',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Веб-дизайн',
      desc: 'Проектируем современные цифровые решения',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Разработка',
      desc: 'Воплощаем идеи в работающие продукты',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Анимация',
      desc: 'Оживляем интерфейсы плавными движениями',
      color: 'from-amber-500 to-orange-500',
    },
  ]

  const cardsRef = useRef(null)

  return (
    <section ref={container} className="min-h-screen relative py-32 px-4 overflow-hidden bg-black">
      <GlowingLines />
      <AnimatedGrid />
      <Particles />
      <GlowShapes />

      <div className="absolute inset-0 z-5 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      <div className="max-w-7xl mx-auto">
        <div className="title text-center mb-20 mt-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Наши услуги</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Полный цикл создания цифровых продуктов
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            return (
              <div key={index} className="card group perspective-1000">
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-white/10 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                    >
                      {/* <Icon className="w-8 h-8 text-white" /> */}
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-300">{service.desc}</p>
                  </div>

                  <div
                    className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-20"
                    style={{ background: `linear-gradient(to bottom right, ${service.color})` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-px h-1/2 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-px h-1/2 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
    </section>
  )
}
