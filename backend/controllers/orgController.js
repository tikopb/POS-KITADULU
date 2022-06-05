let { org } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    GetOrganization(orgId, clientId){
        const objReturn = org.findOne({
            where: {
                org_id: orgId,
                client_id: clientId,
                isactive: true
            }
        })
        //user_game.length !== null && data.get('isAdmin')
        return objReturn
    }
}