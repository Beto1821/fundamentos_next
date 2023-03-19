import Layout from "@/components/Layout"
import { useState } from "react"

export default function Estado() {
    const [numero, setNumero] = useState(0)


    return (
        <Layout titulo="Componenete com Estado">
            <div>{numero}</div>
            <button onClick={() => setNumero(numero + 1)}>+1</button>
        </Layout>
    )
}