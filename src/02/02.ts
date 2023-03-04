

type TvType = {
    name: string
    size: number
}

type RoomType = {
    wall: number
    TV: TvType
    Couch: boolean
}

export const room: RoomType = {
    wall: 4,
    TV : {
         name: 'samsung',
        size: 55
    },
    'Couch': true
}

console.log(room.TV.size)

export type CityType = {
    title:string
    houses:HousesType[]
    governmentBuildings : GovernmentBuildingsType
    citizensNumber : number
}
export type HousesType ={
    buildAt:number
    repaired:boolean
    address: AddressType
}

type AddressType = {
    number:number
    street:StreetType
}
type StreetType = {
    title:string
}
export type GovernmentBuildingsType = Array<GovernmentB>
export type GovernmentB ={
    type:string
    budget:number
    staffCount:number
    address: StreetType1
}
type StreetType1={
    street: StreetTitle
}
type StreetTitle={
    title: string
}