import {addSkill, isStudentLiveInCity, makeStudentActive, StudentType} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: 'Ivan',
        age: 29,
        isActive: false,
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
})
test('new Skill should be added to Student', () => {
    // action

    expect(student.technologies.length).toBe(3);

    addSkill(student, 'JS');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})
test('Student should be made active', () => {
        expect(student.isActive).toBe(false);
        makeStudentActive(student);
        expect(student.isActive).toBe(true);
    }
)

test('Student should live in city?', () => {

     let result= isStudentLiveInCity(student, 'Moskow');
    let result1= isStudentLiveInCity(student, 'Minsk');
     expect(result).toBe(false)
     expect(result1).toBe(true)
    }
)


