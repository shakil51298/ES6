class Student {
    constructor(sId, sName,school) {
        this.id = sId;
        this.name = sName;
        this.schoolName = school;               // same structure diye jodi onk gulo object creat kort hoi tile class use krt hobe
     }

}

const Student1 = new Student(45145, "shakil khan","BD High School");
const Student2 = new Student(45545441, "shakib Khan");
const Student3 = new Student(12, " Bappi");
console.log(Student1, Student2);