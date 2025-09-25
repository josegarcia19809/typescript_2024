type SaludoViajeProps = {
    texto: string
}
const SaludoViaje = ({texto}: SaludoViajeProps) => {
  return (
      <header>
          <h1>
              {texto}
          </h1>
    </header>
  )
}

export default SaludoViaje