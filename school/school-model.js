const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
//   findBy,
  update,
  remove
  // findById,
};

function find(id) {
  if (id) {
    return db("schools")
      .where({ id })
      .first();
  } else {
    return db("schools");
  }
}

// function findBy(body) {
//   return db("users").where(body);
// }

function add(item) {
  return db("schools")
    .insert(item, "id")
    .then(ids => {
      const [id] = ids;
      return find(id);
    });
}

function update(body, id) {
  return db("schools")
	.where({ id })
    .update(body, "id")
    .then(ids => {
      return db("schools").where({ id });
    });
}

function remove(id) {
  return db("schools")
    .del()
    .where({ id });
}
