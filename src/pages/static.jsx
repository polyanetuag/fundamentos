import Layout from "../components/Layout"

//Página Estática
export async function getStaticProps() {
  return {
    props: {
      number: Math.random()
    }
  }
}

export default function Static(props) {
  return (
    <Layout titulo="Conteúdo Estático">
      {/* Ao atualizar a página depois do build, o conteúdo fica estático */}
      <div>{props.number}</div>  
    </Layout>
  )
}