let errores = {}

let name = "Juan";

errores[name] = "El valor del atributo Juan"


console.log(errores);

delete errores[name];

console.log(errores);

errores.name = "";

if(errores.name) { console.log("hay algo")}
else console.log("no hay nada")
