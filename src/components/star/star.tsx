import './star.scss';
import { FaStar } from "react-icons/fa";

interface IProps {
    filled: boolean,
}

export default function Star({filled}: IProps) {

    return (
        <FaStar
            className="star"
            color={filled ? "#ff3939" : "lightgray"}
            />
    )

}
