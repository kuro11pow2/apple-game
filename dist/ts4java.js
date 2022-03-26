"use strict";
function ErasedType() {
    function strPoint(point) {
        return "x = " + point.x + ", y = " + point.y;
    }
    function strName(x) {
        return "Hello, " + x.name;
    }
    var obj = {
        x: 0,
        y: 0,
        name: "Origin",
    };
    return "".concat(strPoint(obj), " ").concat(strName(obj));
}
window.addEventListener('DOMContentLoaded', function () {
    var div = document.createElement("div");
    div.textContent = "ErasedType: ".concat(ErasedType());
    document.body.appendChild(div);
});
//# sourceMappingURL=ts4java.js.map