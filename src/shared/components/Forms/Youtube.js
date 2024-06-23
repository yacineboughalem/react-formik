import { useFormik } from "formik";
import React from "react";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Data", values);
};

const validate = (values) => {
  // Values.name Values.email ....
  // errors.name errors.email ....
  // errors.name = "This field is required"...
  let errors = {};

  if (!values.name) {
    errors.name = "Name Required";
  }

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.channel) {
    errors.channel = "Channel Required";
  }

  return errors;
};

const Youtube = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
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
export default Youtube;
