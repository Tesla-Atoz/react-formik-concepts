import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "asdsa",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid Email Format").required("Required"),
  channel: yup.string().required("Required"),
});

const YouTubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="Email">Email</label>
          <Field type="text" name="email" id="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div className="form-control">
          s<label htmlFor="name">Channel</label>
          <Field type="text" name="channel" id="channel" />
          <ErrorMessage name="channel" component="div" />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" type="text" name="comments" id="comments" />
          <ErrorMessage name="comments" />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>

          {/*rendering props way : can render custom components also+ props are passed by formik */}
          <Field name="address">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error && <div>{meta.error}</div>}
                </div>
              );
            }}
          </Field>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">Primary phone number: </label>
          <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
        </div>
        <div className="form-control">
          <label htmlFor="secondaryPh">Secondary phone number: </label>
          <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
        </div>
        <button type="submit" style={{ marginTop: "25px" }}>
          Submit ME!
        </button>
      </Form>
    </Formik>
  );
};

export default YouTubeForm;
