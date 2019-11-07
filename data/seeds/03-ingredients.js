
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'pasta'},
        {ingredient: 'eggs'},
        {ingredient: 'beef'},
        {ingredient: 'oats'},
        {ingredient: 'ketchup'},
        {ingredient: 'sugar'},        
      ]);
    });
};