import knex from '../config/db'
import { v4 } from 'uuid'

class ModelPrecricaoOculos {
  async save(prescricaoOculos) {
    const result = await knex('prescricao_oculos').insert({
      ...prescricaoOculos,
      uuid: v4()
    })
    return result[0]
  }

  async update(prescricaoOculos, uuid = "") {
    await knex('prescricao_oculos').update(prescricaoOculos).where('uuid', '=', uuid)
  }

  async delete(uuid = "") {
    await knex('prescricao_oculos').delete()
      .where('uuid', '=', uuid)
  }

  async findById(uuid = "") {
    const result = await knex('prescricao_oculos').select()
      .where('uuid', '=', uuid)
      .first()

    return result
  }
}


export default new ModelPrecricaoOculos()