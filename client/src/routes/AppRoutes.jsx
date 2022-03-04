import { Route, Routes } from "react-router-dom"
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage"
import ContactPage from "../pages/ContactPage/ContactPage"
import IndexPage from '../pages/IndexPage/IndexPage'
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import NewsPage from "../pages/NewsPage/NewsPage"
import EventsPage from "../pages/EventsPage/EventsPage"
import EditProfileForm from "../components/Profile/EditProfileForm"
import PrivateRoute from './PrivateRoutes'
import NewsDetails from "../pages/NewsPage/NewsDetails"
import MeteoPage from "../pages/MeteoPage/MeteoPage"

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<IndexPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/details/:_id" element={<NewsDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<PrivateRoute />}>
                <Route path="/news" element={<NewsPage />} />
            </Route>
            <Route path="/profile/:user_id" element={<PrivateRoute />}>
                <Route path="" element={<ProfilePage />} />
            </Route>
            <Route path="/events" element={<EventsPage />} />
            <Route path="/profile/:user_id" element={<ProfilePage />} />
            <Route path="/profile/:user_id/edit" element={<EditProfileForm />} />

            <Route path="*" element={<h1>404</h1>} />
            <Route path="/meteo" element={<MeteoPage />} />

        </Routes>
    )
}

export default AppRoutes