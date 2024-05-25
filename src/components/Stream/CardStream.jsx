import { useState } from "react";
import PropTypes from "prop-types";
import "./CardStream.scss";

function CardStream({ stream }) {
  const [hover, setHover] = useState(false);
  return (
    <div className={`${stream.class} card_stream`}>
      <div className="card_stream_container">
        {/* eslint-disable jsx-a11y/media-has-caption */}
        <div
          className="image_video"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover ? (
            <video
              className="video_streamer"
              src={stream.video}
              loop
              autoPlay
            />
          ) : (
            <img
              className="cards_stream_image"
              src={stream.image}
              alt={stream.name}
            />
          )}
        </div>
        <div className="image_mobile">
          <img
            className="image_only_mobile"
            src={stream.image}
            alt={stream.name}
          />
        </div>
        <div className="card_stream_info">
          <h4>{stream.name}</h4>
          <p>{stream.description}</p>
        </div>
      </div>
    </div>
  );
}
CardStream.propTypes = {
  stream: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};
export default CardStream;
