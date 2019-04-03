
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { name: 'Tortillias' },   // 1
    { name: 'Cheese' },       // 2
    { name: 'Ground Beef' },  // 3
    { name: 'Salsa' },        // 4
    { name: 'Pizza Dough' },  // 5
  ]);
};
