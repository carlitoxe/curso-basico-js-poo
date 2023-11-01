export default class Course {
    constructor({
        id,
        name,
        teacher,
        lessons = []
    }) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.lessons = lessons;
    }
}


