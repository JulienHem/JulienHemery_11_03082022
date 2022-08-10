import {Routes, Route, Link} from 'react-router-dom'
import {Home} from "../../pages/home/home";
import {Faq} from "../../pages/faq/faq";
import {Appartment} from "../../pages/appartment/appartment";

export default function Router() {


    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/faq" element={<Faq />}/>
                <Route path="/house/:id" element={<Appartment />}/>
            </Routes>
        </>

    )
}
