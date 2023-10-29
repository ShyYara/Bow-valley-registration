import React from "react";
import Back from "../common/background/Background";

import AdminCertificate from "./AdminCertificate";
import AdminDiploma from "./AdminDiploma";

const AdminCourses = () => {
  return (
    <>
      <Back title=" Admin Courses" />

      <AdminCertificate />

      <AdminDiploma />
    </>
  );
};

export default AdminCourses;
