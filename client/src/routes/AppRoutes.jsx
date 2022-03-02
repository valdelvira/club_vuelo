import { Route, Routes } from "react-router-dom"
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage"
import IndexPage from '../pages/IndexPage/IndexPage'
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import EventsPage from "../pages/EventsPage/EventsPage"

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<IndexPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/events" element={<EventsPage />} />
            {/* <Route path="/profile" element={<ProfilePage/>}/> */}
            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes