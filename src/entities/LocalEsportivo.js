const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Reserva = require('./Reserva'); // Certifique-se de que este caminho está correto

const LocalEsportivo = sequelize.define('LocalEsportivo', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoEsporte: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'locais_esportivos',
  timestamps: true,
});

// Define o relacionamento APÓS importar Reserva
LocalEsportivo.hasMany(Reserva, { foreignKey: 'localEsportivoId', as: 'reservas' });

module.exports = LocalEsportivo;
