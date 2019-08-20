module.exports = {
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/hermes?authSource=admin',
    MONGO_DB: process.env.MONGO_DB || 'hermes',
    MONGO_SETTINGS:  { useNewUrlParser: true, useUnifiedTopology: true },
    RENT_AMOUNT: process.env.RENT_AMOUNT,
    RENT_PERIOD: process.env.RENT_PERIOD,
    ORGANISATION_UNIT: process.env.ORGANISATION_UNIT,
    VAT_PERCENTAGE: process.env.VAT_PERCENTAGE || 0.20
};