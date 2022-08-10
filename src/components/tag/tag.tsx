import './tag.scss';


interface IProps {
    title : String
}

export default function Tag({title}: IProps) {


    return (
        <div className="tag">
            {title}
        </div>
    )
}
