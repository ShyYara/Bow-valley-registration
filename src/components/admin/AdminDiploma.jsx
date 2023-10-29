import React, { useState } from "react";
import { firstTerm } from "../../dummydata";
import { secondTerm } from "../../dummydata";
import { thirdTerm } from "../../dummydata";
import { fourthTerm } from "../../dummydata";
import Title from "../common/title/Title";

import Button from "../button/Button";

const AdminDiploma = () => {
  return (
    <div>
      <Title title="Terms" />
      <Box>
        <FirstTerm />
      </Box>
      <Box>
        <SecondTerm />
      </Box>
      <Box>
        <ThirdTerm />
      </Box>
      <Box>
        <FourthTerm />
      </Box>
    </div>
  );
};
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="boxs">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function FirstTerm() {
  const [fdiploma, setdiploma] = useState(firstTerm);
  const [isOpen, setIsOpen] = useState(false);
  function handleDelete(id) {
    setdiploma((fdiploma) => fdiploma.filter((item) => item.id !== id));
  }

  function handleAdd(course) {
    setdiploma((fdiploma) => [...fdiploma, course]);
  }
  return (
    <>
      <h1>First Term</h1>
      <ul>
        <section className="courseCard">
          <div className="container grid2">
            {fdiploma.map((courses) => (
              <Course
                courses={courses}
                key={courses.id}
                onDelete={handleDelete}
                onAdd={handleAdd}
              />
            ))}
          </div>
        </section>
      </ul>
      <Button onClick={() => setIsOpen((open) => !open)}>Add new course</Button>
      {isOpen && <Form onAdd={handleAdd} />}
    </>
  );
}
function SecondTerm() {
  const [fdiploma, setdiploma] = useState(secondTerm);
  const [isOpen, setIsOpen] = useState(false);
  function handleDelete(id) {
    setdiploma((fdiploma) => fdiploma.filter((item) => item.id !== id));
  }
  function handleAdd(course) {
    setdiploma((fdiploma) => [...fdiploma, course]);
  }
  return (
    <>
      <ul>
        <h1>Second Term</h1>
        <section className="courseCard">
          <div className="container grid2">
            {fdiploma.map((courses) => (
              <Course
                courses={courses}
                key={courses.id}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </section>
      </ul>
      <Button onClick={() => setIsOpen((open) => !open)}>Add new course</Button>
      {isOpen && <Form onAdd={handleAdd} />}
    </>
  );
}

function ThirdTerm() {
  const [fdiploma, setdiploma] = useState(thirdTerm);
  const [isOpen, setIsOpen] = useState(false);
  function handleDelete(id) {
    setdiploma((fdiploma) => fdiploma.filter((item) => item.id !== id));
  }
  function handleAdd(course) {
    setdiploma((fdiploma) => [...fdiploma, course]);
  }

  return (
    <>
      <ul>
        <h1>Third Term</h1>
        <section className="courseCard">
          <div className="container grid2">
            {fdiploma.map((courses) => (
              <Course
                courses={courses}
                key={courses.id}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </section>
      </ul>
      <Button onClick={() => setIsOpen((open) => !open)}>Add new course</Button>
      {isOpen && <Form onAdd={handleAdd} />}
    </>
  );
}
function FourthTerm() {
  const [fdiploma, setdiploma] = useState(fourthTerm);
  const [isOpen, setIsOpen] = useState(false);
  function handleDelete(id) {
    setdiploma((fdiploma) => fdiploma.filter((item) => item.id !== id));
  }
  function handleAdd(course) {
    setdiploma((fdiploma) => [...fdiploma, course]);
  }
  return (
    <>
      <ul>
        <h1>Fourth Term</h1>
        <section className="courseCard">
          <div className="container grid2">
            {fdiploma.map((courses) => (
              <Course
                courses={courses}
                key={courses.id}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </section>
      </ul>
      <Button onClick={() => setIsOpen((open) => !open)}>Add new course</Button>
      {isOpen && <Form onAdd={handleAdd} />}
    </>
  );
}
function Course({ courses, onDelete }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <div className="container grid2">
        <div className="items">
          <div className="content flex">
            <div className="left">
              <div className="img">
                <img src={courses.cover} alt="" />
              </div>
            </div>

            <div className="text">
              <h1>{courses.name}</h1>
              <h3>{courses.code}</h3>
              <button onClick={() => setOpen((open) => !open)}>Details</button>
              <div className="details">
                {open && (
                  <p>
                    {`Price:${courses.price}  Start: ${courses.startDate} End: ${courses.endDate}`}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* <button className="outline-btn">REGISTER</button> */}
          <Button onClick={() => onDelete(courses.id)}>DELETE</Button>
        </div>
      </div>
    </li>
  );
}

function Form({ onAdd }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [cover, setCover] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { id, name, code, cover, startDate, endDate, price };
    onAdd(newItem);
    setId("");
    setName("");
    setCode("");
    setCover("");
    setStartDate("");
    setEndDate("");
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
                name="name"
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
              ></input>

              <input
                type="text"
                placeholder="Course code"
                name="code"
                value={code || ""}
                onChange={(e) => setCode(e.target.value)}
              ></input>

              <input
                type="text"
                placeholder="Course cover"
                name="cover"
                value={cover || ""}
                onChange={(e) => setCover(e.target.value)}
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
                placeholder="Course start date"
                name="startDate"
                value={startDate || ""}
                onChange={(e) => setStartDate(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Course end date"
                name="endDate"
                value={endDate || ""}
                onChange={(e) => setEndDate(e.target.value)}
              ></input>

              <button className="primary-btn">ADD</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminDiploma;
