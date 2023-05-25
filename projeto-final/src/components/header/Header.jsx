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
            <Link to="/sobre">Sobre</Link>
        </li>
        <li>
            <Link to="/contato">Contato</Link>
        </li>
        <li>
            <Link to="/produto">Estoque</Link>
        </li>
     </ul>
</div>
    )
}

export default Header;