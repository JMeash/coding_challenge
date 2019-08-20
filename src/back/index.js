require('dotenv').config();
const repo = require('./repositories/organizationStructure.repo');
const controllerMembership = require('./controllers/memberships');
const config = require('../../config/config');
const constants = require('../../config/constants');

async function main() {
    let dbClient = null;
    try{
        dbClient = await repo.openDatabase();
        const organisation_unit = await repo.findOne(dbClient.db(config.MONGO_DB), config.ORGANISATION_UNIT);
        const payload = {
            rent_amount : {
                amount : config.RENT_AMOUNT,
                currency : constants.GDP,
            },
            rent_period : config.RENT_PERIOD,
            organisation_unit: organisation_unit,
        };
        const request = {
            db_client : dbClient.db(config.MONGO_DB),
            payload
        };
        const reply = await controllerMembership.calculate_membership_fee(request, {});
        console.log('The membership fee amount is %s %s', reply.body, constants.GDP);
    } catch (e) {
        console.log('Fatal error: ' +e);
        process.exit(1);
    } finally {
        await dbClient.close();
    }
}
main();
