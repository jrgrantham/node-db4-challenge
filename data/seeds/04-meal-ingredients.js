
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meal_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('meal_ingredients').insert([
        {meal_id: 1, ingredient_id: 1, quantity: 1, unit: 'gram'},
        {meal_id: 1, ingredient_id: 2, quantity: 1, unit: 'gram'},
        {meal_id: 1, ingredient_id: 3, quantity: 1, unit: 'gram'},
        {meal_id: 1, ingredient_id: 4, quantity: 1, unit: 'gram'}
      ]);
    });
};
