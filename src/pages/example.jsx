import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Example() {
  return (
    <Layout titulo= "Usando componentes">
      <Header titulo="Next.js & React" />
      <Header titulo="Aprenda Next na prática" />
    </Layout>
  )
}