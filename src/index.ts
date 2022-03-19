
// interface
interface Person {
    firstName: string;
    lastName: string;
}

// class (여전히 prototype 기반)
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


// type annotation 지원
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}


let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);