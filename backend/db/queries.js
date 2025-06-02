const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query(`
    SELECT 
      i.id,
      i.itemname,
      i.quantity,
      json_agg(json_build_object(
        'id', c.id,
        'name', c.categoryname
      )) as categories
    FROM items i
    LEFT JOIN LATERAL unnest(i.categoryids) AS category_id(id) ON true
    LEFT JOIN categories c ON c.id = category_id.id
    GROUP BY i.id, i.itemname, i.quantity`
  );
  return rows;
}

async function getAllCategories() {

  const { rows } = await pool.query(
    "SELECT * FROM categories"
  );
  return rows;
}

async function setItem(itemId, itemname, quantity, categoryids) {
  const query = `UPDATE items
    SET itemname = $1, quantity = $2, categoryids = $3
    WHERE id = $4
    RETURNING *`;
  const values = [itemname, quantity, categoryids, itemId];
  const { rows } = await pool.query(query, values);
  if (rows.length === 0) {
    throw new Error("Item not found");
  }
  
}


module.exports = {
  getAllItems,
  getAllCategories,
  setItem
};
