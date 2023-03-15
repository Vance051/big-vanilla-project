import {type} from "os";

test('should take ald man older than 90', () => {
    const ages = [18, 29, 22, 1, 100, 90, 14];
    const oldAges = ages.filter(man => man > 90)

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should take cheapper courses ', () => {
    type CoursType ={
        title :string
        price:number
    }
    const courses = [
        {title: 'css', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150},
    ];
    const chipCours = courses.filter(course=>course.price<160)

    expect(chipCours.length).toBe(2);
    expect(chipCours[0].title).toBe('css');
    expect(chipCours[1].title).toBe('React');
})

test('get only completed tasks', ()=>{
    type TaskType ={
        id:number
        title:string
        isDone:boolean
    }
    const tasks = [
        {id:1, title: 'Bread', isDone: false},
        {id:2, title: 'Milk', isDone: true},
        {id:3, title: 'Butter', isDone: false},
        {id:4, title: 'sugar', isDone: true},
    ]

    const completedtasks = tasks.filter(task=>task.isDone)
    expect(completedtasks.length).toBe(2)
    expect(completedtasks[0].id).toBe(2)
    expect(completedtasks[1].id).toBe(4)
})

test('get only uncompleted tasks', ()=>{
    type TaskType ={
        id:number
        title:string
        isDone:boolean
    }
    const tasks = [
        {id:1, title: 'Bread', isDone: false},
        {id:2, title: 'Milk', isDone: true},
        {id:3, title: 'Butter', isDone: false},
        {id:4, title: 'sugar', isDone: true},
    ]

    const uncompletedtasks = tasks.filter(task=>!task.isDone)
    expect(uncompletedtasks.length).toBe(2)
    expect(uncompletedtasks[0].id).toBe(1)
    expect(uncompletedtasks[1].id).toBe(3)
})




//-========================
