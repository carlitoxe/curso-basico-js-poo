const natalia = {
    name: 'Natalia',
    age: 20,
    approvedCourses: [
        "Definitve Course of HTML & CSS",
        "Practical Course of HTML & CSS",
    ],
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    },
};

// Make that Natalia approve another Course
// natalia.approveCourse("Practical Course of JavaScript")

function Student(name, age, approvedCourses) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
    // this.approveCourse = function (newCourse) {
    //     this.approvedCourses.push(newCourse)
    // } 
}

Student.prototype.approveCourse = function(newCourse) {
    this.approvedCourses.push(newCourse)
}

const juanita = new Student(
    "Juanita Alejandra",
    24,
    [
        "Course of Introduction to Video Games",
        "Course of Character Creation",
    ]
)

// Prototypes with Class syntax
class Student2 {
    constructor({
        name, 
        age, 
        email,
        approvedCourses = [],
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.approvedCourses = approvedCourses;
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

const miguelito = new Student2({
    email: "miguelito@gmail.com",
    age: 28,
    name: "Miguel",
})

