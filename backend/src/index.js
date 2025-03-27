import express from 'express';
import pkg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;
const app = express();
const port = process.env.PORT || 3000;

// Middleware de logging detallado
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  next();
});

// Configuración de CORS más flexible
app.use(cors({
  origin: '*', // Temporalmente abierto para diagnóstico
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Manejo global de errores no capturados
process.on('uncaughtException', (error) => {
  console.error('UNCAUGHT EXCEPTION:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION:', reason);
});

// Configuración de base de datos con más logging
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Prueba de conexión explícita
async function conectarBaseDatos() {
  try {
    const cliente = await pool.connect();
    console.log('✅ Conexión a base de datos establecida');
    cliente.release();
  } catch (error) {
    console.error('❌ Error de conexión a base de datos:', error);
    // Esto ayudará a identificar problemas de conexión
    console.error('Detalles del error:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });
  }
}

conectarBaseDatos();

app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Servidor funcionando',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/pedidos', async (req, res, next) => {
  try {
    console.log('🔍 Iniciando consulta de pedidos');
    const result = await pool.query('SELECT * FROM pedidos');
    
    console.log(`📦 Pedidos encontrados: ${result.rows.length}`);
    
    res.json({
      status: 'Éxito',
      total: result.rows.length,
      pedidos: result.rows
    });
  } catch (err) {
    console.error('❌ Error en ruta /api/pedidos:', err);
    next(err);
  }
});

// Middleware de manejo de errores mejorado
app.use((err, req, res, next) => {
  console.error('💥 Error de servidor detallado:', {
    message: err.message,
    name: err.name,
    stack: err.stack
  });
  
  res.status(500).json({ 
    status: 'Error',
    message: 'Error interno del servidor',
    detailedError: err.message
  });
});

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    status: 'Error',
    message: 'Ruta no encontrada'
  });
});

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en puerto ${port}`);
});

server.on('error', (error) => {
  console.error('🔥 Error crítico en el servidor:', error);
});

export default app;