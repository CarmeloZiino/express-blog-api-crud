const express = require("express"); //Richiama l'utilizzo di Express
const app = express(); //Definisce Express nella costante app
const port = 3000; //Definisce una porta alla quale assegnare i comandi

const postsRouter = require("./routers/posts") //Richiama il routers 

app.use(express.static('public')); //Consente l'accesso alla cartella pubblic

