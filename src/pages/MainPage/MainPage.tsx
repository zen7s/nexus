import { Layout } from '@app/Layout'

import { Hero, Projects, Services } from './components'

export const MainPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects />
    </Layout>
  )
}
