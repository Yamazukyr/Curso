import Home from "../paginas/Home";
import TodosProdutos from "../paginas/TodosProdutos";
import PaginaNaoEncontrada from "../paginas/PaginaNaoEncontrada";

import {Router, Route} from "react-router-dom";

function Rotas() {
    return (
        <Routers>
            <Route path="/" element={<Home />} />
            <Route path="/todos-produtos" element={<TodosProdutos />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routers>
    )
}

export default Rotas;