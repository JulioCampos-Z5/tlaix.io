import express from 'express';
import pkg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

// Configuración de dotenv
dotenv.config();

const { Pool } = pkg;
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: [
    'https://tlaixrepo-production.up.railway.app',  
    'https://tlaixio-production.up.railway.app',    
    'http://localhost:5173',                       
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    status: 'Error',
    message: 'Ocurrió un error en el servidor',
    error: err.message 
  });
});

app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      status: 'Conexión exitosa',
      timestamp: result.rows[0].now
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

app.get('/api/pedidos', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM pedidos');
    res.json({
      status: 'Éxito',
      total: result.rows.length,
      pedidos: result.rows
    });
  } catch (err) {
    next(err); 
  }
});
  
app.use((req, res, next) => {
  res.status(404).json({
    status: 'Error',
    message: 'Ruta no encontrada'
  });
});

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});

server.on('error', (error) => {
  console.error('Error en el servidor:', error);
});

export default app;