/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos

*/
function mostrar()
{
	let nombre;
	let tipo;
	let precio;
	let cantidad;
	let categoria;
	let fabricante;
	let contal = 0;
	let contiac = 0;
	let contquat = 0;
	let acumal = 0;
	let acumiac = 0;
	let acumquat = 0;
	let promal;
	let promiac;
	let promquat;
	let acumdesin = 0;
	let acumbact = 0;
	let acumdet = 0;
	let mayoracum;
	let acumdetmenosde200 = 0;
	let mayorprecio;
	let fabcaro;
	let catcaro;
	let flag =0;

	for(let i = 0 ; i < 5 ; i++){

   nombre = prompt("Ingrese el nombre del producto");

   while(isNaN(nombre)==false){

	nombre = prompt("Ingrese el nombre del producto");

 }
 fabricante = prompt("Ingrese el fabricante del producto");

    while(isNaN(fabricante)==false){

	fabricante = prompt("Ingrese el fabricante del producto");

}
   tipo = prompt("Ingrese el tipo de producto, (alcohol, iac, quat)");

    while(tipo != "alcohol" && tipo != "iac" && tipo != "quat"){

	tipo = prompt("Error. Ingrese el tipo de producto, (alcohol, iac, quat)");

     }
     precio = parseInt(prompt ("Ingrese precio entre 100 y 300"));


    while( isNaN(precio) || precio < 0 || precio > 300 ){

	precio = parseInt(prompt ("Error. Ingrese precio entre 100 y 300"));

	}

	cantidad = parseInt(prompt("Ingrese la cantidad de productos"));

	while( isNaN(cantidad) || cantidad < 0 || cantidad > 1000 ){

		cantidad = parseInt(prompt ("Error. Ingrese cantidad entre o y 1000"));
	
		}
	
   categoria = prompt("Ingrese categoria, (bactericida, desinfectante y detergente)");
   while( categoria != "bactericida" && categoria != "desinfectante" && categoria != "detergente") 
{

	categoria = parseInt(prompt ("Error. Ingrese categoria, (bactericida, desinfectante y detergente)"));

	}

	switch(tipo){
	
	
		case "alcohol":
		acumal += cantidad;
		contal++;
		break;
	
		case "iac":
	
		acumiac += cantidad;
		contiac++;
		break;
	
		case "quat":
		acumquat += cantidad;
		contquat++;
		break;
	}


	switch ( categoria){

case "bactericida":
	acumbact += cantidad
	break;

	case "desinfectante":
		acumdesin += cantidad;
		break;

		case "detergente":
			acumdet += cantidad;
			if(precio <= 200){

        acumdetmenosde200 += cantidad;

			}

		break;

	}

if(flag == 0 || precio > mayorprecio){

	mayorprecio = precio;

	fabcaro = fabricante;

	catcaro = categoria;

	flag = 1;
}

} //termina for

//a) El promedio de cantidad por tipo de producto
if(contal != 0){

promal = acumal / contal;
document.write("El promedio de cantidad del alcohol es : " + promal + "<br>")

}
else{
	document.write("No se registraron productos de ese tipo" + "<br>");
}

if(contiac != 0){

	promiac = acumiac / contiac;
	document.write("El promedio de cantidad del IAC es : " + promiac + "<br>")
	
	}
	else{
document.write("No se registraron productos de ese tipo" + "<br>");
	}
	
	if(contquat != 0){

		promquat = acumquat / contquat;
		document.write("El promedio de cantidad del QUEAT es : " + promquat + "<br>")
		
		}
		else{

			document.write("No se registraron productos de ese tipo" + "<br>");
		}

if(acumdet > acumbact && acumdet > acumdesin){

mayoracum = acumdet;

}
else if(acumbact > acumdesin){

mayoracum = acumbact;

}
else{

mayoracum = acumdesin;

}
document.write("La categoria con mas cantidad es :" + mayoracum + "<br>");

document.write("Se compraron " + acumdetmenosde200 + "undades de detergente a menos de 200$" + "<br>");

if(flag != 0){
	document.write("El fabricante y categoria del prod mas caro es :" + fabcaro + " y "+ catcaro + "<br>");

}

}