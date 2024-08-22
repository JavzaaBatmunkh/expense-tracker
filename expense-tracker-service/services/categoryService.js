const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const { sql } = require(`../configs/database`);

async function getCategories() {
  const list = await sql`select * from categories`;
  console.log({ list })
  return list;
}

async function createNewCategory(name) {
  const id = uuidv4()
  await sql`INSERT INTO categories (id, name) VALUES(${id}, ${name})`
  return id;

}
async function getOneCategories(id) {
  const list = await sql`select * from categories where id=${id}`;
  console.log({ list })
  return list;
}
async function updateCategories(id, input) {
  const list= await sql`update categories set name=${input.name} where id=${id}`
  return list;
}
async function deleteCategories(id) {
  await sql`delete from categories where id=${id}`;
}

module.exports = {
  getCategories, createNewCategory, getOneCategories,
  updateCategories, deleteCategories
}
