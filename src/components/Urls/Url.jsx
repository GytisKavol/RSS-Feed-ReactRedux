import React from "react";

function Url(props) {
  return (
    <>
      <li key={props.id}>
        {props.url}
        <button type="submit" onClick={() => props.deleteUrl(props.id)}>
          x
        </button>
      </li>
    </>
  );
}

export default Url;
