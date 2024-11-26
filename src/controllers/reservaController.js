const reservaService = require('../services/reservaService');
const Reserva = require('../entities/Reserva');
const Usuario = require('../entities/Usuario');
const LocalEsportivo = require('../entities/LocalEsportivo');

module.exports = {
  async listar(req, res) {
    try {
      const reservas = await Reserva.findAll({
        include: [
          { model: Usuario, as: 'usuario' }, // Inclui os dados do Usuário
          { model: LocalEsportivo, as: 'localEsportivo' }, // Inclui os dados do Local Esportivo
        ],
      });
      res.status(200).json(reservas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar reservas.', error });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const reserva = await reservaService.buscarPorId(id);
      if (!reserva) return res.status(404).json({ message: 'Reserva não encontrada.' });
      res.json(reserva);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar reserva.', error });
    }
  },

  async criar(req, res) {
    try {
      const novaReserva = await reservaService.criar(req.body);
      res.status(201).json(novaReserva);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar reserva.', error });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const reservaAtualizada = await reservaService.atualizar(id, req.body);
      res.json(reservaAtualizada);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar reserva.', error });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await reservaService.deletar(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar reserva.', error });
    }
  },
};
