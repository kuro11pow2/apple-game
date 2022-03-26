
function ErasedType() {

    interface Pointlike {
        x: number;
        y: number;
      }
      interface Named {
        name: string;
      }
       
      function strPoint(point: Pointlike) {
        return "x = " + point.x + ", y = " + point.y;
      }
       
      function strName(x: Named) {
        return "Hello, " + x.name;
      }
       
      const obj = {
        x: 0,
        y: 0,
        name: "Origin",
      };

    return `${strPoint(obj)} ${strName(obj)}`
}


window.addEventListener('DOMContentLoaded', () => {
    let div = document.createElement("div");
    div.textContent = `ErasedType: ${ErasedType()}`;
    document.body.appendChild(div);
});