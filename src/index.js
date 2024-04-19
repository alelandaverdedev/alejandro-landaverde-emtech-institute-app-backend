const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const studentRoutes = require('./routes/student-routes');


// Definición de rutas
app.use(express.json());
app.use(cors());
app.use('/api/student', studentRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
