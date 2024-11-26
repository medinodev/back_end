const reservaRepository = require('../repositories/reservaRepository');
const Reserva = require('../entities/Reserva');
const Usuario = require('../entities/Usuario');
const LocalEsportivo = require('../entities/LocalEsportivo');

module.exports = {
  async listar() {
    return await Reserva.findAll({
      include: [
        { model: Usuario, as: 'usuario' },
        { model: LocalEsportivo, as: 'localEsportivo' },
      ],
    });
  },
  async buscarPorId(id) {
    return await reservaRepository.buscarPorId(id);
  },
  async criar(reserva) {
    // Aqui você pode adicionar validações ou lógica adicional, se necessário
    return await reservaRepository.criar(reserva);
  },
  async atualizar(id, novosDados) {
    return await reservaRepository.atualizar(id, novosDados);
  },
  async deletar(id) {
    return await reservaRepository.deletar(id);
  },
};
