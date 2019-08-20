const arr = [ { name: 'client',
    config:
        { has_fixed_membership_fee: false,
            fixed_membership_fee: {
                amount: 0,
                currency: 'GBP',
            } },
    uuid: '40342c94-fd63-41a4-a45f-c2aa89fa21e6' },
    { name: 'division_a',
        config:
            { has_fixed_membership_fee: true,
                fixed_membership_fee: {
                    amount: 45000,
                    currency: 'GBP',
                } },
        uuid: '94b96aaa-42f1-414c-972d-502c179dc27b' },
    { name: 'division_b',
        config:
            { has_fixed_membership_fee: true,
                fixed_membership_fee: {
                    amount: 45000,
                    currency: 'GBP',
                } },
        uuid: '8dc050a3-4eee-41b0-b92c-1dafcd91b71a' },
    { name: 'area_a',
        parent: '94b96aaa-42f1-414c-972d-502c179dc27b',
        config:
            { has_fixed_membership_fee: true,
                fixed_membership_fee: {
                    amount: 45000,
                    currency: 'GBP',
                } },
        uuid: '85fa7efd-cd09-4c2a-b0af-ad66057ec33a' },
    { name: 'area_b',
        parent: '94b96aaa-42f1-414c-972d-502c179dc27b',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                }},
        uuid: '8fd51e38-8bda-4f85-8b88-399d8994aab4' },
    { name: 'area_c',
        parent: '8dc050a3-4eee-41b0-b92c-1dafcd91b71a',
        config:
            { has_fixed_membership_fee: true,
                fixed_membership_fee: {
                    amount: 45000,
                    currency: 'GBP',
                } },
        uuid: 'c60a8efb-c5b7-4d3f-b12f-22d3f674ec59' },
    { name: 'area_d',
        parent: '8dc050a3-4eee-41b0-b92c-1dafcd91b71a',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: '99a8b0ee-bbf1-46f8-af3c-78ad583999ab' },
    { name: 'branch_a',
        parent: '85fa7efd-cd09-4c2a-b0af-ad66057ec33a',
        config: null,
        uuid: '438af26b-0a35-4863-81c9-c88756a476a7' },
    { name: 'branch_b',
        parent: '85fa7efd-cd09-4c2a-b0af-ad66057ec33a',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: '7f91039c-39c8-42e1-95fa-ac77deeb2a23' },
    { name: 'branch_c',
        parent: '85fa7efd-cd09-4c2a-b0af-ad66057ec33a',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: '703bc1ef-19af-47cd-9bbe-863605148aef' },
    { name: 'branch_d',
        parent: '85fa7efd-cd09-4c2a-b0af-ad66057ec33a',
        config: null,
        uuid: '1fa65915-19e7-43ad-8967-e1640e101bb3' },
    { name: 'branch_e',
        parent: '8fd51e38-8bda-4f85-8b88-399d8994aab4',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: 'b507e64e-42d7-4fb2-b89f-4770acef5522' },
    { name: 'branch_f',
        parent: '8fd51e38-8bda-4f85-8b88-399d8994aab4',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: 'fa87740d-94b2-494d-9509-5d311ece062b' },
    { name: 'branch_g',
        parent: '8fd51e38-8bda-4f85-8b88-399d8994aab4',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: 'a4d34d5a-ab81-4d4f-8891-44130f686cc3' },
    { name: 'branch_h',
        parent: '8fd51e38-8bda-4f85-8b88-399d8994aab4',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: 'f31b5826-fb1c-4aef-9593-93361bf23f59' },
    { name: 'branch_i',
        parent: '703bc1ef-19af-47cd-9bbe-863605148aef',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: '5edde4ec-9a08-4bf5-b7d2-4a81464fc128' },
    { name: 'branch_j',
        parent: '703bc1ef-19af-47cd-9bbe-863605148aef',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: 'df1cd336-879c-4ec9-a58e-3be417bbca1a' },
    { name: 'branch_k',
        parent: '703bc1ef-19af-47cd-9bbe-863605148aef',
        config:
            { has_fixed_membership_fee: true,
                fixed_membership_fee: {
                    amount: 25000,
                    currency: 'GBP',
                } },
        uuid: '030ef3ef-8adc-47e3-b11c-ec285b12fcc6' },
    { name: 'branch_l',
        parent: '703bc1ef-19af-47cd-9bbe-863605148aef',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: '05f3c1d0-cd9b-4065-809a-914a745780bd' },
    { name: 'branch_m',
        parent: '99a8b0ee-bbf1-46f8-af3c-78ad583999ab',
        config: null,
        uuid: '7ae3da54-bf04-4950-8392-63856efb6466' },
    { name: 'branch_n',
        parent: '99a8b0ee-bbf1-46f8-af3c-78ad583999ab',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: '8feb191b-8b16-4424-8e43-d803da926cbd' },
    { name: 'branch_o',
        parent: '99a8b0ee-bbf1-46f8-af3c-78ad583999ab',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: '0e943eeb-de98-43f6-9676-9000493770a7' },
    { name: 'branch_p',
        parent: '99a8b0ee-bbf1-46f8-af3c-78ad583999ab',
        config:
            { has_fixed_membership_fee: false,
                fixed_membership_fee: {
                    amount: 0,
                    currency: 'GBP',
                } },
        uuid: '5c7fb063-15aa-463c-8485-6469c2586e93' } ];
const uuidv4 = require('uuid/v4');

async function main(){
    for (let branch of arr){
        branch[uuid] = uuidv4();
    }
    console.log(arr);
}

main();