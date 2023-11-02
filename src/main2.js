class Comment {
    constructor({
        content,
        studentName,
        studentRole = "student",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    post() {
        console.log(`${this.studentName} (${this.studentRole})`);
        console.log(`${this.likes} likes`); 
        console.log(this.content.toString()); 
    }
}

function videoPlay(id) {
    const secretUrl = "https://platziultrasecret.com/" + id;
    console.log("It's playing from the url " + secretUrl);
}

function videoStop(id) {
    const secretUrl = "https://platziultrasecret.com/" + id;
    console.log("Stop the url " + secretUrl);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    play() {
        videoPlay(this.videoID)
    }

    pause() {
        videoStop(this.videoID)
    }
}

class Course {
    constructor({
        id,
        name,
        teacher,
        lessons = [],
        isFree = false,
        lang = "spanish"
    }) {
        this._id = id;
        this._name = name;
        this.teacher = teacher;
        this.lessons = lessons;
        this.isFree = isFree;
        this.lang = lang;   
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        
        if (typeof newName === "string") {
            newName = newName.trim()
            if (newName) {
                this._name = newName;
            } else {
                console.error('The name cant be empty')
            }
        } else {
            console.error('The name has to be a string');
        }
    }
}

class Teacher {
    constructor({
        id,
        name,
        specialty,
        courses = []
    }) {
        this._id = id;
        this._name = name;
        this._specialty = specialty
        this.courses = courses
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

    get sepecialty(){
        return this._specialty;
    }

    set sepecialty(newSpecialty){
        if (newSpecialty && typeof newSpecialty === "string") {
            this._specialty = newSpecialty;
        } else {
            console.error('The specialty has to be a string and cant be empty')
        }
    }

    addCourse(course) {
        this.courses.push(course)
    }
}



class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this._email = email;
        this._name = name;
        this._username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
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

    get username() {
        return this._username;
    }
    
    set username(newUsername) {
        if (newUsername && typeof newUsername === "string") {
            this._username = newUsername;
        } else {
            console.error('The username has to be a string and cant be empty')
        }
    }

    get email(){
        return this._email;
    }

    set email(newEmail){
        if (newEmail && typeof newEmail === "string") {
            this._email = newEmail;
        } else {
            console.error('The email has to be a string and cant be empty')
        }
    }

    postComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })
        comment.post();
    }

}

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.error(`Sorry, ${this._name}, you can only take free courses`);
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse);
        } else {
            console.error(`Sorry, ${this._name}, you can't take courses in english`);
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    postComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'teacher'
        })
        comment.post();
    }
}

class LearningPath {
    constructor({
        id,
        name,
        courses = []
    }) {
        this._id = id
        this._name = name;
        this.courses = courses;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName && typeof newName === "string") {
            this._name = newName;
        } else {
            console.error('The name cant be empty')
        }
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
    teacher: juanDC,
    isFree: true,
})

// basicProg.name = 122
// console.log(basicProg);

const defCourseHTML = new Course({
    id: 'def-html-css',
    name: "Definitive Course of HTML & CSS",
    teacher: degranda
})

const practHTML = new Course({
    id: 'practical-html-css',
    name: "Practical Course of HTML & CSS",
    teacher: degranda,
    lang: 'english'
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
const carlos = new ExpertStudent({
    name: 'Carlos',
    username: 'toxe',
    email: 'cerc-12@hotmail.com',
    twitter: 'carlitoxee',
    learningPaths: [
        webDev,
        dataScience
    ]
})

const danielito = new BasicStudent({
    name: 'Danielito',
    username: 'danielitoxd',
    email: 'danielito@gmail.com',
    instagram: 'daniel_xd',
    learningPaths: [
        dataScience
    ]
})

const miguelito = new FreeStudent({
    name: 'Miguelito',
    username: 'miguelito',
    email: 'miguelito@gmail.com',
    instagram: 'miguelito_feliz',
    learningPaths: [
        webDev,
        dataScience
    ]
})

const freddy = new TeacherStudent({
    name: 'Freddy Vega',
    username: 'freddier',
    email: 'freddier@gmail.com',
    instagram: 'freddiervega',
})

// console.log(webDev);






