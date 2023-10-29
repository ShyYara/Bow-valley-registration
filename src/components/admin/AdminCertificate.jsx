import React, { useState } from "react";
import { certificate } from "../../dummydata";
import Title from "../common/title/Title";

import Button from "../button/Button";

const AdminCertificate = () => {
  const [ccourses, setCcourses] = useState(certificate);
  const [isOpen, setIsOpen] = useState(false);

  function handleDelete(id) {
    setCcourses((ccourses) => ccourses.filter((item) => item.id !== id));
  }

  function handleAdd(course) {
    setCcourses((ccourses) => [...ccourses, course]);
  }
  return (
    <>
      <Title title="Certificates" />
      <ul>
        <section className="courseCard">
          <div className="container grid2">
            {ccourses?.map((course) => (
              <Course course={course} key={course.id} onDelete={handleDelete} />
            ))}
          </div>
        </section>
      </ul>
      <Button onClick={() => setIsOpen((open) => !open)}>Add new corse</Button>
      {isOpen && <Form onAdd={handleAdd} />}
    </>
  );
};
function Course({ course, onDelete }) {
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
          <Button onClick={() => onDelete(course.id)}>DELETE</Button>
        </div>
      </div>
    </li>
  );
}

function Form({ onAdd }) {
  const [id, setId] = useState("");
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { id, cover, title, duration, desc, price };
    onAdd(newItem);
    setId("");
    setCover("");
    setTitle("");
    setDuration("");
    setDesc("");
    setPrice("");
  }

  return (
    <>
      <section className="contact ">
        <div className="container shadow flexSB">
          <div className="right row">
            <form onSubmit={handleSubmit}>
              <h1>Add new course</h1>
              <input
                type="text"
                placeholder="Course ID"
                name="id"
                value={id || ""}
                onChange={(e) => setId(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Course name"
                name="title"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
              ></input>

              <input
                type="text"
                placeholder="Course duration"
                name="duration"
                value={duration || ""}
                onChange={(e) => setDuration(e.target.value)}
              ></input>

              <input
                type="text"
                placeholder="Course description"
                name="desc"
                value={desc || ""}
                onChange={(e) => setDesc(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Course price"
                name="price"
                value={price || ""}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Course cover"
                name="cover"
                value={cover || ""}
                onChange={(e) => setCover(e.target.value)}
              ></input>

              <button className="primary-btn">ADD</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default AdminCertificate;
