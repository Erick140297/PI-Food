const filter = (type, order, recipes) => {
  
  let arrayType = [];

  if (!type) {
    arrayType = recipes;
  } else {
    arrayType = recipes.filter((e) => e.diets.find((e) => e === type));
  }

  switch (order) {
    case "A":
      return arrayType.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

    case "Z":
      return arrayType.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
    case "up":
      return arrayType;

    case "down":
      return arrayType;

    default:
      return arrayType;
  }
};

export default filter;

//   if (order === "A") {
//     arrayOrder = arrayType.sort(function (a, b) {
//       if (a.name > b.name) {
//         return 1;
//       }
//       if (a.name < b.name) {
//         return -1;
//       }
//       // a must be equal to b
//       return 0;
//     });
//   } else if (alphabeticalOrder === "Z") {
//     arrayAlphabetical = arrayType.sort(function (a, b) {
//       if (a.name > b.name) {
//         return -1;
//       }
//       if (a.name < b.name) {
//         return 1;
//       }
//       // a must be equal to b
//       return 0;
//     });
//   } else {
//     arrayAlphabetical = arrayType;
//   }
//   return arrayAlphabetical;
// };
