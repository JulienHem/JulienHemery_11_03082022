import './profile.scss';

interface IProps {
    name?: string,
    pic?: string,
}

export default function Profile({name, pic}: IProps) {


    return(
        <div className="profile">
            <div className="profile-title">{name}</div>
            <img className="profile-img" src={pic} alt=""/>
        </div>
    )

}
