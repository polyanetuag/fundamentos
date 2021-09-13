import Layout from "../components/Layout"

export default function JSX() {
  const title = <h1>JSX é um Conceito central</h1>

  function subtitulo() {
    return <h2>{'Integração com javaScript'.toUpperCase()}</h2>
  }
    return (
      <Layout titulo="Entendendo o JSX">
        <div>
        {title}
        {subtitulo()}
      </div>
      </Layout>
      
    )
}

//o par de {} dá acesso a manipulações do js