import './pagenotfound.scss';
import {Link} from "react-router-dom";
import React from "react";

export default function PageNotFound() {

    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={`/`} style={{ textDecoration: 'none' }}>
                <div className="link">Retourner sur la page d'accueil</div>
            </Link>
        </div>
    )

}
