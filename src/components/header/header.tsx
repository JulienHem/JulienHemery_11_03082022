import KasaLogo from '../../assets/images/kasa_logo.svg';
import './header.scss';
import {Link, useLocation } from "react-router-dom";

export default function Header() {

    const { pathname } = useLocation();

    return (
        <div className="header">
            <img src={KasaLogo} alt="logo"/>
            <div className="header-links">
                <Link to={`/`} style={{ textDecoration: 'none' }}>
                    <div className={pathname === '/' ? 'header-links-link header-links-link-active' : 'header-links-link'}>ACCUEIL</div>
                </Link>
                <Link to={`/faq`} style={{ textDecoration: 'none' }}>
                    <div className={pathname === '/faq' ? 'header-links-link header-links-link-active' : 'header-links-link'}>A PROPOS</div>
                </Link>
            </div>
        </div>
    )
}
