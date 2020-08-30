import React from "react";
import { connect } from "react-redux";
import { fetchStream, ediStream } from "../../actions/index";
import StreamForm from "./StreamForm";
import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.ediStream(
      this.props.stream.userId,
      this.props.match.params.id,
      formValues
    );
  };
  render() {
    if (!this.props.stream) {
      return <div className="container">Loading ...</div>;
    }
    return (
      <div>
        <div className="container">
          <h3>Edit Stream</h3>
        </div>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, "title", "description")}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, {
  fetchStream,
  ediStream,
})(StreamEdit);
