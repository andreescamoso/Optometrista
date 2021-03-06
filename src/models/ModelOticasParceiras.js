import knex from '../config/db.js'

class ModelOticasParceiras {
    async save(data) {
        await knex('oticaparceira').insert(data)
    }

    async delete(uuid, idEmpresa) {
        await knex('oticaparceira').delete()
            .where('idEmpresa', '=', idEmpresa)
            .andWhere('uuid', '=', uuid)
    }

    async findById(idEmpresa, uuid) {
        const result = await knex('oticaparceira').select()
            .where('idEmpresa', '=', idEmpresa)
            .andWhere('uuid', '=', uuid)

        return result
    }


    async update(data, uuid = "", idEmpresa) {
        await knex('oticaparceira').update(data).where('uuid', '=', uuid).andWhere('idEmpresa', '=', idEmpresa)
    }

    async readUuid(idEmpresa, uuid) {
        const result = await knex('oticaparceira').select(['idOticaParceira'])
            .where('idEmpresa', '=', idEmpresa)
            .andWhere('uuid', '=', uuid)
        return result
    }


    async read(idEmpresa) {
        const result = await knex('oticaparceira').select(['uuid', 'descricao'])
            .where('idEmpresa', '=', idEmpresa)

        return result
    }
}

export default new ModelOticasParceiras();