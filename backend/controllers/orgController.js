let { org } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    GetOrganization(orgId, clientId){
        // use not for api
        const objReturn = org.findOne({
            where: {
                org_id: orgId,
                client_id: clientId,
                isactive: true
            }
        })
        return objReturn
    }
}