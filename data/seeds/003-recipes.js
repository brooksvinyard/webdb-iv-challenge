
exports.seed = function (knex) {
  return knex('recipes').insert([
    { name: 'Tex-Mex Tacos', dishes_id: 1, instructions: 'Make tex-mex tacos', 
    ing1_id: 1, ing1_quantity: 10, ing1_measure: 'each', 
    ing2_id: 2, ing2_quantity: 2, ing2_measure: 'cups', 
    ing3_id: 3, ing3_quantity: 5, ing3_measure: 'pounds', 
    ing4_id: 4, ing4_quantity: 1, ing4_measure: 'cups' },
    { name: 'Granny Tacos', dishes_id: 1, instructions: 'Make granny tacos', 
    ing1_id: 1, ing1_quantity: 10, ing1_measure: 'each', 
    ing2_id: 2, ing2_quantity: 1, ing2_measure: 'cups', 
    ing3_id: 3, ing3_quantity: 2, ing3_measure: 'pounds', 
    ing4_id: 4, ing4_quantity: 2, ing4_measure: 'cups' },
    { name: 'Cheese Pizza', dishes_id: 2, instructions: 'Make that za', 
    ing1_id: 2, ing1_quantity: 3, ing1_measure: 'cups', 
    ing2_id: 5, ing2_quantity: 1, ing2_measure: 'each'}
  ]);
};
