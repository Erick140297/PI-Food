const { Diet } = require("../db");

const getDiets = async () => {
  const diets = await Diet.findAll();
  if (diets.length === 0) {
    const arrayDiets = [
      {name: "Gluten Free"},
      {name: "Ketogenic"},
      {name: "Vegetarian"},
      {name: "Lacto Vegetarian"},
      {name: "Ovo Vegetarian"},
      {name: "Vegan"},
      {name: "Pescetarian"},
      {name: "Paleo"},
      {name: "Primal"},
      {name: "Low FODMAP"},
      {name: "Whole 30"},
    ];
    const newDiets = await Diet.bulkCreate(arrayDiets);
    console.log("Diets created and saved in the DB");
    return newDiets;
  } else {
    console.log("Diets shown from the DB");
    return diets;
  }
}

module.exports = getDiets