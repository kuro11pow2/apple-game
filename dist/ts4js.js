"use strict";
var Union = function () {
    function getLength(obj) {
        return obj.length;
    }
    var state = "open";
    return getLength(state).toString();
};
window.addEventListener('DOMContentLoaded', function () {
    var out = Union();
    var div = document.createElement("div");
    div.textContent = out;
    document.body.appendChild(div);
});
//# sourceMappingURL=ts4js.js.map