"use strict";
function types() {
    let n = 1;
    let s = "string";
    let bi = 100n;
    let b = true;
    let sb = Symbol();
    let nu = null;
    let un = undefined;
    let obj = Object();
    let unk = "unknown"; // 모든 타입의 집합
    let ne; // 공집합
    let objlit = { property: Number };
    let v = (() => { })();
    let arr = [1, 2, 3];
    let tup = [1, "hi"];
    let foo = (a, b) => a;
    return `${n}, ${s}, ${bi}, ${b}, ${String(sb)}, ${nu}, ${un}, ${obj}, ${unk}, ${objlit}, ${v}, ${arr}, ${tup}, ${foo}`;
}
function boxedType() {
    let a = (1).toExponential();
    let b = Number.prototype.toExponential.call(1);
    return `${a} equivalent to ${b}`;
}
function gradualTyping() {
    // with "noImplicitAny": false in tsconfig.json, anys: any[]
    const anys = [];
    anys.push(1);
    anys.push("oh no");
    anys.push({ anything: "goes" });
    // anys.map(anys[1]); // oh no, "oh no" is not a function
    // let sepsis = anys[0] + anys[1]; // this could mean anything
    return `${anys.join(",")}`;
}
window.addEventListener('DOMContentLoaded', () => {
    let div = document.createElement("div");
    div.textContent = `types: ${types()}`;
    document.body.appendChild(div);
    div = document.createElement("div");
    div.textContent = `boxedType: ${boxedType()}`;
    document.body.appendChild(div);
    div = document.createElement("div");
    div.textContent = `gradualTyping: ${gradualTyping()}`;
    document.body.appendChild(div);
});
//# sourceMappingURL=ts4func.js.map