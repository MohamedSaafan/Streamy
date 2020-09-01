import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = (props) => {
  const streamId = props.match.params.id;
  useEffect(() => {
    props.fetchStream(streamId);
  }, []);

  const renderStream = () => {
    if (!props.stream) return <div>Loading....</div>;

    return (
      <div>
        <h2>{props.stream.title}</h2>
        <p>{props.stream.description}</p>
      </div>
    );
  };

  return <div className="container">{renderStream()}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  fetchStream,
})(StreamShow);
