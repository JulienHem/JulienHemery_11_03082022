import leftArrow from "../../assets/images/left_arrow.svg";
import rightArrow from "../../assets/images/right_arrow.svg";
import {useRef, useState} from "react";
import './slider.css';

interface ISlider {
    images: string[]
}

export default function Slider({images}: ISlider) {

    const [sliderIndex, setSliderIndex] = useState<number>(0);
    const slideRef = useRef<any>(null);

    const prevSlide = () => {
            if (sliderIndex > 0) {
                setSliderIndex(sliderIndex - 1);
                slideRef.current.style.setProperty('--slider-index', (sliderIndex - 1).toString())
            } else {
                setSliderIndex(images.length - 1)
                slideRef.current.style.setProperty('--slider-index', (images.length - 1).toString())
            }
    }

    const nextSlide = () => {
            if (sliderIndex < images.length - 1) {
                setSliderIndex(sliderIndex + 1);
                slideRef.current.style.setProperty('--slider-index', (sliderIndex + 1).toString())
            } else {
                setSliderIndex(0);
                slideRef.current.style.setProperty('--slider-index', '0')
            }
    }

    return (
        <div className="slider-container">
            <img onClick={() => prevSlide()} className={images.length !== 1 ? 'left-arrow' : 'hide'} src={leftArrow} alt="leftArrow"/>
            <div className="slider" ref={slideRef}>
                {
                    images.map((picture, index) => {
                        return (
                            <img className="slider-img" src={picture} key={index} alt="img"/>
                        )
                    })
                }
            </div>
            <div className="slider-container-ref">{sliderIndex + 1} / {images.length}</div>
            <img onClick={() => nextSlide()}  className={images.length !== 1 ? 'right-arrow' : 'hide'}  src={rightArrow} alt="leftArrow"/>
        </div>
    )
}
