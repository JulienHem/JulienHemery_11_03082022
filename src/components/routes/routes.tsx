import {Routes, Route, Link} from 'react-router-dom'
import {Home} from "../../pages/home/home";
import {Faq} from "../../pages/faq/faq";
import {House} from "../../pages/house/house";

export default function Router() {


    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/faq" element={<Faq />}/>
                <Route path="/house/:id" element={<House />}/>
            </Routes>
        </>

    )
}
