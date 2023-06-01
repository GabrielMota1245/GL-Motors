import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./index.css"
import React from "react";

function Header() {
    return (


        <div className="navegation">
            <div className="titulo-navegation">
                <h1>GL MOTORS</h1>
            </div>
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