"use strict";
function union() {
    // 타입을 묶어서 타입을 정의할 수 있음
    function getLength(obj) {
        return obj.length;
    }
    var state = "open";
    return getLength(state).toString();
}
function generic() {
    var arr = ["hello", "world"];
    return arr.join(" ");
}
function duckTyping() {
    var BackpackImpl = /** @class */ (function () {
        function BackpackImpl() {
            this.container = new Array();
        }
        BackpackImpl.prototype.add = function (obj) {
            this.container.push(obj);
        };
        BackpackImpl.prototype.get = function () {
            var out = this.container.pop();
            if (out == undefined)
                throw new Error();
            return out;
        };
        return BackpackImpl;
    }());
    var realBackpack = new BackpackImpl();
    // Backpack < BackpackImpl 이므로 대입 가능
    var iterfaceBackpack = realBackpack;
    // Backpack == {add, get} 이므로 대입 가능
    var objectBackpack = { add: 1, get: function () { return "object"; } };
    realBackpack.add("interface");
    realBackpack.add("real");
    var object = "".concat(realBackpack.get(), ", ").concat(iterfaceBackpack.get(), ", ").concat(objectBackpack.get());
    return object;
}
window.addEventListener('DOMContentLoaded', function () {
    var div = document.createElement("div");
    div.textContent = "union: ".concat(union());
    document.body.appendChild(div);
    div = document.createElement("div");
    div.textContent = "generic: ".concat(generic());
    document.body.appendChild(div);
    div = document.createElement("div");
    div.textContent = "genericClass: ".concat(duckTyping());
    document.body.appendChild(div);
});
//# sourceMappingURL=ts4js.js.map