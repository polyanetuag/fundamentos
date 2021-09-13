import Navigation from '../components/Navigation'

export default function Initial() {
  return (
    <div style={{
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh',
      flexWrap: 'wrap'
    }}>
      <Navigation text="Modular" destiny="/modular"/>
      <Navigation text="Example" destiny="/example" cor="#1bad2a"/>
      <Navigation text="JSX" destiny="/jsx" cor="crimson"/>
      <Navigation text="Navegação #01" destiny="/navigation" cor="blue"/>
      <Navigation text="Navegação #02" destiny="/client/123" cor="orange"/>
      <Navigation text="Componente com Estado" destiny="/state" cor="red"/>
    </div>
  )
}