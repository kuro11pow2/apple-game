
function types() {
    let n: number = 1;
    let s: string = "string";
    let bi: bigint = 100n;
    let b: boolean = true;
    let sb: symbol = Symbol();
    let nu: null = null;
    let un: undefined = undefined;
    let obj: object = Object();
    let unk: unknown = "unknown"; // 모든 타입의 집합
    let ne: never; // 공집합
    let objlit = { property: Number};
    let v: void = (() => {})();
    let arr: number[] = [1, 2, 3];
    let tup: [number, string] = [1, "hi"];
    let foo: <T, U>(a: T, b: U) => T = (a, b) => a;
    return `${n}, ${s}, ${bi}, ${b}, ${String(sb)}, ${nu}, ${un}, ${obj}, ${unk}, ${objlit}, ${v}, ${arr}, ${tup}, ${foo}`
} 

window.addEventListener('DOMContentLoaded', () => {
    let div = document.createElement("div");
    div.textContent = `types: ${types()}`;
    document.body.appendChild(div);
});