import React from "react";
import StreamForm from "./StreamForm";
import { createStream } from "../../actions";
import { connect } from "react-redux";

const StreamCreate = (props) => {
  const onSubmit = (formValues) => {
    props.createStream(formValues);
  };
  return (
    <div>
      <div className="container">
        <h3> Stream Create</h3>
      </div>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

// this line will put a ton of function into your props object
export default connect(null, {
  createStream,
})(StreamCreate);
