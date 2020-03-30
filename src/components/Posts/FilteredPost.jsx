import React from "react";

export default function FilterOut(props) {
  return (
    <div>
      <div>
        <br />
        <div></div>
        {props.filterArray.length > props.articleNumber
          ? `${props.filter2} ${(props.filterArray.length =
              props.articleNumber)}`
          : `${props.filter2} (showing ${props.filterArray.length} out of ${props.articleNumber})`}
        <div>
          {props.filterArray.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
              <div>{item.desc}</div>
            </li>
          ))}
        </div>
        <br />
      </div>
    </div>
  );
}
