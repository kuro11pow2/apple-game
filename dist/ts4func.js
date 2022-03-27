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
window.addEventListener('DOMContentLoaded', () => {
    let div = document.createElement("div");
    div.textContent = `types: ${types()}`;
    document.body.appendChild(div);
});
//# sourceMappingURL=ts4func.js.map