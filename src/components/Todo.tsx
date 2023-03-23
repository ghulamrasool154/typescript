import React, { useState } from "react";

const Todo = () => {
  const [item, setItems] = useState<[]>([]);
  const [value, setvalue] = useState<string>("");
  const [age, setage] = useState<number>(20);

  const hanldeChanged = (element: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(element.target.value);
  };
  const hanldeAgeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  const hanldesubmit = (element: any) => {
    element.preventDefault();
    console.log(item);
  };
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
    </div>
  );
};

export default Todo;
