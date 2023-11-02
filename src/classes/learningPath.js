export default class LearningPath {
    constructor({
        id,
        name,
        courses = []
    }) {
        this.id = id
        this.name = name;
        this.courses = courses;
    }

    addNewCourse(newCourse) {
        this.courses.push(newCourse)
    }

    replaceCourse(oldCourse, newCourse) {
        const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
        if (oldCourse !== -1) {
            this.courses[oldCourseIndex] = newCourse;
        }

        return this.courses;
    }

    deleteCourse(id) {
        const courseIndex = this.courses.findIndex(course => course.id === id);
        this.courses.splice(courseIndex, 1);
        return this.courses;
    }
}

