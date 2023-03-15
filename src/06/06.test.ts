import {CityType} from "./../02/02";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildAt: 2012, repaired: false, address: {
                    number: 100, street: {title: "White street"}
                }
            },
            {
                buildAt: 2008, repaired: false, address: {
                    number: 100, street: {title: "Happy street"}
                }
            },
            {
                buildAt: 2020, repaired: false, address: {
                    number: 101, street: {title: "Happy street"}
                }
            }
        ],
        governmentBuildings: [
            {type: 'HOSPITAL', budget: 200000, staffCount: 200, address: {street: {title: 'Central Str'}}},
            {type: 'FIRE-STATION', budget: 500000, staffCount: 100, address: {street: {title: 'South Str'}}}

        ],
        citizensNumber: 1000000
    }
})