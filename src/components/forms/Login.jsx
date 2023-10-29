import React, { useState } from "react";
import Back from "../common/background/Background";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./forms.css";

const Login = ({ users, onLogin }) => {
  const navigate = useNavigate();
  //

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    // const admin = users.find(
    //   (admin) =>
    //     admin.email === "admin@gmail.com" && admin.password === "admin!"
    // );
    if (user) {
      //onLogin(user);
      navigate("/courses");
    } else if ("admin@gmail.com" === email && "admin!" === password) {
      navigate("/admin/courses");
    } else {
      alert("Invalid email or password");
    }
  }
  return (
    <div>
      <Back title="Login" />
      <section className="contact">
        <div className="container shadow ">
          <div className=" right  row">
            {/* <form onSubmit={handleSubmit}> */}
            <h1>Login</h1>
            <input
              type="text"
              placeholder="your@gmail.com"
              name="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="************"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              className="primary-btn"
              onClick={handleLogin}
              // onClick={() => navigate("/courses")}
            >
              LOGIN
            </button>
            {/* </form> */}
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
