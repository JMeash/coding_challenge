const services = require('../services/memberships');
const CalculateMembershipJoi = require('../../models/CalculateMembershipJoi');

function validateSchema(payload, schema){
    const result = schema.validate(payload);
    if(result.error){
        console.log('There is an error in the schema: '+ result.error);
        throw new Error(result.error);
    }
    return result.value;
}

module.exports = {
    async calculate_membership_fee(request, reply){
        try {
            const {rent_amount, rent_period, organisation_unit} = validateSchema(request.payload, new CalculateMembershipJoi());
            reply.body = await services.calculate_membership_fee(rent_amount.amount, rent_period, organisation_unit, request.db_client);
            reply.code = 200;
            return reply;
        } catch (e) {
            throw new Error('There was an error processing the request: ' + e);
        }
    },

};