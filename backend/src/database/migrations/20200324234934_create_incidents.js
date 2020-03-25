
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments() //cria um id auto_increment
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()
        
        table.string('ong_id').notNullable() //chave de relacionamento
        
        table.foreign('ong_id').references('id').inTable('ongs') //cria a foreignKey
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
};
