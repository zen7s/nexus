import { Layout } from '@app/Layout'

import { Hero } from '@pages/MainPage/components/Hero'

import { Services } from './components'

export const MainPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  )
}
