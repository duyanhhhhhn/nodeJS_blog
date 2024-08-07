import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import { Stack } from 'react-bootstrap'
import avarter from "../../assets/avatar.jpeg"
const UserChat = ({chat, user}) => {
    const { recipientUser } = useFetchRecipientUser(chat, user)
    return (<Stack direction="horizontal" gap={3} className="user-card align-items-center p-2 justify-content-between" role="button">
        <div className="d-flex">
            <div className="me-2">
               <img src={avarter} alt="" style={{width:"50px",borderRadius:'20px'}} />
            </div>
            <div className="text-content">
                <div className="name">{recipientUser?.name}</div>
                <div className="text">Text Message</div>
            </div>
        </div>
        <div className="d-flex flex-column align-items-end">
            <div className="date">
                3/7/2024
            </div>
            <div className="this-user-notifications">2</div>
            <div className="user-online"></div>
        </div>
    </Stack>)
}
 
export default UserChat;