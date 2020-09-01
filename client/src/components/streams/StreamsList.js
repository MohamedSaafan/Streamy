import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Media, Button } from "reactstrap";
import faker from "faker";
import { Link } from "react-router-dom";

class StreamsList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUser) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`} className="btn btn-primary">
            Edit
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className="btn btn-danger">
            Delete
          </Link>
        </div>
      );
    }
  };
  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="row mb-5">
          <Link to="/streams/new">
            <Button>Create Stream</Button>
          </Link>
        </div>
      );
    }
  };
  renderStreamList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div key={stream.id}>
          {stream.id}
          <Media className="mb-5">
            <Media top left href="#" className="mr-5">
              <Media
                className="rounded-circle"
                object
                src={faker.image.avatar()}
                alt="Generic placeholder image"
              />
            </Media>
            <Media body>
              <Media heading>{stream.title}</Media>
              {stream.description}
              {this.renderAdmin(stream)}
            </Media>
            <Link to={`/streams/${stream.id}`} className="btn btn-primary">
              {" "}
              Show Stream
            </Link>
          </Media>
          <hr />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Streams</h2>
        {this.renderCreate()}
        {this.renderStreamList()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUser: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, {
  fetchStreams,
})(StreamsList);
