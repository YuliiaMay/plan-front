import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../store/auth/selectors";
import { HeaderWrapper, Logo } from "./Header.styled";
// import { TbUserCircle } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import UserNav from "./UserNav/UserNav";
import AuthNav from "./AuthNav/AuthNav";
import Burger from "./Burger/Burger";
import { useState } from 'react';



const Header = () => {
    const isLoggedIn: boolean = useSelector(selectIsLoggedIn);
    // const user = useSelector(selectUser);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <HeaderWrapper>
            <Logo>Plan!</Logo>
            
            {/* <Message>Get what you want!</Message> */}

            {
                isLoggedIn
                    ? <UserNav />
                    : <AuthNav />
            }

            {
                isOpen && <Burger toggleMenu={toggleMenu} />
            }

            <div>
                {
                    // isLoggedIn
                    //     ? (
                    //         <AccLink to="/:userName">
                    //             <UserIcon><TbUserCircle size={38} /></UserIcon>
                    //             <UserName>user name</UserName>
                    //         </AccLink>    
                    //     )
                    //     : (
                    //         <div>
                    //             <AuthLink to="/register">Registration</AuthLink>
                    //             <AuthLink to="/login">Login</AuthLink>
                    //         </div>
                    //     )

                }
                <GiHamburgerMenu size={24} color="#4113A4"/>
            </div>

            

        
            {/* <HeaderNav> */}
                {/* <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/planner">Planner</StyledLink> */}
                {/* <StyledLink to="/notes">Notes</StyledLink>
                <StyledLink to="/habit-tracker">Tracker</StyledLink>
                <StyledLink to="/calendar">Calendar</StyledLink>
                <StyledLink to="/timer">Timer</StyledLink>
                <StyledLink to="/productivity">Productivity</StyledLink> */}
            {/* </HeaderNav> */}
        </HeaderWrapper>
    );
}


export default Header;