
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
    let objlit = { property: Number };
    let v: void = (() => { })();
    let arr: number[] = [1, 2, 3];
    let tup: [number, string] = [1, "hi"];
    let foo: <T, U>(a: T, b: U) => T = (a, b) => a;
    return `${n}, ${s}, ${bi}, ${b}, ${String(sb)}, ${nu}, ${un}, ${obj}, ${unk}, ${objlit}, ${v}, ${arr}, ${tup}, ${foo}`
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

function structuralTyping() {
    // @strict: false
    let o = { x: "hi", extra: 1 }; // ok
    let o2: { x: string } = o; // ok

    type One = { p: string };
    interface Two {
        p: string;
    }
    class Three {
        p = "Hello";
    }

    let x: One = { p: "hi" };
    let two: Two = x;
    two = new Three();

    return `${o.x}, ${o2.x}, ${x.p}, ${two.p}`;
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

    div = document.createElement("div");
    div.textContent = `structuralTyping: ${structuralTyping()}`;
    document.body.appendChild(div);
});