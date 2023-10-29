import React, { useState } from "react";
import "./courses.css";
import { certificate } from "../../dummydata";
import Title from "../common/title/Title";
import Button from "../button/Button";

export default function Certificate() {
  const [ccourses, setCcourses] = useState(certificate);
  return (
    <>
      <Title title="Certificates" />
      <ul>
        <section className="courseCard">
          <div className="container grid2">
            {ccourses?.map((course) => (
              <Course course={course} key={course.id} />
            ))}
          </div>
        </section>
      </ul>
    </>
  );
}
function Course({ course }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <div className="container grid2">
        <div className="items">
          <div className="content flex">
            <div className="left">
              <div className="img">
                <img src={course.cover} alt="" />
              </div>
            </div>

            <div className="text">
              <h1>{course.title}</h1>
              <h3>{course.duration}</h3>
              <h4>{course.price}</h4>

              <button onClick={() => setOpen((open) => !open)}>Details</button>
              <div className="details">{open && <p>{course.desc}</p>}</div>
            </div>
          </div>

          {/* <button className="outline-btn">REGISTER</button> */}
          <Button onClick={() => alert("successfully added")}>REGISTER</Button>
        </div>
      </div>
    </li>
  );
}
