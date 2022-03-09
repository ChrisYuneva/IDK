import React from "react";

function Item({ title, name, phone, email, body }) {
  return (
    <div className="article-content">
      <div className="article-title">
        <a href="/">{title}</a>
        <a href="/">{name}</a>
      </div>
      <p className="article-text">
        {body}
        {phone}
      </p>
      <p>{email}</p>
    </div>
  );
}

export default Item;
