import React, { useState } from "react";
import { firstTerm } from "../../dummydata";
import { secondTerm } from "../../dummydata";
import { thirdTerm } from "../../dummydata";
import { fourthTerm } from "../../dummydata";
import Title from "../common/title/Title";
import Button from "../button/Button";

const Diploma = () => {
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

export default Diploma;

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
  return (
    <>
      <h1>First Term</h1>
      <ul>
        <section className="courseCard">
          <div className="container grid2">
            {fdiploma.map((courses) => (
              <Course courses={courses} key={courses.id} />
            ))}
          </div>
        </section>
      </ul>
    </>
  );
}
function SecondTerm() {
  const [fdiploma, setdiploma] = useState(secondTerm);
  return (
    <>
      <ul>
        <h1>Second Term</h1>
        <section className="courseCard">
          <div className="container grid2">
            {fdiploma.map((courses) => (
              <Course courses={courses} key={courses.id} />
            ))}
          </div>
        </section>
      </ul>
    </>
  );
}
function ThirdTerm() {
  const [fdiploma, setdiploma] = useState(thirdTerm);
  return (
    <>
      <ul>
        <h1>Third Term</h1>
        <section className="courseCard">
          <div className="container grid2">
            {fdiploma.map((courses) => (
              <Course courses={courses} key={courses.id} />
            ))}
          </div>
        </section>
      </ul>
    </>
  );
}
function FourthTerm() {
  const [fdiploma, setdiploma] = useState(fourthTerm);
  return (
    <>
      <ul>
        <h1>Fourth Term</h1>
        <section className="courseCard">
          <div className="container grid2">
            {fdiploma.map((courses) => (
              <Course courses={courses} key={courses.id} />
            ))}
          </div>
        </section>
      </ul>
    </>
  );
}
function Course({ courses }) {
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
          <Button onClick={() => alert("successfully added")}>REGISTER</Button>
        </div>
      </div>
    </li>
  );
}
