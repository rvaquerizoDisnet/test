const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta para recibir peticiones JSON
app.post('/json', (req, res) => {
    console.log(req.body); // Imprime el JSON recibido
    res.send('JSON recibido');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
