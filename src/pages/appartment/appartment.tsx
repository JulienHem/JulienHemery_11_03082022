import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import LogementInterface from "../../interfaces/LogementInterface";
import {getLogementsById} from "../../services/logementService";
import './appartment.css';
import Tag from "../../components/tag/tag";
import rightArrow from '../../assets/images/right_arrow.svg';
import leftArrow from '../../assets/images/left_arrow.svg';
import Profile from "../../components/profile/profile";
import Star from "../../components/star/star";

export function Appartment() {

    const {id} = useParams();
    const [logement, setLogement] = useState<LogementInterface | null>(null);
    const [sliderIndex, setSliderIndex] = useState<number | any>(0);
    const [rating, setRating] = useState<number>(0);

    const slideRef = useRef<any>(null);

    useEffect(() => {

        const fetchLogement = (id: string) => {
            try {
                setLogement(getLogementsById(id))
            } catch (e) {
                console.log(e)
            }
        }
        id && fetchLogement(id)
    }, [setRating])

    useEffect(() => {
        setRating(parseInt(logement?.rating as string))
    }, [setRating])


    const prevSlide = () => {
        if (sliderIndex !== 0) {
            setSliderIndex(sliderIndex - 1);
            slideRef.current.style.setProperty('--slider-index', sliderIndex - 1)
        }
        if (sliderIndex  === 0) {
            // @ts-ignore
            setSliderIndex(logement?.pictures?.length)
        }
    }

    const nextSlide = () => {
        if (sliderIndex !== logement?.pictures?.length) {
            setSliderIndex(sliderIndex + 1);
            slideRef.current.style.setProperty('--slider-index', sliderIndex + 1)
        }
        // @ts-ignore
        if (sliderIndex + 1 === logement?.pictures?.length - 1 || sliderIndex + 1  === logement?.pictures?.length ) {
            setSliderIndex(-1);
        }
    }

    return (
        <div className="appartment">
            <div className="slider-container">
                <img onClick={() => prevSlide()} className="left-arrow" src={leftArrow} alt="leftArrow"/>

                <div className="slider" ref={slideRef}>
                    {
                        logement?.pictures?.map((picture, index) => {
                            return (
                                <img className="slider-img" src={picture} key={index} alt="img"/>
                            )
                        })
                    }

                </div>
                <img onClick={() => nextSlide()} className="right-arrow" src={rightArrow} alt="leftArrow"/>
            </div>
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
                        {[1, 2, 3, 4, 5].map((value) => (
                            <Star
                                key={value}
                                filled={rating >= value}
                            />
                        ))}
                    </div>

                </div>

            </div>


        </div>
    )
}
