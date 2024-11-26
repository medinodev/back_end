const Usuario = require('./Usuario');
const Reserva = require('./Reserva');
const LocalEsportivo = require('./LocalEsportivo');

// Define os relacionamentos
Usuario.hasMany(Reserva, { foreignKey: 'usuarioId', as: 'reservas' });
Reserva.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

LocalEsportivo.hasMany(Reserva, { foreignKey: 'localEsportivoId', as: 'reservas' });
Reserva.belongsTo(LocalEsportivo, { foreignKey: 'localEsportivoId', as: 'localEsportivo' });

module.exports = { Usuario, Reserva, LocalEsportivo };


