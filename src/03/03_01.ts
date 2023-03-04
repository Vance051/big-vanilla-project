import {CityType, GovernmentB, HousesType} from "../02/02";

export const addMoneyToBudgetx = ( govBuild: GovernmentB, MoneyHospital: number) => {
    govBuild.budget+= MoneyHospital
}

export const addMoneyToBudget = ( govBuild: GovernmentB, MoneyHospital: number) => {
    govBuild.budget+= MoneyHospital
}

export const repairHouse = (housesType: HousesType) => {
    housesType.repaired = true
}
export const toFireStaff = (building: GovernmentB, staffCount: number) => {
    building.staffCount-=staffCount
}
export const toHireStaff = (building: GovernmentB, staffCount: number) => {
    building.staffCount+=staffCount
}

export function createMessage(city:CityType){
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} man`
}