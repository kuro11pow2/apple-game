"use strict";
function example() {
    // class (여전히 prototype 기반)
    var Student = /** @class */ (function () {
        function Student(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
        return Student;
    }());
    // type annotation 지원
    function greeter(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
    var user = new Student("Jane", "M.", "User");
    return greeter(user);
}
window.addEventListener('DOMContentLoaded', function () {
    var div = document.createElement("div");
    div.textContent = "example: ".concat(example());
    document.body.appendChild(div);
});
//# sourceMappingURL=example.js.map