import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import LogementInterface from "../../interfaces/LogementInterface";
import {getLogementsById} from "../../services/logementService";
import './appartment.css';
import Tag from "../../components/tag/tag";
import rightArrow from '../../assets/images/right_arrow.svg';
import leftArrow from '../../assets/images/left_arrow.svg';
import Profile from "../../components/profile/profile";
import StarIcon from "../../components/star-icon/star-icon";
import {ratingStar} from "../../config/config";
import Collapse from "../../components/collapse/collapse";
import Slider from "../../components/slider/slider";


export function Appartment() {

    const {id} = useParams();
    const [logement, setLogement] = useState<LogementInterface | null>(null);

    const [rating, setRating] = useState<number>(0);


    useEffect(() => {

        const fetchLogement = (id: string) => {
            try {
                setLogement(getLogementsById(id))
            } catch (e) {
                console.log(e)
            }
        }
        id && fetchLogement(id)
    }, [id])

    useEffect(() => {
        if(logement) {
            setRating(parseInt(logement.rating))
        }
    }, [logement])

    return (
        <div className="appartment">
            {
                logement && <Slider images={logement.pictures} />
            }
            <div className="appartment-content">
                <div className="appartment-content-left">
                    <div className="appartment-content-title">{logement?.title}</div>
                    <div className="appartment-content-subtitle">{logement?.location}</div>
                    <div className="tags">
                        {
                            logement?.tags?.map((tag, id) =>
                                <Tag key={id} title={tag}/>
                            )
                        }
                    </div>
                </div>
                <div className="appartment-content-right">
                    <Profile pic={logement?.hostImg} name={logement?.hostName}/>
                    <div className="stars">
                        {
                            ratingStar.map((value) => (
                            <StarIcon
                                key={value}
                                filled={rating >= value}
                            />
                        ))
                        }
                    </div>

                </div>

            </div>
            <div className="dropdowns">

                <Collapse title='Description' description={logement?.description} />
                <Collapse title='Equipements' equipments={logement?.equipments} />
            </div>

        </div>
    )
}
