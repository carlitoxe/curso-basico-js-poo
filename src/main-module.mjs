import Course from '../classes/course.js'
import Student from '../classes/student.js'
import LearningPath from '../classes/learningPath.js'
import Teacher from '../classes/teacher.js'

// Teachers
const juanDC = new Teacher({
    id: 1,
    name: "Juan David Castro",
    specialty: "Web Developer",
})

const nicobytes = new Teacher({
    id: 2,
    name: "Nicolas Molina",
    specialty: "Senior Web Developer"
})

const degranda = new Teacher({
    id: 3,
    name: "Diego De Granda",
    specialty: "Software Engineering Manager"
})

// Courses
const basicProg = new Course({
    id: 'basic-prog',
    name: "Course of Basic Programming",
    teacher: juanDC
})

console.log(basicProg);

const defCourseHTML = new Course({
    id: 'def-html-css',
    name: "Definitive Course of HTML & CSS",
    teacher: degranda
})

const practHTML = new Course({
    id: 'practical-html-css',
    name: "Practical Course of HTML & CSS",
    teacher: degranda
})

const responsiveDesign = new Course({
    id: 'responsive-design',
    name: "Course of Responsive Design",
    teacher: juanDC
})

const jsBasics = new Course({
    id: 'javascript-basics',
    name: "Basic Course of JavaScript",
    teacher: nicobytes
})


// Learning Paths
const webDev = new LearningPath({
    id: "fundamentals-web-dev",
    name: "Fundamentals of Web Development",
    courses: [
        basicProg,
        defCourseHTML,
        practHTML,
        responsiveDesign,
        jsBasics
    ]
})

const dataScience = new LearningPath({
    id: "data-science",
    name: "Data Science Path",
    courses: [
        basicProg,
        defCourseHTML,
        practHTML,
        responsiveDesign,
        jsBasics
    ]
})

webDev.addNewCourse(new Course({
    id: 'node-fundamentals',
    name: "Course of Node.js Fundamentals",
    teacher: 'Juan DC'
}))

// Students
const carlos = new Student({
    name: 'Carlos',
    username: 'toxe',
    email: 'cerc-12@hotmail.com',
    twitter: 'carlitoxee',
    learningPaths: [
        webDev,
        dataScience
    ]
})

const miguelito = new Student({
    name: 'Miguelito',
    username: 'miguelito',
    email: 'miguelito@gmail.com',
    instagram: 'miguelito_feliz',
    learningPaths: [
        webDev,
        dataScience
    ]
})

// console.log(webDev);






