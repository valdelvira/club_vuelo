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
import ProjectsPage from "../pages/ProjectPage/ProjectsPage"
import UsersListPage from "../pages/UserListPage/UserListPage"
import PayPage from "../pages/PayPage/PayPage"


const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<IndexPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/projects" element={<ProjectsPage />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/payment" element={<PayPage />} />
            <Route path="/meteo" element={<MeteoPage />} />

            <Route path="/news" element={<NewsPage />} />
            <Route path="/news" element={<PrivateRoute />}>
                <Route path=":_id" element={<NewsDetails />} />
                <Route path=":id/edit" element={<EditNew />} />
            </Route>

            <Route path="/profile/:user_id" element={<PrivateRoute />}>
                <Route path="" element={<ProfilePage />} />
            </Route>

            <Route path="/events" element={<EventsPage />} />
            <Route path="/events" element={<PrivateRoute />}>
                <Route path=":id/edit" element={<EventsEdit />} />
            </Route>

            <Route path="/profile" element={<PrivateRoute />}>
                <Route path="" element={<UsersListPage />} />
                <Route path=":user_id/edit" element={<EditProfileForm />} />
            </Route>

            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes