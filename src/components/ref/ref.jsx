import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function Ref({ href, src, alt, style }) {
  return (
    <a href={href} className={style}>
      <img src={src} alt={alt} className={style} />
    </a>
  );
}

Ref.propTypes = {
  src: PropTypes.string,
  href: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.string,
};

export default Ref;
