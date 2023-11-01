
export default class Teacher {
    constructor({
        id,
        name,
        specialty,
        courses = []
    }) {
        this.id = id;
        this.name = name;
        this.specialty = specialty
        this.courses = courses
    }
    
    addCourse(course) {
        this.courses.push(course)
    }
}