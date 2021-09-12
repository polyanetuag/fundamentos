export default function Header(props) {
  //props não é modificável => somente leitura
  return (
    <header>
      <h1>{props.titulo}</h1>
    </header>
  )
}