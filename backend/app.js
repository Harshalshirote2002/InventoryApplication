const express = require('express')
const cors = require('cors');

const app = express()

const indexRouter = require("./routes/indexRouter")

app.use(express.json());

app.use(cors({
    origin: "*", // Allow all origins
    methods: "GET,POST,PUT,DELETE", // Allow specific HTTP methods
    // allowedHeaders: "Content-Type,Authorization" // Allow specific headers
}));

app.use("/", indexRouter)

const PORT = 5432;

app.listen(PORT, ()=>{
    console.log("Port is live and listening now!")
})