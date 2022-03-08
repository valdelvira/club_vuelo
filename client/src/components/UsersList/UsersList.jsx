import UserCard from "../UsersList/UserCard"
import { Col } from "react-bootstrap"

const UsersList = ({ usersList, refreshProfiles }) => {
    return (
        <>
            {
                usersList.map(user =>
                    <Col md={4} key={user._id}>
                        <UserCard {...user} refreshProfiles={refreshProfiles} />
                    </Col>)
            }
        </>
    )
}

export default UsersList