const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const LocalEsportivo = require('./LocalEsportivo');

const Reserva = sequelize.define('Reserva', {
  dataReserva: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pendente',
  },
}, {
  tableName: 'reservas',
  timestamps: true,
});

// Relacionamentos
Reserva.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });
Reserva.belongsTo(LocalEsportivo, { foreignKey: 'localEsportivoId', as: 'localEsportivo' });

module.exports = Reserva;
