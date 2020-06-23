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
          name: 'Ipsum'
        },
        {
          id: 2,
          level: 2,
          name: 'Sit'
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
      name: 'noChilds',
      childs: []
    }
  ]);


  // tikrinam ar gautas key value yra objektas. 
  // jei tai nera objektas, grazinam. 
  // jei tai objektas, inicijuojame ta pacia funkcija su nauju objektu ir loopinam.

  const Recursion = () => {
    // Sukurkime array ir pagal 'level' upushinkime i array vidu pagal array indexa.
    // f.ex: [[key:prop], [[key:prop], [key:prop]]]

    // recursionValue.map((item, index) => {
    //   console.log('test');
    //   if (!item.childs.length) {
    //     console.log(item.childs.name);

    //     for (let i = 0; i < item.childs.length; i++) {
    //       console.log(item.childs.name);

    //       return item.childs[i].name;
    //     }
    //   }

    //   return <li>{item.name}</li>
    // })
  }

  useEffect(() => {
  }, [jsonValue]);

  return ([
    <div className="objects-wrapper">
      {/* ne pats gražiausias, bet MVP */}
      <ul className="approach-1">
        {jsonValue.map((item, index) => (
          <li key={item.id} style={{ marginLeft: 10 * item.level }}>
            {item.name}
          </li>
        ))}
      </ul>

      <ul className="approach-2">
        {
          recursionValue.map((item, index) => {
            // console.log(!item.childs.length);

            if (item.childs.length !== null) {
              // console.log(item.childs.name);

              for (let i = 0; i < item.childs.length; i++) {
                console.log(item.childs[i].name);

                return <li>{item.childs[i].name}</li>
              }
            }

            return <li>{item.name}</li>
          })
        }
      </ul>

    </div>
  ]);
}

export default App;
