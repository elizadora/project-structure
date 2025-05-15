import Componente1 from "../components/Componente1"
import Componente2 from "../components/Componente2"

export default function Pagina1() {
    return (
        <div>
            <h1>Pagina 1</h1>
            <p>Essa é a página 1</p>
            <Componente1 />
            <Componente2 />
        </div>
    )
}