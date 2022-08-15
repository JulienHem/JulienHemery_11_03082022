import './footer.scss';
import WhiteLogo from  '../../assets/images/kasa_white_logo.svg'


export default function Footer() {

    return (
        <div className="footer">
            <img src={WhiteLogo} alt=""/>
            <div className="footer-trademark">© 2020 Kasa. All rights reserved</div>
        </div>
    )
}
