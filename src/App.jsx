import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  Lightings,
  Login,
  Register,
  RootLayout,
  SoundSystems,
  TentHouse,
} from "./Pages/index";

// router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="sound-systems" element={<SoundSystems />} />
        <Route path="tent-house" element={<TentHouse />} />
        <Route path="lightings" element={<Lightings />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
