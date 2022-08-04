import './card.scss'

interface IProps {
    title: String,
}

export default function Card({title}:IProps){

    return (
        <div className="card">
            <p>{title}</p>
        </div>
    )
}
