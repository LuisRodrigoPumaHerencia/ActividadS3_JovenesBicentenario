var nombre = "Luis Rodrigo";
var apellido = "Puma Herencia";
window.alert("¡Bienvenido " + nombre + " "+  apellido + "!");
var nombres=window.prompt("Ingresa tu nombre","");
let nota1 = window.prompt("Ingresa tu primera nota","");
let nota2 = window.prompt("Ingresa tu segunda nota nota","");
let promedio = (parseInt(nota1)+parseInt(nota2))/2;
window.alert("El prodemio de tu nota es: " + promedio);
var nombresTrabajador=window.prompt("Ingresa el nombre del empleado ","");
let horasTrabajadas = window.prompt("Ingresa las horas trabajadas","");
let tarifaPorHora = window.prompt("Ingresa la tarifa por hora","");
let sueldo = parseInt(horasTrabajadas)*parseInt(tarifaPorHora);
window.alert("El sueldo del trabajador: "+ nombresTrabajador + " es "+sueldo);
var nombreProducto=window.prompt("Ingresa el nombre del producto ","");
let precioProducto=window.prompt("Ingresa el precio del producto ","");
let igvProducto=parseInt(precioProducto)*0.18;
window.alert("El IGV del producto: "+ nombreProducto + " es "+ igvProducto);

let not1 = window.prompt("Ingresa tu primera nota","");
let not2 = window.prompt("Ingresa tu segunda nota","");
let not3 = window.prompt("Ingresa tu tercera nota","");
let not4 = window.prompt("Ingresa tu cuarta nota","");
let not5 = window.prompt("Ingresa tu quinta nota","");
let not6 = window.prompt("Ingresa tu sexta nota","");
let promedioUNIDAD1 = (parseInt(not1)+parseInt(not2))/2;
window.alert("La nota promedio de la Unidad 1 es: "+ promedioUNIDAD1);
let promedioUNIDAD2 = (parseInt(not3)+parseInt(not4))/2;
window.alert("La nota promedio de la Unidad 2 es: "+ promedioUNIDAD2);
let promedioUNIDAD3 = (parseInt(not5)+parseInt(not6))/2;
window.alert("La nota promedio de la Unidad 3 es: "+ promedioUNIDAD3);
let promedioGENERAL = (parseInt(not1)+parseInt(not2)+parseInt(not3)+parseInt(not4)+parseInt(not5)+parseInt(not6))/6;
window.alert("La nota promedio General es: "+ promedioGENERAL);

document.body.innerHTML = 
"<h1>PROMEDIO</h1>"
+"<h1>El promedio de la notas obtenidas es: "+ promedio + "</h1>"+
"<h1>TRABAJADOR</h1>"
+"<h1>El sueldo del trabajador: "+ nombresTrabajador + " es "+sueldo + "</h1>"+ 
"<h1>PRODUCTO</h1>"
+"<h1>El IGV del producto: "+ nombreProducto + " es "+ igvProducto + "</h1>"+
"<h1>PROMEDIO UNIDAD 1</h1>"
+"<h1>La nota promedio de la Unidad 1 es: "+ promedioUNIDAD1 +"</h1>"+
"<h1>PROMEDIO UNIDAD 2</h1>"
+"<h1>La nota promedio de la Unidad 2 es: "+ promedioUNIDAD2 +"</h1>"+
"<h1>PROMEDIO UNIDAD 3</h1>"
+"<h1>La nota promedio de la Unidad 3 es: "+ promedioUNIDAD3 +"</h1>"+
"<h1>PROMEDIO GENERAL</h1>"
+"<h1>La nota promedio General es: "+ promedioGENERAL +"</h1>";

