import React from "react";
import Item from "../item/item";

import "./styles.scss";

function ItemList({ posts }) {
  return (
    <div className="itemlist">
      {posts.map((post) => (
        <Item key={post.id} {...post} />
      ))}
    </div>
  );
}

export default ItemList;
