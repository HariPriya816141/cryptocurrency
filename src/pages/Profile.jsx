import { Card, Avatar } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { useSelector } from "react-redux"

const Profile = () => {
    const { user } = useSelector(state => state.auth)

  return (
    <div className="container mt-4">
        <Card>
            <div className="text-center">
                <Avatar size={100} icon={<UserOutlined/>} />

                <h3 className="mt-3">{user?.displayName}</h3>

                <p>{user?.email}</p>

                <p>User ID: {user?.uid}</p>
            </div>
        </Card>
        </div>
  )
}

export default Profile