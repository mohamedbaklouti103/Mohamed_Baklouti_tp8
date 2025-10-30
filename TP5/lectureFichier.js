const fs = require('fs');
console.log("Reading file, please wait...");
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur de lecture :', err);
        return;
    }
    console.log('Contenu du fichier :', data);
});