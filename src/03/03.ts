export const sum = (a: number, b: number) => {
    return a + b
}



type CityType = {
    title: string
    countryTitle: string
}
type AddresType = {
    streetTitle: string
    city: CityType
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    addres: AddresType
    technologies: Array<TechType>
}
export type TechType = {
    id: number
    title: string
}
export const student: StudentType = {
    id: 1,
    name: 'Ivan',
    age: 29,
    isActive: true,
    addres: {
        streetTitle: 'Gorkogo',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        },
    ]
}

export const addSkill = (student: StudentType, skill: string) => {
    student
        .technologies
        .push(
            {
                id: new Date()
                    .getTime(),
                title: skill
            })
}

export function makeStudentActive(s: StudentType){
    s.isActive = true
}

export const isStudentLiveInCity = (s:StudentType, cityName:string) => {
  return s.addres.city.title === cityName
}

