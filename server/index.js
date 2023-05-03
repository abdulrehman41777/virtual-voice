import express  from "express";

const app = express();

app.use(express.json());

const port = 5000

app.get('/', (req, res) => {

    res.send("HEllo WOrld");
})

app.listen(port , () => {
    console.log(`Your Port Is Running On ${port}`);
})