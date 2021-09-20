import React from "react";
import PropTypes from "prop-types";
import {EmbedDiv} from './YoutubeEmbedElements'

const YoutubeEmbed = ({ embedId }) => (
  <EmbedDiv>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/4rH9Zu6gD1Y/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </EmbedDiv>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;