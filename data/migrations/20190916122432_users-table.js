exports.up = function(knex) {
  return knex.schema.createTable("users", column => {
    // Creating Users Table
    column.increments();

    column
      .string("username", 128)
      .notNullable()
      .unique();
    column.string("password", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
