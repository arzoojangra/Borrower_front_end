import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Dashboard(props) {
  // const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  console.log("Context at dashboard", user);

  // useEffect(() => {
  // 	// const userdata = JSON.parse(localStorage.getItem("localUser"));
  // 	// if (userdata) {
  // 	// 	setUser(userdata.result);
  // 	// 	setLoading(false);
  // 	// 	console.log(user);
  // 	// }
  // }, []);

  // if (loading) {
  // 	return <div>Loading....</div>;
  // }
  return (
    <div>
      <div className="py-5 bg-primary hero-header mb-3">
        <div className="container py-3 px-5">
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div data-wow-delay="0.1s">
                <h1 className="text-white animated zoomIn mt-5">
                  Welcome {user?.result?.userName?.firstName} !
                </h1>
              </div>
              <hr
                className="bg-white mx-auto mt-0 mb-5"
                style={{ width: 90 }}
              />
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>
      </div>
      <div
        className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
        data-wow-delay="0.1s">
        <h6 className="position-relative d-inline text-primary ps-4">
          Dash Board
        </h6>
        <h2 className="mt-2">Press Button To Continue</h2>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-lg-5 d-flex justify-content-center">
          <div className="col-10 card wow fadeInUp" data-wow-delay="0.3s">
            <NavLink to="/register">
              <button
                type="submit"
                className="btn btn-primary w-100 py-3 btn-primary">
                Register
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
