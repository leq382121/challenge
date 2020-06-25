import React, { useState, useEffect } from "react";

function App() {
  // Hooks, nes jei pridesime Value, atitinkamai atsinaujins ir "state", tada rereshinsis puslapis.
  // Case 1 (MVP)
  const [jsonValue, editJsonValue] = useState([
    {
      id: 0,
      level: 0,
      name: 'Lorem'
    },
    {
      id: 1,
      level: 1,
      name: 'Ipsum'
    },
    {
      id: 2,
      level: 2,
      name: 'Sit'
    },
    {
      id: 3,
      level: 1,
      name: 'Dolor'
    },
    {
      id: 4,
      level: 1,
      name: 'Emit'
    },
    {
      id: 5,
      level: 3,
      name: 'Pasistumiam'
    }
  ]);

  // Case 2 (Recursion)
  const [recursionValue, editrecursionValue] = useState(
    [
      {
        id: 0,
        name: 'Lorem',
        childs: [
          {
            id: 1,
            name: 'Lipsum',
          },
          {
            id: 2,
            name: 'Klipsum',
          }
        ]
      },
    ]
  );


  // function Recursion() {

  //   // recursionValue.map((item, index) => {
  //   //   if (item.childs && item.childs.length > 0) {
  //   //     // Recursion();
  //   //     for (let i = 0; i <= item.childs.length; i++) {
  //   //       console.log(item.childs[i].name);

  //   //       return <li>{item.childs[i].name}</li>
  //   //     }
  //   //   }
  //   //   return <li>{item.name}</li>
  //   // })

  //   // switched to forEach because found that forEach does not create a new array.

  //   recursionValue.forEach((item) => {
  //     if (item.childs && item.childs.length > 0) {

  //       // for (let i = 0; i <= item.childs.length; i++) {
  //       //   console.log(item.childs[i].name);
  //       //   return <li>{item.childs[i].name}</li>
  //       // }

  //       item.childs.forEach((item) => {
  //         return <li>{item.name}</li>
  //       })

  //     }

  //     return <li>{item.name}</li>
  //   })

  // }

  function recursion(obj, gylis = 0) {
    console.log(typeof obj);
    console.log(obj);
    console.log(obj.id);

    if (gylis > 5) return;

    console.log({ id: obj.id, name: obj.name, gylis })

    if (undefined !== obj.childs && Array.isArray(obj.childs) && obj.childs.length) {
      obj.childs.forEach((o, i) => {
        recursion(o[i], gylis++)
      })
    }

    else return <li>{obj.name}</li>;
  }

  useEffect(() => {
  }, [jsonValue]);

  return ([
    <div className="objects-wrapper">
      {/* MVP */}
      {/* this is subject to have infite spacing */}
      <ul className="approach-1">
        {jsonValue.map((item, index) => (
          <li key={item.id} style={{ marginLeft: 10 * item.level }}>
            {item.name}
          </li>
        ))}
      </ul>

      <ul className="approach-2">
        {recursion(recursionValue)}
      </ul>

    </div>
  ]);
}

export default App;
