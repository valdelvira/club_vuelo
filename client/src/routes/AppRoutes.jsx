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
import EditNew from "../components/News/EditNew/EditNew"
import EventsEdit from "../pages/EventsPage/EventsEdit"

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<IndexPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<PrivateRoute />}>
                <Route path="" element={<NewsPage />} />
                <Route path=":_id" element={<NewsDetails />} />
                <Route path=":id/edit" element={<EditNew />} />
            </Route>
            <Route path="/profile/:user_id" element={<PrivateRoute />}>
                <Route path="" element={<ProfilePage />} />
            </Route>
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:id/edit" element={<EventsEdit />} />
            <Route path="/profile/:user_id" element={<ProfilePage />} />
            <Route path="/profile/:user_id/edit" element={<EditProfileForm />} />

            <Route path="*" element={<h1>404</h1>} />
            <Route path="/meteo" element={<MeteoPage />} />

        </Routes>
    )
}

export default AppRoutes