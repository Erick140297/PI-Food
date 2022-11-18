export const control = (type, order, recipes) => {
  let arrayType = [];

  if (Object.entries(recipes).length === 1) {
    return (arrayType = recipes);
  }

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

export const paginated = (page, dataFilter) => {
  let data = [];
  let pageNumber = Math.ceil(dataFilter.length / 9);
  let count = page * 9;

  if (dataFilter.length < 9) {
    for (let i = 0; i < dataFilter.length; i++) {
      data.push(dataFilter[i]);
    }
  } else if (dataFilter.length % pageNumber === 0) {
    for (let i = count; i < count + 9; i++) {
      data.push(dataFilter[i]);
    }
  } else if ((page + 1) * 9 < dataFilter.length) {
    for (let i = count; i < count + 9; i++) {
      data.push(dataFilter[i]);
    }
  } else {
    for (let i = count; i < dataFilter.length; i++) {
      data.push(dataFilter[i]);
    }
  }
  return {
    pageNumber,
    data,
  };
};
