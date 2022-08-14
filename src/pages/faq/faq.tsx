import React from "react";
import TitleCard from "../../components/title_card/title_card";
import Dropdown from "../../components/dropdown/dropdown";
import './faq.scss';

export function Faq() {

    return (
        <div>
            <TitleCard />
            <div className="faqs">
                <Dropdown title="Fiabilité" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin velit tortor, ut tempus metus tincidunt in. Sed malesuada lectus eget gravida rutrum. Duis ornare elit id elit facilisis, vitae venenatis elit lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."/>
                <Dropdown title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Dropdown title="Service" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin velit tortor, ut tempus metus tincidunt in. Sed malesuada lectus eget gravida rutrum. Duis ornare elit id elit facilisis, vitae venenatis elit lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."/>
                <Dropdown title="Responsabilité" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin velit tortor, ut tempus metus tincidunt in. Sed malesuada lectus eget gravida rutrum. Duis ornare elit id elit facilisis, vitae venenatis elit lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."/>
            </div>
        </div>
    )

}
