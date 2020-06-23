import React, { useState, useEffect } from "react";



function App() {

  // butu gerai prideti ID del react keys
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


  // tikrinam ar gautas key value yra objektas. 
  // jei tai nera objektas, grazinam. 
  // jei tai objektas, inicijuojame ta pacia funkcija su nauju objektu ir loopinam.


  // const rec = () => {
  //   for (let value of Object.values(jsonValue)) {
  //     console.log(value);
  //     if (typeof value === 'object' && value !== null) {
  //     }
  //     return <li> - {value}</li>
  //   }
  // }

  // const arrayMap = () => {
  //   jsonValue.map((item, index) => {
  //     console.log(item.name);
  //   })
  // }

  useEffect(() => {
  }, [jsonValue]);

  return ([
    <div className="objects-wrapper">

      {jsonValue.map((item, index) => (
        <li key={index} style={{ marginLeft: 10 * item.level }}>
          {item.name}
        </li>
      ))}

    </div>
  ]);
}

export default App;
