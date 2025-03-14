/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, name: 'Bird'},
    {id: 2, name: 'Cat'},
    {id: 3, name: 'Dog'}
  ]);
};
