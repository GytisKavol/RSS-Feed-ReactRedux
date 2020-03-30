import React from "react";

export default function UnfilteredPost(props) {
  return (
    <>
      <br />
      <li key={props.index}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
        <div>{props.desc}</div>
      </li>
    </>
  );
}
