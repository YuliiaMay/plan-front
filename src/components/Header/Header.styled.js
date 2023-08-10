import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const Logo = styled.span`
    font-family: "Barriecito";
    font-size: 32px;
    color: #2B2B2B;
    margin-right: 30px;
`;

export const Message = styled.span`
    font-family: Walter Turncoat;
    font-size: 48px;
    color: #4113A4;

`;

export const AccLink = styled(Link)`
    margin-left: auto;
    // padding: 0px 12px;
    width: 200px;
    // border: 1px solid #414141;
    // border-radius: 20px;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
`;

export const UserIcon = styled.div`
    width: 38px;
    height: 38px;
    color: #2B2B2B;
`;

export const UserName = styled.p`
    font-family: Walter Turncoat;
    font-size: 18px;
    
    color: #2B2B2B;
    // margin-right: 30px;

    &:hover,
    &:focus {
        color: #4113A4;
    }
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-family: Walter Turncoat;
    font-size: 18px;
    color: #2B2B2B;

    &.active {
        color: #4113A4;
        text-shadow: #42EF87 1px 1px 10px;
    }

    &:hover,
    &:focus {
        // text-shadow: #42EF87 1px 1px 10px;
        color: #4113A4;
    }
`;

export const AuthLink = styled(Link)`
    margin-left: auto;
    // padding: 0px 12px;
    width: 200px;
    // border: 1px solid #414141;
    // border-radius: 20px;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;