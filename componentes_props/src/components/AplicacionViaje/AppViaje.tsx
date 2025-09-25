import CierreViaje from "./CierreViaje"
import DestinoFavorito from "./DestinoFavorito"
import SaludoViaje from "./SaludoViaje"

const AppViaje = () => {
  return (
      <>
        <SaludoViaje texto="🌏 Hola, Bienvenido a la agencia de viajes" />
        <DestinoFavorito destino="🏖️ Mi destino favorito es la playa" />
        <CierreViaje nota="🧳 Gracias por viajar con nosotros"/>
      </>
  )
}

export default AppViaje