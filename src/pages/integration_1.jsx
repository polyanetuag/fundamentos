import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integration() {
  const [code, setCode] = useState(1)
  const [client, setClient] = useState({})

  async function getClient() {
    const resp = await fetch(`http://localhost:3000/api/clients/${code}`)
    const dados = await resp.json()
    setClient(dados)

      // fetch(`http://localhost:3000/api/clients/${code}`)
      // .then(resp => resp.json())
      // .then(dados => setClient(dados))
  }

  return (
    <Layout>
      <div>
        <input type="number" value={code} onChange={e => setCode(e.target.value)}/>
        <button onClick={getClient}>Obter Cliente</button>
      </div>
      <ul>
        <li>Code: {client.id}</li>
        <li>Name: {client.name}</li>
        <li>Email: {client.email}</li>
      </ul>
    </Layout>
  )
}