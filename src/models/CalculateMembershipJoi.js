const Joi = require('joi');

function CalculateMembershipJoi() {
    return  Joi.object().keys({
        rent_amount: Joi.object().keys({
            amount: Joi.number().positive().required(),
            currency: Joi.string().length(3).required(),
        }).required(),
        rent_period: Joi.array().items(Joi.number().integer().min(1).max(12).required(), Joi.number().integer().min(1).max(6).required()),
        organisation_unit: Joi.object().required(),
    }).required();
}

module.exports = CalculateMembershipJoi;