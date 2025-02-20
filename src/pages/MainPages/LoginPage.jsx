import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiCall } from "../../functions/ApiCall";
import { Icons } from "../../icons/Icons";
import { UserContext } from "../../contextAPI/UserContext";

function LoginComponent(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [invalidInfo, setInvalidInfo] = useState(false);
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(UserContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        method: "get",
        url: `http://localhost:4000/api/v1/logIn/?email=${email}&password=${password}`,
        headers: { "Content-Type": "application/json" },
      };

      let response = await ApiCall(config);

      if (response.status === 201) {
        // setFlag(true);

        console.log(response.data.data.result);

        setUser(response?.data?.data.result);
        setToken(response?.data?.data?.auth);
        localStorage.setItem("localUser", JSON.stringify(response?.data?.data));

        if (response?.data?.data?.result?.signUp) {
          navigate("/dashboard");
        } else if (response?.data?.data?.result?.jobAssignees_id) {
          navigate("/agent-dashboard");
        } else {
          navigate("/admin-dashboard");
        }

        // setEmail("");
        // setPassword("");
      } else {
        setInvalidInfo(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="py-5 bg-primary hero-header mb-3">
        <div className="container py-3 px-5">
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div data-wow-delay="0.1s">
                <h1 className="text-white animated zoomIn">Sign-In</h1>
              </div>
              <hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>

        <div className="container px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div
                className="card shadow p-3 mb-5 bg-body-tertiary rounded wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                  <div className="row justify-content-center g-3 m-3 mb-4">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Please enter your Email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <label htmlFor="email">{Icons.email} Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Please enter your password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <label htmlFor="password">
                          {Icons.password}Password
                        </label>
                      </div>
                    </div>

                    {invalidInfo && (
                      <div className="form-floating my-2 mb-0">
                        <div className="alert alert-danger m-0" role="alert">
                          {Icons.error}
                          <div className="mt-0">
                            Please enter valid details!!!
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="col-12 mt-3">
                      {/* <NavLink to="/dashboard"> */}
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-3 btn-primary"
                      >
                        Sign-In
                      </button>
                      {/* </NavLink> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
