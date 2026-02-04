//*the student course idea
//* association because there is a loose coupling
//* aggregation would be part as a whole -- although both can stay as they are

//? association is the right choice

//*what would the interface be? -- all the courses that the user can take

interface AvailableCourses {
  mathCourse(studentName: StudentDetail): void;
  physicsCourse(studentName: StudentDetail): void;
}

interface StudentDetail {
  name: string;
}

interface StudentDetail {
  getName(): string;
}

//?why didn't typescript didn't throw an error here?
//!It is structuarlly typed
class Courses implements AvailableCourses {
  private studentDetail;
  constructor(studentDetail: StudentDetail) {
    this.studentDetail = studentDetail;
  }

  mathCourse(): void {
    console.log(`This is a math course for ${this.studentDetail.getName()}`);
  }

  physicsCourse(): void {
    console.log(`This is a physics course for ${this.studentDetail.getName()}`);
  }
}

class Students implements StudentDetail {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

//*now how will they be used
const student_1 = new Students("Vedant");
const course_student_1 = new Courses(student_1);

course_student_1.mathCourse();
