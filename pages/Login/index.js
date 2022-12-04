import Image from "next/image";
import { global } from "styled-jsx/css";
import { Col, Row } from "react-bootstrap";

const Login = () => {
  return (
    <Row>
      <Col>
        {" "}
        <div
          style={{
            backgroundImage: `url(/col.png)`,
            height: "800px",
            width: "700px",
            opacity: 0.2,
          }}
        ></div>
      </Col>
      <Col>
        {" "}
        <div className="row">
          <div className="text align-items-center">
            <div className="flex-end">
              <div
                className="login text-center mt-3 text-warning"
                style={{
                  marginRight: "20%",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Welcome
              </div>
              <h5
                className="text-secondary text-center mt-2"
                style={{ marginRight: "50px" }}
              >
                Log in into your exiting account
              </h5>
            </div>
            <div className="input ">
              <form className="container mb-3 col-8 mt-4 ">
                <h5>E-mail</h5>
                <input
                  type="email"
                  className="form-control mb-2"
                  name="email"
                  placeholder="Email"
                  style={{ width: "25rem", height: "40px" }}
                />
                <h5>Password</h5>
                <input
                  type="password"
                  className="form-control mb-2"
                  name="password"
                  placeholder="Password"
                  style={{ width: "25rem", height: "40px" }}
                />
                <button
                  type="submit"
                  className="btn btn-warning mt-3"
                  style={{ width: "25rem" }}
                >
                  Login
                </button>
                <button type="submit" className="btn mt-1">
                  Forgot Password
                </button>
                <div
                  className=" justify-content-center text-dark"
                  style={{ marginLeft: "5px" }}
                >
                  Dont have Store.id account?
                  <button type="submit" className="btn">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
