import React from "react";

import "./App.css";
import EmploymentDetails from "./pages/EmploymentDetails";
// import AadharUploadComponent from "./components/AadharUploadComponent";
// import SignUpComponent from "./pages/SignUpPage";
// import LoginComponent from "./pages/LoginPage";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"; //npm i react-router-dom
import PersonalDetails from "./pages/PersonalDetails";
import Register3 from "./pages/Register3";
import BankDetails from "./pages/BankDetails";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import Address from "./components/Address";
import BorrowingDetails from "./pages/BorrowingDetails";
import { UserProvider } from "./context/UserContext";
import { UserImageProvider } from "./context/UserImageContext";
import Register4 from "./pages/Register4";
import AdminDashboard from "./pages/AdminDashboard";
import UserDetails from "./pages/UserDetails";
import PanCardDetails from "./pages/PanCardDetails";
import Footer from "./components/Footer";
import AgreementModel from "./modal/AgreementModel";

function App() {
  // const { user, setUser } = useContext(UserContext);
  return (
    // <UserImageProvider>
    //   <UserProvider>
    //     {/* <EmploymentDetails /> */}
    //     {/* <AadharUploadComponent /> */}
    //     {/* <SignUpComponent /> */}
    //     {/* <LoginComponent /> */}
    //     {/* <LoginPage /> */}
    //     <NavBar />

    //     {/* {user ? (
    // 			<Routes>
    // 				<Route path="/dashboard" element={<Dashboard />} />
    // 				<Route path="/register" element={<Register />} />
    // 				<Route path="/register2" element={<EmploymentDetails />} />
    // 				<Route path="/register3" element={<Register3 />} />
    // 				<Route path="/register4" element={<Register4 />} />
    // 				<Route path="/address" element={<Address />} />
    // 				<Route path="/borrowing-details" element={<BorrowingDetails />} />
    // 			</Routes>
    // 		) : (
    // 			<Routes>
    // 				<Route path="/" element={<Home />} />
    // 				<Route path="/sign-up" element={<SignUpPage />} />
    // 				<Route path="/sign-in" element={<LoginPage />} />
    // 			</Routes>
    // 		)} */}

    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //       <Route path="/sign-up" element={<SignUpPage />} />
    //       <Route path="/sign-in" element={<LoginPage />} />
    //       <Route path="/personal-details" element={<PersonalDetails />} />
    //       <Route path="/employment-details" element={<EmploymentDetails />} />
    //       <Route path="/register3" element={<Register3 />} />
    //       <Route path="/register4" element={<Register4 />} />
    //       <Route path="/bank-details" element={<BankDetails />} />
    //       <Route path="/pancard" element={<PanCardDetails />} />
    //       <Route path="/address" element={<Address />} />
    //       <Route path="/borrowing-details" element={<BorrowingDetails />} />
    //       <Route path="/admin-dashboard" element={<AdminDashboard />} />
    //       <Route path="/users/:id" element={<UserDetails />} />
    //     </Routes>
    //     <Footer />
    //   </UserProvider>
    // </UserImageProvider>
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <AgreementModel />
    </>
  );
}

export default App;
