export default class Course {
    constructor({
        id,
        name,
        teacher,
        lessons = []
    }) {
        this.id = id;
        this._name = name;
        this.teacher = teacher;
        this.lessons = lessons;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName && typeof newName === "string") {
            this._name = newName;
        } else {
            console.error('The name has to be a string and cant be empty')
        }
    }
}


