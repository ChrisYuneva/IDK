import React, { useEffect, useState } from "react";
import ItemList from "../../components/itemList/itemList";

import "./styles.scss";

function Fetch() {
  const [item, setItem] = useState([]);
  const [type, setType] = useState("users");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => {
        setItem(json);
      });
  }, [type]);

  function changeType(type) {
    setType(type);
  }

  return (
    <>
      <section className={"fetch_container"}>
        <div className={"fetch_button-container"}>
          <button
            onClick={() => changeType("users")}
            className={"fetch_button"}
          >
            Users
          </button>
          <button
            onClick={() => changeType("posts")}
            className={"fetch_button"}
          >
            Posts
          </button>
        </div>
        <ItemList posts={item} />
      </section>
    </>
  );
}

export default Fetch;
