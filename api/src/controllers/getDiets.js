const { Diet } = require("../db");

const getDiets = async () => {
  const diets = await Diet.findAll();
  if (diets.length === 0) {
    const arrayDiets = [
      { name: "gluten free" },
      { name: "ketogenic" },
      { name: "vegetarian" },
      { name: "lacto vegetarian" },
      { name: "ovo vegetarian" },
      { name: "vegan" },
      { name: "pescetarian" },
      // { name: "paleo" },
      { name: "primal" },
      { name: "low fodmap" },
      { name: "whole 30" },
      { name: "dairy free" },
      { name: "paleolithic" },
      { name: "lacto ovo vegetarian" },
    ];
    const newDiets = await Diet.bulkCreate(arrayDiets);
    console.log("Diets created and saved in the DB");
    return newDiets;
  } else {
    console.log("Diets shown from the DB");
    return diets;
  }
};

module.exports = getDiets;
