const express = require("express"); //Richiama l'utilizzo di Express
const app = express(); //Definisce Express nella costante app
const port = 3000; //Definisce una porta alla quale assegnare i comandi

const postsRouter = require("./routers/postRouter"); //Richiama il routers

app.use(express.static("public")); //Consente l'accesso alla cartella pubblic

app.use(express.json());


app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send(`Server della mia pizzeria`);
});

//attivazione del server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
