import { Route, Routes } from "react-router-dom"
import Header from "./Main/Header"
import Footer from "./Main/Footer"
import Home from "./Main/Home"
import Places from "./Place/PlacesPage"
import PlacesInfo from './Place/places.json'
import Profile from "./Place/Profile"
import ScrollToTop from "./ScrollToTop"
import Error from "./Main/404Error"
import About from "./Main/About"
import Filter from "./Main/Filter"
import Events from './events/EventsPage'
import Guides from './guides/GuidesPage'
import guidesInfo from './guides/guides.json'

function PageRoutes() {
    return (<>
        <Header></Header>

        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/places" element={<Places data={PlacesInfo}></Places>} />
            <Route path="/profile/:cardId" element={<Profile></Profile>} />
            <Route path="*" element={<Error></Error>} />
            <Route path="/About" element={<About />}></Route>
            <Route path="/filter" element={<Filter />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/guides" element={< Guides data={guidesInfo} />}></Route>
        </Routes>
        <Footer></Footer>
    </>)
}

export default PageRoutes