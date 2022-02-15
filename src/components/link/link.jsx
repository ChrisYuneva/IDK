import React from "react";
import PropTypes from "prop-types";

function Link({ children, href, style }) {
  return (
    <a href={href} className={style}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.element,
  href: PropTypes.string,
  style: PropTypes.string,
};

export default Link;
