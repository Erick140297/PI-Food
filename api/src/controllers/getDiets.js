const { Diet } = require("../db");

const getDiets = async () => {
  const diets = await Diet.findAll();
  if (diets.length === 0) {
    const arrayDiets = [
      { name: "gluten free" },
      { name: "ketogenic" },
      { name: "vegetarian" },
      { name: "vegan" },
      { name: "dairy free" },
      { name: "lacto ovo vegetarian" },
      { name: "paleolithic" },
      { name: "primal" },
      { name: "whole 30" },
      { name: "pescatarian" },
      { name: "fodmap friendly" },
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
