import React, { useState } from "react";
import "./forms.css";
import Back from "../common/background/Background";
import { Link } from "react-router-dom";

const SignUp = ({ onSignUp }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp(e) {
    e.preventDefault();
    if (email && password) {
      onSignUp({ fname, lname, email, password });

      setEmail("");
      setPassword("");
      setFname("");
      setLname("");
    }
  }
  return (
    <>
      <Back title="Sign up" />
      <section className="contact ">
        <div className="container shadow flexSB">
          <div className="right row">
            <form onSubmit={handleSignUp}>
              <h1>Sign Up</h1>
              <input
                type="text"
                placeholder="Your first name"
                name="fname"
                value={fname || ""}
                onChange={(e) => setFname(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Your last name"
                name="lname"
                value={lname || ""}
                onChange={(e) => setLname(e.target.value)}
              ></input>

              <input
                type="text"
                placeholder="your@gmail.com"
                name="email"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <input
                type="text"
                placeholder="**********"
                name="password"
                value={password || ""}
                onChange={(e) => setPassword(e.target.value)}
              ></input>

              <button className="primary-btn">SIGN UP</button>
            </form>
            <p>
              Already have account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
