import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../store/auth/selectors";
import { Logo, Message, AccLink, UserIcon, UserName, AuthLink, StyledLink, HeaderNav } from "./Header.styled";
import { TbUserCircle } from "react-icons/tb";


const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    console.log(isLoggedIn);
    console.log(user);

    return (
        <header>
            <Logo>Plan!</Logo>
            <Message>Get what you want!</Message>
            {
                isLoggedIn
                    ? (
                        <AccLink to="/:userName">
                            <UserIcon><TbUserCircle size={38} /></UserIcon>
                            <UserName>user name</UserName>
                        </AccLink>    
                    )
                    : (
                        <div>
                            <AuthLink to="/register">Registration</AuthLink>
                            <AuthLink to="/login">Login</AuthLink>
                        </div>
                    )

            }
        
            <HeaderNav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/planner">Planner</StyledLink>
                {/* <StyledLink to="/notes">Notes</StyledLink>
                <StyledLink to="/habit-tracker">Tracker</StyledLink>
                <StyledLink to="/calendar">Calendar</StyledLink>
                <StyledLink to="/timer">Timer</StyledLink>
                <StyledLink to="/productivity">Productivity</StyledLink> */}
            </HeaderNav>
        </header>
    );
}


export default Header;