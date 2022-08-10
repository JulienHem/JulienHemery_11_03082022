import './card.scss'
import RedBg from '../../assets/images/red_bg.png'

interface IProps {
    title: string,
}

export default function Card({title}:IProps){

    return (
        <div className="card">
            <div>{title}</div>
            <img className="card-img" src={RedBg}/>
        </div>
    )
}
