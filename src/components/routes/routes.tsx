import {Routes, Route} from 'react-router-dom'
import {Home} from "../../pages/home/home";
import {Faq} from "../../pages/faq/faq";
import {Appartment} from "../../pages/appartment/appartment";
import PageNotFound from "../../pages/pageNotFound/pagenotfound";

export default function Router() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/faq" element={<Faq />}/>
                <Route path="/appartment/:id" element={<Appartment />}/>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </>
    )
}
