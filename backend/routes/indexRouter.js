const {Router} = require('express');
const { getAllItems, getAllCategories, setItem } = require("../db/queries");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("Welcome to the API! Use /items or /categories to access data.");
}
);

indexRouter.get("/items", (req, res) => {
    getAllItems()
        .then(items => {
            res.json(items);
        })
        .catch(err => {
            console.error("Error fetching items:", err);
            res.status(500).send("Internal Server Error");
        });
}
);

indexRouter.get("/categories", (req, res) => {
    getAllCategories()
        .then(categories => {
            res.json(categories);
        })
        .catch(err => {
            console.error("Error fetching categories:", err);
            res.status(500).send("Internal Server Error");
        });
}
);

indexRouter.post("/items", (req, res) => {
    // console.log("Received request to set item:", req.body);
    const { itemId, itemname, quantity, categoryids } = req.body;
    setItem(itemId, itemname, quantity, categoryids)
    // Here you would typically call a function to insert the item into the database
    // For now, we will just return a success message
    res.send("Item created successfully");
    // res.status(201).json({ message: "Item created successfully", itemId, itemname, quantity, categoryids });
}
);

module.exports = indexRouter;
// This code defines an Express router for handling requests to the root path ("/") and two additional paths: "/items" and "/categories".