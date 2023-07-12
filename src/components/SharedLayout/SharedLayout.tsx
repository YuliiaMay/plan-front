import { Suspense } from "react";
import {  Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/planner">Planner</NavLink>
                <NavLink to="/settings">Account</NavLink>
                <NavLink to="/settings">Register</NavLink>
                <NavLink to="/settings">Login</NavLink>
            </div>
        {/* <Header>
            <Container>
                <HeaderBase>
                    <Logo>Plan!</Logo>
                    <Message>Get what you want!</Message>
                    <AccLink path="/:userName">
                        <UserIcon><TbUserCircle size={38} /></UserIcon>
                        <UserName>user name</UserName>
                    </AccLink>
                </HeaderBase>

                <HeaderNav>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/planner">Planner</StyledLink>
                    {/* <StyledLink to="/notes">Notes</StyledLink>
                    <StyledLink to="/habit-tracker">Tracker</StyledLink>
                    <StyledLink to="/calendar">Calendar</StyledLink>
                    <StyledLink to="/timer">Timer</StyledLink>
                    <StyledLink to="/productivity">Productivity</StyledLink> */}
                {/* </HeaderNav>
            </Container>
        </Header> */}

        <Suspense fallback={<>loading...</>}>
            <Outlet />
        </Suspense>
        </>
    );
};