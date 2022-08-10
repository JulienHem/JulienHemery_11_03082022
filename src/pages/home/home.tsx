import React, {useEffect, useState} from "react";
import {getLogements} from "../../services/logementService";
import LogementInterface from "../../interfaces/LogementInterface";
import Loader from "../../components/loader/loader";
import {Link} from "react-router-dom";
import Card from "../../components/card/card";
import './home.scss';
import TitleCard from "../../components/title_card/title_card";

export function Home() {

    const [logements, setLogements] = useState<Array<LogementInterface>>([])

    useEffect(() => {
        const getLogementsData =  () => {
            try {
                setLogements(getLogements())
            } catch (e) {
                console.log(e)
            }
        }
        getLogementsData();
    }, [])

    return (
        <div className="home">
            <TitleCard />
            <div className="cards">
            {logements
                ? logements.map((logement, id) =>
                    <Link key={id} to={`/house/${logement.id}`}>
                        <Card title={logement.title}/>
                    </Link>
                )
                : <Loader/>
            }
            </div>
        </div>
    )
}
