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
        childs:
          [
            {
              id: 1,
              name: 'child-Ipsum'
            },
            {
              id: 2,
              name: 'child-Sit',
              childs:
                [
                  {
                    id: 3,
                    name: 'child-g'
                  },
                  {
                    id: 4,
                    name: 'child-d',
                    childs:
                      [
                        {
                          id: 10,
                          name: 'child-g'
                        },
                        {
                          id: 11,
                          name: 'child-d'
                        },
                      ]
                  },
                ]
            },
          ]
      },
      {
        id: 5,
        name: 'Amer',
        childs:
          [
            {
              id: 6,
              name: 'child-Ipsum'
            },
            {
              id: 7,
              name: 'child-Sit',
              childs:
                [
                  {
                    id: 8,
                    name: 'child-g'
                  },
                  {
                    id: 9,
                    name: 'child-d'
                  },
                ]
            },
          ]
      }
    ]
  );

  function recursion(obj) {
    // jei gautas elementas yra objektas ...
    if (!Array.isArray(obj)) {
      // ... graziname varda ...
      console.log(obj.name, 'id:', obj.id);

      // ... ir jei jo viduje randame childs - kvieciame kiekvienam vaikui.
      if (obj.hasOwnProperty('childs')) recursion(obj.childs);

    } else {
      // jei gautas elementas yra array, mes darome forEach kiekvienam elementui.
      obj.forEach(arrayObject => recursion(arrayObject));
    }
  }

  // useEffect(() => {
  // }, [jsonValue]);

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
