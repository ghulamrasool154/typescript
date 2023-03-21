import React, { useState } from "react";

const ArrayOfObject = () => {
  interface MyObject {
    id: number;
    name: string;
  }
  // const myData: MyObject[] = [
  //   { id: 1, name: "Apple" },
  //   { id: 2, name: "Banana" },
  //   { id: 3, name: "Orange" },
  //   { id: 4, name: "Mango" },
  //   { id: 5, name: "Grapes" },
  //   { id: 6, name: "Watermelon" },
  //   { id: 7, name: "Pineapple" },
  //   { id: 8, name: "Kiwi" },
  //   { id: 9, name: "Strawberry" },
  //   { id: 10, name: "Blueberry" },
  // ];
  const [people, setMyArray] = useState<MyObject[]>([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
    { id: 5, name: "Grapes" },
    { id: 6, name: "Watermelon" },
    { id: 7, name: "Pineapple" },
    { id: 8, name: "Kiwi" },
    { id: 9, name: "Strawberry" },
    { id: 10, name: "Blueberry" },
  ]);
  return (
    <div>
      <h2> ArrayOfObject</h2>
      {people.map((el, index) => {
        return <h4 key={index}>{el.name}</h4>;
      })}
    </div>
  );
};

export default ArrayOfObject;
