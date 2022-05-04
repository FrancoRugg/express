const express = require("express");
const app = express();
const path = require("path");

const port=3030;

app.listen( port, () => {

    console.log( `Funciona el servidor` );
  
  });
  app.use(express.static("./GH-Heroes/public"));

app.get("/", (req, res)=>{
    res.sendFile(path.resolve("./view/index.html"))
})
app.get("/babbage", (req, res)=>{
    res.sendFile(path.resolve("./view/babbage.html"))
})
app.get("/berners-lee", (req, res)=>{
    res.sendFile(path.resolve("./view/berners-lee.html"))
})
app.get("/clarke", (req, res)=>{
    res.sendFile(path.resolve("./view/clarke.html"))
})
app.get("/hamilton", (req, res)=>{
    res.sendFile(path.resolve("./view/hamilton.html"))
})
app.get("/hopper", (req, res)=>{
    res.sendFile(path.resolve("./view/hopper.html"))
})
app.get("/lovelace", (req, res)=>{
    res.sendFile(path.resolve("./view/lovelace.html"))
})
app.get("/turing", (req, res)=>{
    res.sendFile(path.resolve("./view/turing.html"))
})

