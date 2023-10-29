import React from "react";
import Back from "../common/background/Background";

import Certificate from "./Certificate";
import Diploma from "./Diploma";

const CourseHome = () => {
  return (
    <>
      <Back title="Courses" />

      <Certificate />
      <Diploma />
    </>
  );
};

export default CourseHome;
