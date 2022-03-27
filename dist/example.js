"use strict";
function example() {
    // class (여전히 prototype 기반)
    class Student {
        constructor(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
    }
    // type annotation 지원
    function greeter(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
    let user = new Student("Jane", "M.", "User");
    return greeter(user);
}
window.addEventListener('DOMContentLoaded', () => {
    let div = document.createElement("div");
    div.textContent = `example: ${example()}`;
    document.body.appendChild(div);
});
//# sourceMappingURL=example.js.map