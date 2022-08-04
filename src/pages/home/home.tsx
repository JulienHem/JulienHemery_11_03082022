import React, {useEffect, useState} from "react";
import {getLogements} from "../../services/logementService";
import LogementInterface from "../../interfaces/LogementInterface";
import Loader from "../../components/loader/loader";
import {Link} from "react-router-dom";
import Card from "../../components/card/card";

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

        <div>
            {logements
                ? logements.map((logement, id) =>
                    <Link key={id} to={`/house/${logement.id}`}>
                        <Card title={logement.title}/>
                    </Link>
                )
                : <Loader/>
            }
        </div>
    )
}
