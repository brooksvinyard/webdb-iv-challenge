exports.up = function(knex) {

    return knex.schema
      .createTable('dishes', tbl => {
        tbl.increments();

        tbl
          .string('name', 128)
          .notNullable()
          .unique();
      })
      .createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('name', 128).notNullable().unique();
      })
      .createTable('recipes', tbl => {
        tbl.increments();

        tbl
          .string('name', 128)
          .notNullable()
          .unique();

        tbl
          .integer('dishes_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('dishes')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');

        tbl
          .string('instructions', 1024)
          .notNullable();
        
        // First of the ingredients column
        tbl
          .integer('ing1_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl
          .float('ing1_quantity')
          .notNullable(); 
        tbl
          .string('ing1_measure', 128)
          .notNullable(); 
        // Ingredient 2
        tbl
        .integer('ing2_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl
        .float('ing2_quantity'); 
        tbl
        .string('ing2_measure', 128);
        // Ingredient 3
        tbl
        .integer('ing3_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl
        .float('ing3_quantity'); 
        tbl
        .string('ing3_measure', 128);
        // Ingredient 4
        tbl
        .integer('ing4_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl
        .float('ing4_quantity'); 
        tbl
        .string('ing4_measure', 128); 
        // Ingredient 5
        tbl
        .integer('ing5_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl
        .float('ing5_quantity'); 
        tbl
        .string('ing5_measure', 128);
        // Ingredient 6
        tbl
        .integer('ing6_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl
        .float('ing6_quantity'); 
        tbl
        .string('ing6_measure', 128); 
        // Ingredient 7
        tbl
        .integer('ing7_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl
        .float('ing7_quantity'); 
        tbl
        .string('ing7_measure', 128); 
        // Ingredient 8
        tbl
        .integer('ing8_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl
        .float('ing8_quantity'); 
        tbl
        .string('ing8_measure', 128); 
        // Ingredient 9
        tbl
        .integer('ing9_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl
        .float('ing9_quantity'); 
        tbl
        .string('ing9_measure', 128);
      })

  };

  exports.down = function(knex) {
    // tables with FK must be removed before the referenced table is removed
    return knex.schema
      .dropTableIfExists('dishes')
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients');
  };