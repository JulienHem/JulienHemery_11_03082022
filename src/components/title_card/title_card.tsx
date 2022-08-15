import './title_card.scss';

interface IProps {
    secondary?: boolean
}

export default function TitleCard({secondary} : IProps) {

    return (
        <div>
            {
                secondary
                    ?
                    <div className="secondary-title-card"></div>
                    :
                    <div className="title-card">
                        <p className="title-card-title">Chez vous, partout et ailleurs</p>
                    </div>
            }
        </div>



    )

}
