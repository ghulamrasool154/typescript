import React, { useState } from "react";

const Todo = () => {
  interface Myobj {
    _id: string;
    name: string;
    age: number;
  }

  const [item, setItems] = useState<Myobj[]>([]);
  const [value, setvalue] = useState<string>("");
  const [age, setage] = useState<number>(20);

  const hanldeChanged = (element: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(element.target.value);
  };
  const hanldeAgeChanged = (element: React.ChangeEvent<HTMLInputElement>) => {
    setage(Number(element.target.value));
  };
  const hanldesubmit = (element: any) => {
    element.preventDefault();

    const newList = {
      _id: `unique${Math.trunc(Math.random() * 1e9)}`,
      name: value,
      age: age,
    };

    setItems([...item, newList]);
  };
  console.log(item);
  return (
    <div className="todo">
      <form onSubmit={hanldesubmit}>
        <input
          value={value}
          onChange={hanldeChanged}
          placeholder="Enter Your Name"
        />
        <input
          value={age}
          onChange={hanldeAgeChanged}
          placeholder="Enter Your age"
        />
        <button type="submit">Upload</button>
      </form>

      {item.length <= 0 ? (
        <h1>No User</h1>
      ) : (
        item.map((element) => {
          return (
            <h4 key={element._id}>
              <strong> ID : {element._id}</strong>
              <strong> Name : {element.name}</strong>
              <strong> Age : {element.age}</strong>
            </h4>
          );
        })
      )}
    </div>
  );
};

export default Todo;
