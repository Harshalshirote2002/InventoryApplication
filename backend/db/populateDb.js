const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    itemname VARCHAR ( 255 ),
    quantity INTEGER,
    categoryids INTEGER[]
);

CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    categoryname VARCHAR ( 255 ),
    numberofitems INTEGER,
    itemids INTEGER[]
);

INSERT INTO categories (categoryname, numberofitems, itemids)
VALUES
('Monitoring-equipment', 2, ARRAY[1,2]),
('Self-care-equipment', 3, ARRAY[1,5,6]),
('Diagnostic-equipment', 2, ARRAY[1,5]),
('Surgical-Instrument', 1, ARRAY[3]),
('Hospital-equipment', 1, ARRAY[4]),
('Durable-Medical-Equipment', 1, ARRAY[4]),
('Therapeutic-equipment', 1, ARRAY[6]),
('Emergency-care', 1, ARRAY[3]);

INSERT INTO items (itemname, quantity, categoryids) 
VALUES
  ('Thermometer', 27, ARRAY[1,2]),
  ('Stethoscope', 29, ARRAY[1,3]),
  ('Surgical Scalpel', 195, ARRAY[4,8]),
  ('Hospital Bed', 19, ARRAY[5,6]),
  ('Glucometer', 212, ARRAY[2,3]),
  ('Ventilator', 21, ARRAY[2,7]);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
