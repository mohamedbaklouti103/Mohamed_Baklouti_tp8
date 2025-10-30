const http = require('http');
const fs = require('fs');
const PORT = 8080;
const serveur = http.createServer((req, res) => {
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur interne du serveur');
            return;
        }
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Serveur Node.js</title>
            </head>
            <body>
                <h1>Mon Serveur Node.js</h1>
                <p>${data}</p>
                <footer>Serveur créé avec Node.js</footer>
            </body>
            </html>
        `);
    });
});

serveur.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});