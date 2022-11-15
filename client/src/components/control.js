const control = (type, order, recipes) => {
  
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
        return 0;
      });
    case "up":
      return arrayType.sort(function (a, b) {
        if (parseInt(a.healthScore) > parseInt(b.healthScore)) {
          return -1;
        }
        if (parseInt(a.healthScore) < parseInt(b.healthScore)) {
          return 1;
        }
        return 0;
      });

    case "down":
      return arrayType.sort(function (a, b) {
        if (parseInt(a.healthScore) > parseInt(b.healthScore)) {
          return 1;
        }
        if (parseInt(a.healthScore) < parseInt(b.healthScore)) {
          return -1;
        }
        return 0;
      });

    default:
      return arrayType;
  }
};

export default control;

