
exports.seed = function(knex) {
  return knex('dishes').insert([
    { name: 'Tacos' }, // 1
    { name: 'Pizza' }, // 2
  ]);
};
