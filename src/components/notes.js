/**
 * Ideas for data to receive
 *
 *
 */

// {
//   id: 1,
//   movePosition: 1,
//   value: "Lorem",
// },
// {
//   id: 2,
//   movePosition: 2,
//   value: "Ipsum",
// },

// --------

// Lorem: "Lorem",
// Ipsum: {
//   Ipsum: "Ipsum",
//   Dolor: "Dolor",
//   Orci: {
//     Orci: "Orci",
//     Quis: {
//       Quis: "Quis",
//       Odio: {
//         Odio: "Odio"
//       }
//     }
//   },
//   Sit: "Sit",
//   Amet: {
//     Amet: "Amet",
//     Consectetur: "Consectetur",
//   }
// }

/**
 *
 *   Nepavyke bandymai.
 *
 *
 */

/* {Array.from(jsonValue, value => {
 return console.log(value);
})} */

/* {
  console.log(Object.values(jsonValue))
} */

/* {
  () => {
    for (let value of Object.values(jsonValue)) {
      console.log(value); // John, then 30

      if (value === 'Object') {

      }

      return <li>{value}</li>
    }
  }
} */


// tikrinam ar gautas key value yra objektas. 
// jei tai nera objektas, grazinam. 
// jei tai objektas, inicijuojame ta pacia funkcija su nauju objektu ir loopinam.


// Sukurkime array ir pagal 'level' upushinkime i array vidu pagal array indexa.
// f.ex: [[key:prop], [[key:prop], [key:prop]]]
