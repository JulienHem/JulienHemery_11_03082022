import DownArrow from '../../assets/images/down_arrow.svg';

import './collapse.scss';
import {useState} from "react";
interface IProps {
    title: string,
    description?: string,
    equipments ?: string[],
}

export default function Collapse({title, description, equipments}: IProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);




    return (
        <div className={isOpen ? 'dropdown dropdown-opened' : 'dropdown'}>

            <div onClick={() => setIsOpen(!isOpen)} className="dropdown-header">
                <div>{title}</div>
                <img className={isOpen ? 'opened' : ''}  src={DownArrow} alt="arrow"/>
            </div>
            {description && <div className="dropdown-content">{description}</div>}
            {
                equipments && <div className="dropdown-content-equip">
                    {equipments.map((equipment, index) =>
                        <div key={index}>{equipment}</div>
                    )}
                </div>
            }



        </div>


    )
}
