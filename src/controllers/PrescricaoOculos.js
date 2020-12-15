import ModelPrescrissaoOculos from '../models/ModelPrescricaoOculos'

class ControllerPrescrissaoOculos {
  async save(req, res) {
    const { data } = req.body
    const uuid = await ModelPrescrissaoOculos.save({ ...data, idEmpresa: req.idEmpresa })
    return res.status(201).json({
      message: 'Prescrição registrado com sucesso.',
      uuid: uuid
    })
  }

  async update(req, res) {
    const { data } = req.body
    const uuid = String(req.params.uuid)
    await ModelPrescrissaoOculos.update(data, uuid)

    return res.status(201).json({
      message: 'Prescrição atualizada com sucesso.'
    })
  }

  async delete(req, res) {
    const uuid = String(req.params.uuid)
    await ModelPrescrissaoOculos.delete(uuid)
    return res.status(201).json({
      message: 'Prescrição deletada com sucesso.'
    })
  }

  async findById(req, res) {
    const uuid = String(req.params.uuid)
    const result = await ModelPrescrissaoOculos.findById(uuid)
    return res.status(201).json({
      message: 'Prescrição pesquisada.',
      prescricao: result
    })
  }

  async readParams(req, res) {
    const idPaciente = req.params.idPaciente;
      const dataInicial = req.params.dataInicial;
      const dataFinal = req.params.dataFinal;
      const result = await ModelPrescrissaoOculos.read(idPaciente, req.idEmpresa, dataInicial, dataFinal)
      res.status(201).json({
        result
      })
  }
}

export default new ControllerPrescrissaoOculos()
