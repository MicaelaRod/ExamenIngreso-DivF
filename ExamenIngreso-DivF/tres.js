function mostrar() /*debemos alquilar el servicio de transporte para 
llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un
 descuento del 25%, que solo mostramos si corresponde. //porcentaje de pasajeros de pami en el total

*/
{
	let nombre;
	let obra;
	let edad;
	let temperatura;
	let sexo;
	let seguir;
	let contosde = 0;
	let menoredadmujer;
	let nombremenoredadmujer;
	let tempmenoredadmujer;
	let flag = 0;
	let porcentaje;
	let contadortotaldepasajeros = 0;
	let contadordepami = 0;
	let descuento;
	let preciofinalcondescuento;
	let preciofinal;

	do {
		nombre = prompt("Ingrese nombre");
while (isNaN(nombre)==false) {
	nombre = prompt("error. Ingrese nombre");
}

		obra = prompt("Ingrese lobra socia")
		while (obra != "PAMI" && obra != "OSDE" && obra != "otras") {
			obra = prompt("error. Ingrese lobra socia")
		}
		edad = parseInt(prompt("Ingrese edad "))
		while (isNaN(edad) || edad < 18) {
			edad = parseInt(prompt("error. Ingrese edad "))
			
		}
		temperatura = parseInt(prompt("Ingrese temperatura"));

		while (isNaN(temperatura)|| temperatura < 0 ) {

			temperatura = parseInt(prompt("error. Ingrese temperatura"));
		}


		sexo = prompt("Ingrese sexo");
		
		while (sexo != "f" && sexo != "m") {
			
			sexo = prompt("Ingrese sexo");
		}

		if(obra == "OSDE" && edad > 60){

			contosde++;
		}
   
		if(obra == "PAMI" && sexo == "f"){
			 
			if(flag == 0 || edad < menoredadmujer){
				menoredadmujer = edad;

				nombremenoredadmujer = nombre;

				tempmenoredadmujer = temperatura;

				flag = 1;


			}



		}
		if(obra == "PAMI"){


			contadordepami++;

		}


		contadortotaldepasajeros++;

		seguir = prompt("Desea seguir agregando datos?")
	} while (seguir == 's');

if(contosde != 0){

document.write("La cantidad de mayores de 60 con osde es : " + contosde + "<br>");

}
else{

	document.write("NO hay mayores de 60 con osde" +  "<br>");
}
if(flag != 0){

	document.write("El nombre y la temp de la mujer de pami mas joven es : " + nombremenoredadmujer + " y " + tempmenoredadmujer + "<br>");
	
	}
//si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un
// descuento del 25%, que solo mostramos si corresponde. //porcentaje de pasajeros de pami en el 

  porcentaje = (contadordepami / contadortotaldepasajeros) * 100;


if(porcentaje > 50){

descuento = 150; //hice el 25% de descuento.

preciofinalcondescuento = (600 - 150)* contadordepami; 



document.write ("El precio final con descuento es : " + preciofinalcondescuento + "<br>");
}
else{

preciofinal = 600 * contadortotaldepasajeros; // si no se cumple lo del 50% de pami


}





}
