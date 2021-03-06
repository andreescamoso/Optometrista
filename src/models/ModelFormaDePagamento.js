import { v4 } from 'uuid';
import knex from '../config/db.js';

class ModelFormaDePagamento {
    async save(data) {
        const uuid = v4();
        const result = await knex('formapagamento').insert({
            uuid,
            ...data
        })
        return ({
            uuid,
            idFormaPagamento: result
        })
    }

    async read(idEmpresa) {
        const result = await knex('formapagamento').select(['uuid', 'descricao'])
            .where('idEmpresa', '=', idEmpresa)

        return result
    }


    async readUuid(idEmpresa, uuid) {
        const result = await knex('formapagamento').select(['idFormaPagamento'])
            .where('idEmpresa', '=', idEmpresa)
            .andWhere('uuid', '=', uuid)
        return result
    }

    async update(data, uuid = "", idEmpresa) {
        await knex('formapagamento').update(data).where('uuid', '=', uuid).andWhere('idEmpresa', '=', idEmpresa)
    }

    async findById(idEmpresa, uuid, colunas = []) {
        const result = await knex('formapagamento').select(colunas)
            .where('idEmpresa', '=', idEmpresa)
            .andWhere('uuid', '=', uuid)

        return result
    }

    async delete(uuid, idEmpresa) {
        const result = await knex('formapagamento').delete()
            .where('idEmpresa', '=', idEmpresa)
            .andWhere('uuid', '=', uuid)

        return result
    }


}

export default new ModelFormaDePagamento();