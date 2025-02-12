/*  MILESTONE 1
    1. creiamo un controller per i nostri post, in una cartella controllers.

    2. All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).
  
    3. Poi torniamo sul file delle rotte... 
*/

const arrayPosts = require("../data/posts"); //Richiama l'array dei post, nella cartella data




/* MILESTONE 2
    3. Ora passiamo ad implementare le logiche delle nostre CRUD:

    Index dovrà restituire la lista dei post in formato JSON

    Show dovrà restituire un singolo post in formato JSON

    Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

*/
function index(req, res) {
  // res.send('Lista dei Post') //MILESTONE 1
  res.json(arrayPosts);
}

function show(req, res) {
    //   res.send("Dettagli del post" + req.params.id); //MILESTONE 1
    const id = parseInt(req.params.id); //recupero id e lo trasformo in numero
    const post = arrayPosts.find (post => post.id === id) //Cerco il post tramite l'id

    if (!post){ //Condizione per la quale se non trova l'id e quindi il post, dà errore
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovata"
    })}

    res.json(post)

}

function store(req, res) {
  res.send("Creazione nuovo post");
}

function update(req, res) {
  res.send("Modifica integrale del post" + req.params.id);
}

function patch(req, res) {
  res.send("Modifica parziale del post" + req.params.id);
}

function destroy(req, res) {
//   res.send("Eliminazione del post" + req.params.id); //MILESTONE 1
  
  const id = parseInt(req.params.id); //recupero id e lo trasformo in numero
  const post = arrayPosts.find (post => post.id === id) //Cerco il post tramite l'id

    if (!post){ //Condizione per la quale se non trova l'id e quindi il post, dà errore
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovata"
    })
 }
 arrayPosts.splice (arrayPosts.indexOf(post), 1); //Rimuovo il post selezionato dall'array
 res.json(arrayPosts)
 res.send.status(204)

}

module.exports = { index, show, store, update, patch, destroy };
