const constants = require('../../../config/constants');
const config = require('../../../config/config');
const repo = require('../repositories/organizationStructure.repo');

async function isFixedFee(organisation_unit, db_client) {
    if (organisation_unit && organisation_unit.config) {
        const membership_fee_config = organisation_unit.config;
        return membership_fee_config.has_fixed_membership_fee ?
            membership_fee_config.fixed_membership_fee.amount : false;
    }
    return organisation_unit.parent ?
        await isFixedFee(await repo.findOne(db_client, organisation_unit.parent), db_client):
        new Error('Could not find a configuration object');
}

function calculateWeeks(weeks, months){
    return ((months / 12).toFixed(2) * constants.YEAR_WEEKS) + weeks;
}

function minimumFee(amount){
    if(amount < constants.MINIMUM_FEE){
        amount = constants.MINIMUM_FEE;
    }
    return amount
}

module.exports = {

    async calculate_membership_fee(rent_amount, rent_period, organisation_unit, db_client){
        try {
            const [months, weeks] = rent_period;
            let weekly_rent = rent_amount / calculateWeeks(weeks, months);
            if(weekly_rent < constants.MAXIMUM_WEEKLY_RENT &&
            weekly_rent > constants.MINIMUM_WEEKLY_RENT) {
                const fixed_amount = await isFixedFee(organisation_unit, db_client);
                if (fixed_amount) {
                    return fixed_amount;
                }
                weekly_rent = minimumFee(weekly_rent);
                return (weekly_rent+(weekly_rent*config.VAT_PERCENTAGE)).toFixed(2)
            } else {
                throw new Error('Rent amount is outside of the given range');
            }
        } catch (e) {
            console.log("Something went wrong: "+ e);
            throw e;
        }
    },
};