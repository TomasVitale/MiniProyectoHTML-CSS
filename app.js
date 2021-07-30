const express = require("express");
const app = express();
const path = require("path");

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"views/home.html"))
})
app.listen(process.env.PORT || 3000,() =>{
    console.log("La app esta funcionando en http://localhost:3000");
})
app.use(express.static("public"));