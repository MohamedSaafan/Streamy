import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Media } from "reactstrap";
import faker from "faker";

class StreamsList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderStreamList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div>
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
              {stream.title}
            </Media>
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
        {this.renderStreamList()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
  };
};
export default connect(mapStateToProps, {
  fetchStreams,
})(StreamsList);
