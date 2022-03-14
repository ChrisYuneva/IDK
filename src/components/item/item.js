import React from "react";

import './styles.scss';

function Item({ title, name, phone, email, body }) {
  return (
    <div className="item_container">
      <div className="article-title">
        <h3>{title}</h3>
        <h3>{name}</h3>
      </div>
      <div className="article-text">
        {body}

      </div>
        <span>
            {phone}
        </span>
      <p>{email}</p>
    </div>
  );
}

export default Item;
