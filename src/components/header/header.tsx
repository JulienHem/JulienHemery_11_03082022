import KasaLogo from '../../assets/images/kasa_logo.svg';
import './header.scss';
import {Link} from "react-router-dom";
import Card from "../card/card";
import React from "react";

export default function Header() {


    return (
        <div className="header">
            <img src={KasaLogo} alt="logo"/>
            <div className="header-links">
                <Link to={`/`} style={{ textDecoration: 'none' }}>
                    <div className="header-links-link">ACCUEIL</div>
                </Link>
                <Link to={`/faq`} style={{ textDecoration: 'none' }}>
                    <div className="header-links-link">A PROPOS</div>
                </Link>
            </div>
        </div>
    )
}
