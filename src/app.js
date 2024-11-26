require('dotenv').config(); // Carrega variáveis do .env
require('./entities/associations'); // Configura os relacionamentos

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

// Configuração do aplicativo
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas
const anfitriaoRoutes = require('./routes/anfitriaoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const localEsportivoRoutes = require('./routes/localEsportivoRoutes');
const reservaRoutes = require('./routes/reservaRoutes');

app.use('/api/anfitrioes', anfitriaoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/locais-esportivos', localEsportivoRoutes);
app.use('/api/reservas', reservaRoutes);

// Sincronizar banco de dados
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

// Iniciar servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


