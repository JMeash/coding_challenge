const mongodb = require('mongodb');
const config = require('../../../config/config');

module.exports = {

    async openDatabase(){
        return await mongodb.MongoClient.connect(config.MONGO_URL, config.MONGO_SETTINGS);
    },

    async findOne(dbClient, organisation_unit_uuid){
        return await dbClient.collection('branches').findOne({uuid: organisation_unit_uuid});
    },

};