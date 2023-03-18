import Navegador from "@/components/Navegador"

export default function Home() {
    return (
        <div>
              <Navegador texto="Estiloso" destino="/estiloso"/>
              <Navegador texto="Exemplo" destino="/exemplo"/>
              <Navegador texto="JSX"destino="/jsx"/>  
        </div>
    )
}

