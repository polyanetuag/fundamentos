import { useState } from 'react'
import Layout from '../components/Layout'

export default function State() {
  const [number, setNumber] = useState(0) // React Hooks

  function incrementar() {
    setNumber(number + 1)
  }

  return (
    <Layout titulo="Componente com Estado">
      <div>{number}</div>
      <button onClick={incrementar}>Incrementar</button>
    </Layout>
  )
}