import React from "react";
import { Field, reduxForm } from "redux-form";

const renderError = (error, touched) => {
  if (error && touched) {
    return <small className="form-text text-muted">{error}</small>;
  }
  return <small></small>;
};
const renderInput = ({ input, label, type, meta }) => (
  <div className="form-group">
    <label>{label}</label>
    <input type={type} className="form-control" {...input} />
    {renderError(meta)}
  </div>
);

const StreamForm = (props) => {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };
  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="container">
      {/*  this Component will mange your data and dispatch action and do all of the stuff */}
      <Field
        name="title"
        component={renderInput}
        label="enter your video title"
        type="text"
      />
      <Field
        name="description"
        component={renderInput}
        label=" write your video description"
        type="text"
      />
      {/* 
      if you passed a props to the Field element then it will pass 
      it to the component it is rendering
      
      */}
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "you must enter an appropriate title";
  }
  return errors;
};

// this line will put a ton of function into your props object
export default reduxForm({
  // name of the field into your store
  form: "StreamForm",
  validate,
})(StreamForm);
