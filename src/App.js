// SODV2201: Web Programming-23SEPMNTR1
// GROUP 6
//Yara Pysmenko
//Kashish Hanspal
//Harsh Arora
//Gurneet Baidwan

import React, { useState } from "react";

import Header from "./components/common/heading/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/home/Home";

import "./App.css";
import HomeCourses from "./components/allcourses/HomeCourses";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import SignUp from "./components/forms/SignUp";
import Login from "./components/forms/Login";
import PageNotFound from "./components/home/PageNotFound";
import AdminCourses from "./components/admin/AdminCourses";

export const App = () => {
  const [users, setUsers] = useState([]);

  function handleSignUp(user) {
    setUsers([...users, user]);
    //setUsers(users.push(user));
    console.log(users);
  }

  function handleLogin(user) {
    console.log(users);
    //alert(`Welcome, ${user.email}`);
  }
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/courses" exact element={<HomeCourses />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route
            path="/signup"
            exact
            element={<SignUp onSignUp={handleSignUp} />}
          />
          <Route
            path="/login"
            exact
            element={<Login users={users} onLogin={handleLogin} />}
          />
          <Route path="*" exact element={<PageNotFound />} />
          <Route path="/admin/courses" exact element={<AdminCourses />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
