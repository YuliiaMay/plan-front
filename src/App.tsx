import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import {
  RegisterPage,
  LoginPage,
  TaskDetailsPage,
  AccSettingsPage,
  PlannerPage,
  HomePage
} from "./pages";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import ToDoGallery from "./components/Planner/ToDoGallery";
import InProgressGallery from "./components/Planner/InProgressGallery";
import HaveDoneGallery from "./components/Planner/HaveDoneGallery";
import AllTasksGallery from "./components/Planner/AllTasksGallery";


// interface AppProps { };


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />

            
            
            <Route path="/planner" element={<PlannerPage />}>
              <Route path="to-do" element={<ToDoGallery />} />
              <Route path="in-progress" element={<InProgressGallery />} />
              <Route path="have-done" element={<HaveDoneGallery />} />
              <Route path="all" element={<AllTasksGallery />} />
            </Route>
          
            <Route path="/planner/:taskId" element={<TaskDetailsPage />} />
          
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/:userName" element={<AccSettingsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
