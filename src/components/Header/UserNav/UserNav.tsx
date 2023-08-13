import { LogoutLink } from "./UserNav.styled";
import { RxAvatar } from "react-icons/rx";



const UserNav = () => {
    return (
        <div>
            <RxAvatar/>
            <LogoutLink to="/logout">Logout</LogoutLink>
        </div>
    );
}

export default UserNav;