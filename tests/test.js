const controllerMembership = require('../src/back/controllers/memberships');
let request = {payload : {
    rent_amount: {
        amount: 800,
        currency: 'GDP'
    },
    rent_period: [1,3],
    organisation_unit: {"name":"branch_p","parent":"99a8b0ee-bbf1-46f8-af3c-78ad583999ab","config":{"has_fixed_membership_fee":false,"fixed_membership_fee":{"amount":0,"currency":"GBP"}},"uuid":"5c7fb063-15aa-463c-8485-6469c2586e93"}
}, db_client: {}
};

beforeEach(() => {
    request = {payload : {
            rent_amount: {
                amount: 800,
                currency: 'GDP'
            },
            rent_period: [1,3],
            organisation_unit: {"name":"branch_p","parent":"99a8b0ee-bbf1-46f8-af3c-78ad583999ab","config":{"has_fixed_membership_fee":false,"fixed_membership_fee":{"amount":0,"currency":"GBP"}},"uuid":"5c7fb063-15aa-463c-8485-6469c2586e93"}
        }, db_client: {}};
});

describe('Membership calculation tests', () => {
    it('should return an error if we initialize wrongly the function', async () => {
        async function calculate() {
            await controllerMembership.calculate_membership_fee({payload: 'badConfig'},  {})
        }
        await expect(calculate()).rejects.toThrow(/ValidationError/);
    });

    it('should return an error if the amount is outside the range', async () => {
        request.payload.rent_amount.amount = 20;
        async function calculate() {
            const result = await controllerMembership.calculate_membership_fee(request, {});
            console.log(JSON.stringify(result));
        }
        await expect(calculate()).rejects.toThrow(/Rent amount is outside of the given range/);
    });

    it('given an organisation_unit object with a fixed fee it will return the fixed fee', async () => {
        request.payload.organisation_unit = {
            "config":{
                "has_fixed_membership_fee":true,
                "fixed_membership_fee":{"amount":25000,"currency":"GBP"}}
        };
        const result = await controllerMembership.calculate_membership_fee(request, {});
        expect(parseFloat(result.body)).toBe(25000);
    });

    it('given a low membership fee the minimum returned is a fixed amount', async () => {
        request.payload.rent_amount.amount = 300;
        const result = await controllerMembership.calculate_membership_fee(request, {});
        expect(parseFloat(result.body)).toBe(144.00);
    })

    it('given valid arguments should return expected calculated fee', async () => {
        request.payload.rent_amount.amount = 5000;
        request.payload.rent_period = [3, 3];
        const result = await controllerMembership.calculate_membership_fee(request, {});
        expect(parseFloat(result.body)).toBe(374.18);
    });

});