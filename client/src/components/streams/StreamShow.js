import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";
const StreamShow = (props) => {
  const streamId = props.match.params.id;

  const videoEl = useRef(null);
  const stream = null || props.stream;
  console.log(stream, " from stream");

  useEffect(() => {
    props.fetchStream(streamId);
  }, []);

  useEffect(() => {
    if (!stream) {
      return;
    }

    const player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${streamId}.js`,
    });
    player.attachMediaElement(videoEl.current);
    player.load();

    return () => {
      player.destroy();
      console.log("media destoryed");
    };
  }, [stream]);

  const renderStream = () => {
    if (!props.stream) return <div>Loading....</div>;

    return (
      <div>
        <video ref={videoEl} controls style={{ width: "100%" }} />
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
