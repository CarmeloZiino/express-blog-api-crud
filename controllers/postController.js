/*  
    1. creiamo un controller per i nostri post, in una cartella controllers.

    2. All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).
  
    3. Poi torniamo sul file delle rotte... 
*/

function index (req, res) {
res.send('Lista dei Post')
};

function show (req, res) {
res.send('Dettagli del post' + req.params.id)
};

function store (req, res) {
res.send('Creazione nuovo post')
};

function update (req, res) {
res.send('Modifica integrale del post' + req.params.id)
};

function patch (req, res) {
res.send('Modifica parziale del post' + req.params.id)
};

function destroy (req, res) {
res.send('Eliminazione del post' + req.params.id)
};

module.exports = {index , show, store, update, patch, destroy}