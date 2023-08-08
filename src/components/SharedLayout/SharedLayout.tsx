import { Suspense } from "react";
import {  Outlet } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import Header from "../Header/Header.jsx"
import { Container } from "./SharedLayout.styled.js";




export const SharedLayout = () => {
    return (
        <>
            <Header />

            <Suspense fallback={<>loading...</>}>
                <Outlet />
            </Suspense>

        </>
    );
};