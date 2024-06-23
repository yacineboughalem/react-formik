import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
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
  address: Yup.string().required("Address is Required"),
});

const WithComponent = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label>Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component={TextError} />
        <br />
        <br />

        <label>Email</label>
        <Field type="text" id="email" name="email" />
        <ErrorMessage name="email">
          {(errorMsg) => <small className="error">{errorMsg}</small>}
        </ErrorMessage>
        <br />
        <br />

        <label>Channel</label>
        <Field type="text" id="channel" name="channel" />
        <ErrorMessage name="channel" component={TextError} />
        <br />
        <br />

        <label>Comments</label>
        <Field type="text" id="comments" name="comments" as="textarea" />
        <ErrorMessage name="comments" component={TextError} />
        <br />
        <br />

        <label>Address</label>
        <Field name="address">
          {(props) => {
            const { field, form, meta } = props;
            console.log("Props:", props);
            return (
              <div>
                <input type="text" id="address" {...field} />
                {meta.touched && meta.error ? (
                  <small className="error">{meta.error}</small>
                ) : null}
              </div>
            );
          }}
        </Field>
        <br />
        <br />
        <label>Facebook</label>
        <Field type="text" id="facebook" name="social.facebook" />
        <br />
        <label>Twitter</label>
        <Field type="text" id="twitter" name="social.twitter" />

        <br />
        <br />

        <label>Primary Phone Number</label>
        <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
        <br />
        <label>Secondary Phone Number</label>
        <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
        <br />
        <br />

        <label>List of Phone numbers</label>
        <FieldArray name="phNumbers">
          {(fieldArrayProps) => {
            console.log("Array", fieldArrayProps);

            const { push, remove, form } = fieldArrayProps;
            const { values } = form;
            const { phNumbers } = values;

            return (
              <div>
                <button type="button" onClick={() => push("")}>
                  +
                </button>
                {phNumbers.map((phNumber, index) => (
                  <div key={index}>
                    <Field name={`phNumbers[${index}]`} />
                    {index > 0 && (
                      <button type="button" onClick={() => remove(index)}>
                        -
                      </button>
                    )}
                  </div>
                ))}
              </div>
            );
          }}
        </FieldArray>
        <br />
        <br />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default WithComponent;
