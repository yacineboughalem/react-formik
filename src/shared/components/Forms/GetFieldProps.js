import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is Required"),
  channel: Yup.string().required("Channel is Required"),
});

const GetFieldProps = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });

  // console.log("Values :", formik.values);
  // console.log("Errors :", formik.errors);
  console.log("Touched :", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          {...formik.getFieldProps("name")}
        />
        {formik.errors.name && formik.touched.name && (
          <small className="error">{formik.errors.name}</small>
        )}
        <br />
        <br />

        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email && (
          <small className="error">{formik.errors.email}</small>
        )}
        <br />
        <br />

        <label>Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          {...formik.getFieldProps("channel")}
        />
        {formik.errors.channel && formik.touched.channel && (
          <small className="error">{formik.errors.channel}</small>
        )}
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default GetFieldProps;
