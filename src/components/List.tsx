import React, { useState } from "react";

const List = () => {
  interface Menu {
    link: string;
    name: string;
  }
  const [state, setMenu] = useState<Menu[]>([
    {
      name: "home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ]);
  return (
    <div>
      <div>
        {state.map((elem, index) => {
          return (
            <a href={elem.link} key={index}>
              {elem.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default List;
