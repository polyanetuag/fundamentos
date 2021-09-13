import Layout from "../../components/Layout"
import { useRouter } from 'next/router'

export default function ClientCode() {
  const router = useRouter()

  return (
    <Layout titulo="Navegação Dinâmica">
      <div>Code = {router.query.code}</div>
    </Layout>
  )
}