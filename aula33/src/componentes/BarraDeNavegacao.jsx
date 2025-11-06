import { Link } from 'react-router-dom'

function BarraDeNavegacao() {
    return (
        <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/todos-produtos">Todos os Produtos</Link>
                </li>
        </ul>
    )
}
export default BarraDeNavegacao
