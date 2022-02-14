import React from "react";
import PropTypes from "prop-types";

function Image({ src, alt, style }) {
  return <img src={src} alt={alt} className={style} />;
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.string,
};

export default Image;
