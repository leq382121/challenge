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
    }
  ]);

  // Case 2 (Recursion)
  const [recursionValue, editrecursionValue] = useState([
    {
      id: 0,
      level: 0,
      name: 'Lorem',
      childs: [
        {
          id: 1,
          level: 1,
          name: 'child-Ipsum'
        },
        {
          id: 2,
          level: 2,
          name: 'child-Sit'
        },
      ]
    },
    {
      id: 3,
      level: 0,
      name: 'Bis',
      childs: [
        {
          id: 4,
          level: 1,
          name: 'Quit'
        },
        {
          id: 5,
          level: 2,
          name: 'Wix'
        },
      ]
    },
    {
      id: 3,
      level: 0,
      name: 'noChilds'
    }
  ]);


  function Recursion() {

    // recursionValue.map((item, index) => {
    //   if (item.childs && item.childs.length > 0) {
    //     // Recursion();
    //     for (let i = 0; i <= item.childs.length; i++) {
    //       console.log(item.childs[i].name);

    //       return <li>{item.childs[i].name}</li>
    //     }
    //   }
    //   return <li>{item.name}</li>
    // })

    // switched to forEach because found that forEach does not create a new array.

    recursionValue.forEach((item) => {
      if (item.childs && item.childs.length > 0) {

        // for (let i = 0; i <= item.childs.length; i++) {
        //   console.log(item.childs[i].name);
        //   return <li>{item.childs[i].name}</li>
        // }

        item.childs.forEach((item) => {
          return <li>{item.name}</li>
        })

      }

      return <li>{item.name}</li>
    })

  }

  useEffect(() => {
  }, [jsonValue]);

  return ([
    <div className="objects-wrapper">
      {/* MVP */}
      <ul className="approach-1">
        {jsonValue.map((item, index) => (
          <li key={item.id} style={{ marginLeft: 10 * item.level }}>
            {item.name}
          </li>
        ))}
      </ul>

      <ul className="approach-2">
        {Recursion()}
      </ul>

    </div>
  ]);
}

export default App;
