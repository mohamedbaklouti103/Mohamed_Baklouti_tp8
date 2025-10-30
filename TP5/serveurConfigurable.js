const http = require('http');
const PORT = process.argv[2] || 3000;
const serveur = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Serveur en écoute sur le port ${PORT}`);
});
serveur.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    console.log(`Arguments reçus : ${process.argv}`);
});