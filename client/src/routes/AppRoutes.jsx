import { Route, Routes } from "react-router-dom"
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage"
import ContactPage from "../pages/ContactPage/ContactPage"
import IndexPage from '../pages/IndexPage/IndexPage'
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import NewsPage from "../pages/NewsPage/NewsPage"
import EventsPage from "../pages/EventsPage/EventsPage"
import PrivateRoute from './PrivateRoutes'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<IndexPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<PrivateRoute />}>
                <Route path="" element={<NewsPage />} />
            </Route>
            <Route path="/events" element={<EventsPage />} />
            {/* <Route path="/profile" element={<ProfilePage/>}/> */}
            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes