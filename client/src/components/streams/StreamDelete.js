import React from "react";
import Modal from "../Modals";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  handleDeleteStreamClick = () => {
    this.props.deleteStream(this.props.match.params.id);
  };
  footer = () => (
    <>
      <button className="btn btn-danger" onClick={this.handleDeleteStreamClick}>
        Delete
      </button>
      <button className="btn btn-primary">Cancel</button>
    </>
  );
  renderModel = () => {
    if (this.props.stream) {
      return (
        <div>
          <Modal
            title="Delete Stream"
            content={this.props.stream.title}
            footer={this.footer()}
            onDismiss={() => history.push("/")}
          />
        </div>
      );
    }
    return <div> Loading</div>;
  };
  render() {
    return <div>{this.renderModel()}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
