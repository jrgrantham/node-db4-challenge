const db = require('../db-config')

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
  getMealsForIngredient
}

function getRecipes() {
  return db('menu')
}

function getRecipeById(id) {
  return db('menu')
    .where({'menu.id': id})
}

function getShoppingList(id) {
  return db('meal_ingredients as mi')
    .join('ingredients as i', 'i.id', 'mi.ingredient_id')
    .select('i.ingredient', 'mi.quantity', 'mi.unit')
    .where({'mi.meal_id': id})
}

function getInstructions(id) {
  return db('instructions as i')
    .select('instruction_number', 'instruction')
    .where({'i.meal_id': id})
}

function getMealsForIngredient(ingredient) {
  return db('menu as m')
    .join('meal_ingredients as mi', 'mi.id', 'm.id')
    .join('ingredients as i', 'i.id', 'm.id')
    .select('m.meal_name')
    .where({'i.id': ingredient})
}