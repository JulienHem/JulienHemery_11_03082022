import React, {useEffect, useState} from "react";
import {getLogements} from "../../services/logementService";

export function Home() {


    const [logements, setLogements] = useState<any>()

    useEffect(() => {
        const getLogementsData = async () => {
            try {
                setLogements(getLogements())
            } catch (e) {
                console.log(e)
            }

        }
        console.log(logements)
        getLogementsData();
    }, [])

    return (
        <div>
            C'est la home
        </div>
    )
}