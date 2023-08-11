import { Suspense } from "react";
import {  Outlet } from "react-router-dom";
import Header from "../Header/Header.js"
import { ResponsiveContainer } from "../../assets/styles/ResponsiveContainer.js";



export const SharedLayout = () => {
    return (
        <>
            <Header />

            <ResponsiveContainer
>
                <Suspense fallback={<>loading...</>}>
                    <Outlet />
                </Suspense>
            </ResponsiveContainer>


        </>
    );
};