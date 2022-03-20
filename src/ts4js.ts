
const Union = () => {

    type WindowStates = "open" | "closed" | "minimized";
    type LockStates = "locked" | "unlocked";
    type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

    function getLength(obj: string | string[]) {
        return obj.length;
    }

    let state: WindowStates = "open";
    return getLength(state).toString();
}


window.addEventListener('DOMContentLoaded', () => {
    let out = Union();

    let div = document.createElement("div");
    div.textContent = out;
    document.body.appendChild(div);
});