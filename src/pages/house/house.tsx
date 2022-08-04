import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import LogementInterface from "../../interfaces/LogementInterface";
import {getLogementsById} from "../../services/logementService";

export function House() {

    const {id} = useParams();
    const [logement, setLogement] = useState<LogementInterface | null>(null)

    useEffect(() => {
        const fetchLogement = (id: string) => {
                try {
                    setLogement(getLogementsById(id))
                } catch (e) {
                    console.log(e)
                }
        }
        id && fetchLogement(id)
    }, [])

    return (
        <div>
            C'est house {logement?.title}
        </div>
    )
}
