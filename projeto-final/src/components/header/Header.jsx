import { Link } from "react-router-dom";
import "./index.css"
function Header(){
    return(
        <div className="navegation">
        <ul>
            <li>
                <Link to="/">Home</Link>                
            </li>
            <li>
                <Link to="/Sobre">Sobre</Link>
            </li>
            <li>
                <Link to="/Contato">Contato</Link>
            </li>
            <li>
                <Link to="/Produto">Estoque</Link>
            </li>
     </ul>
</div>
    )
}

export default Header;