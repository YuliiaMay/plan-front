import { Suspense } from "react";
import {  Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";


const PlannerPage = () => {
    return (
        <>
            <div>
                <NavLink to="to-do">ToDoGallery</NavLink>
                <NavLink to="in-progress">InProgressGallery</NavLink>
                <NavLink to="have-done">HaveDoneGallery</NavLink>
                <NavLink to="all">AllTasksGallery</NavLink>
            </div>


            <Suspense fallback={<>loading...</>}>
                <Outlet />
            </Suspense>            
        </>
    );
}

export default PlannerPage;