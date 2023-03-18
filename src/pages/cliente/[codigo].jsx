import Layout from "@/components/Layout"
import { useRouter } from 'next/router'

export default function Codigo() {
    const router = useRouter()

    return (
        <Layout titulo="Navegação Dinamica">
            <span>Codigo={router.query.codigo}</span> 
        </Layout>
    )
}