"use strict";
function union() {
    // 타입을 묶어서 타입을 정의할 수 있음
    function getLength(obj) {
        return obj.length;
    }
    let state = "open";
    return getLength(state).toString();
}
function generic() {
    let arr = ["hello", "world"];
    return arr.join(" ");
}
function duckTyping() {
    class BackpackImpl {
        constructor() {
            this.container = new Array();
        }
        add(obj) {
            this.container.push(obj);
        }
        get() {
            let out = this.container.pop();
            if (out == undefined)
                throw new Error();
            return out;
        }
    }
    let realBackpack = new BackpackImpl();
    // Backpack < BackpackImpl 이므로 대입 가능
    let iterfaceBackpack = realBackpack;
    // Backpack == {add, get} 이므로 대입 가능
    let objectBackpack = { add: 1, get: () => "object" };
    realBackpack.add("interface");
    realBackpack.add("real");
    const object = `${realBackpack.get()}, ${iterfaceBackpack.get()}, ${objectBackpack.get()}`;
    return object;
}
window.addEventListener('DOMContentLoaded', () => {
    let div = document.createElement("div");
    div.textContent = `union: ${union()}`;
    document.body.appendChild(div);
    div = document.createElement("div");
    div.textContent = `generic: ${generic()}`;
    document.body.appendChild(div);
    div = document.createElement("div");
    div.textContent = `genericClass: ${duckTyping()}`;
    document.body.appendChild(div);
});
//# sourceMappingURL=ts4js.js.map