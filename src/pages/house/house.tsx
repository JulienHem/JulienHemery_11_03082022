import React, {useEffect, useState} from "react";
import {getLogements} from "../../services/logementService";


export function House() {

    const [logements, setLogements] = useState<any>()

    useEffect(() => {
        const getLogementsData = async () => {
            try {
                setLogements(getLogements())
            } catch (e) {
                console.log(e)
            }
        }
        getLogementsData()

    })

    return (
        <div>
            C'est la home
        </div>
    )
}