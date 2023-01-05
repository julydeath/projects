import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Questions({ title, info }) {
  const [event, setEvent] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setEvent(!event);
          }}
        >
          {event ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{event && info}</p>
    </article>
  );
}

export default Questions;
