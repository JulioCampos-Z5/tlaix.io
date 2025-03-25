const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Ruta de prueba de conexión a la base de datos
app.get('/api/test-db', async (req, res) => {
  try {
    // Intenta hacer una consulta simple
    const result = await pool.query('SELECT NOW()');
    res.json({
      status: 'Conexión exitosa',
      timestamp: result.rows[0].now,
      message: 'La base de datos está conectada correctamente'
    });
  } catch (err) {
    console.error('Error de conexión:', err);
    res.status(500).json({ 
      status: 'Error',
      message: 'No se pudo conectar a la base de datos',
      error: err.message 
    });
  }
});

// Ruta para listar tablas (si quieres ver el esquema)
app.get('/api/tables', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    res.json({
      status: 'Éxito',
      tables: result.rows.map(row => row.table_name)
    });
  } catch (err) {
    console.error('Error al listar tablas:', err);
    res.status(500).json({ 
      status: 'Error',
      message: 'No se pudieron listar las tablas',
      error: err.message 
    });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});