import React from "react";

const Content = (props) => {
  let sum = 0;
  return (
    <>
      {props.data.map((value) => {
        sum += value.exercises;
        return <p key={value.name}>{value.name}</p>;
      })}

      <p>{sum}</p>
    </>
  );
};

export default Content;