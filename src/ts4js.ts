
function union() {

    // 리터럴을 묶어서 타입(별명)을 정의할 수 있음
    type WindowStates = "open" | "closed" | "minimized";
    type LockStates = "locked" | "unlocked";
    type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

    // 타입을 묶어서 타입을 정의할 수 있음
    function getLength(obj: string | string[]) {
        return obj.length;
    }

    let state: WindowStates = "open";
    return getLength(state).toString();
}

function generic() {
    type StringArray = Array<string>;
    type NumberArray = Array<number>;
    // 제네릭은 아무 타입이나 넣을 수 있음.
    type AnyArray = Array<any>;
    type UnknownArray = Array<unknown>;
    // 덕타이핑 기준으로 타입을 정의할 수 있으면 되는 것으로 보임.
    type ObjectWithNameArray = Array<{ name: string; }>;

    let arr: StringArray = ["hello", "world"];
    return arr.join(" ");

}

function duckTyping() {
    
    interface Backpack<Type> {
        add: (obj: Type) => void;
        get: () => Type;
    }

    class BackpackImpl<Type>{
        container: Array<Type>;
        constructor() {
            this.container = new Array<Type>();
        }
        add(obj: Type) {
            this.container.push(obj);
        }
        get() {
            let out = this.container.pop();
            if (out == undefined)
                throw new Error();
            return out;
        }
    }

    let realBackpack: BackpackImpl<string> = new BackpackImpl<string>();
    // Backpack < BackpackImpl 이므로 대입 가능
    let iterfaceBackpack: Backpack<string> = realBackpack;
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