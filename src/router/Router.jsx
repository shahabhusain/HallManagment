import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../components/Layout/RootLayout/RootLayout";
import Signin from "../pages/Signin/Signin";
import Register from "../pages/Register/Register";
import HotelList from "../pages/HotelList/HotelList";
import SinglePackagePage from "../components/Hotel/SinglePackagePage";
import Dashboard from "../pages/Dashborad/Dashboard";
import MainLayout from "../components/Layout/mainLayout/MainLayout";
import User from "../pages/Dashborad/User";
import Owner from "../pages/Dashborad/Owner";
import HotelList1 from "../pages/Dashborad/HotelList1";
import SingleHotelPage from "../pages/Dashborad/SingleHotelPage";
import SingleUserPage from "../pages/Dashborad/SingleUserPage";
import SingleLayout from "../components/Layout/SingleLayout/SingleLayout";
import Form from "../pages/Dashborad/Form";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="register" element={<Register />} />
        <Route path="hotel" element={<HotelList />} />
        <Route path="hotel/:hotelId" element={<SinglePackagePage />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user" element={<User />} />
        <Route path="owner" element={<Owner />} />
        <Route path="hotellist" element={<HotelList1 />} />
      </Route>

      <Route path="/" element={<SingleLayout />}>
      <Route path="singlehotel" element={<SingleHotelPage />} />
      <Route path="singleuser" element={<SingleUserPage />} />
      <Route path="form" element={<Form />} />
      </Route>
    </>
  )
);
