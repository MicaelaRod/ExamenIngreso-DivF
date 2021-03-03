function probarEjercicio()
 /*2- "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)



tipo,tipo, procedencia , tipo, procedencia, tipo
*/
{

	let tipo;
	let nombre;
	let importe;
	let procedencia;
	let peso;
	let seguir;
	let nombrecompesado;
	let comespesado;
	let flag = 0;
	let preciomax;
	let nombrecaro;
	let flag1 = 0;
	let elabbarato;
	let nombreelabbarato;
	let flag2 = 0;
	let contL= 0;
	let contC = 0;
	let contO = 0;
	let contadormaximo;


	do {
		tipo = prompt("Ingrese el tipo de mercaderia(comestible , limpieza, otros")
		
		while(tipo != "limpieza" && tipo != "comestible" && tipo != "otros"){
			
			tipo = prompt("Tipo NO valido, ingrese nuevamente");
			
		}
		
		nombre = prompt("Ingrese el nombre del producto");
		
		while(isNaN(nombre)==false){
			
nombre = prompt("NO valido .Ingrese nombre del producto")

}

importe = parseInt(prompt("Ingrese el importe del producto"));

while(isNaN(importe) || importe > 1000 || importe < 0){
	
	importe = parseInt(prompt("Importe NO valido, ingrese nuevamente"));
	
	
}

procedencia = prompt("Ingrese procedencia (importado, nacional o elaborado)");

while(procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado"){
	
	procedencia = prompt("Procedencia NO valida, ingrese nuevamente");

}


peso = parseFloat(prompt("Ingrese el peso del producto"))
while(isNaN(peso) || peso < 0 || peso > 300){

	peso = parseFloat(prompt("Peso NO valido, ingrese uno mayor q 0 y menor q 300"));
	
}/*
informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d)el tipo de mercadería  que mas aparece
e)el porcentaje de productos elaborados por sobre el total */

switch (tipo){
	
	case "comestible":
		contC++
		if(flag == 0 || peso > comespesado){ //si el nuevo peso ingresado es mayor al mayor, es el nuevo mayor
			
			comespesado = peso;
			
			nombrecompesado = nombre;
			
			flag = 1;
			
		}
		
		break;
		
		case "limpieza":
			contL++
			break;
			
			case "otros":
				contO++
				break;
			}
			
			
			if(flag1 == 0 || importe > preciomax){
				
				preciomax = importe;
				
				nombrecaro = nombre
				
				flag1 = 1;
				
			}
			
			
			if(procedencia == "elaborado"){
				
				if(flag2==0 || importe < elabbarato){
					
					elabbarato = importe;
					
					nombreelabbarato = nombre;
					
					flag2 = 1;
				}
				
				
				
			}
			
			
			
			
			seguir = prompt("Desea hacer otra compra?");
		} while (seguir == 's');
		
		if(contC > contL && contC > contO){ //cuando el contC sea el mayor detodos, va a pasar a ser el mayor( el que mayor cant de veces aparecio)
			
			contadormaximo = "comestible";
			contC = contadormaximo;
			
		}
		else if(contL > contO){
			
			contadormaximo = "limpieza";
			contL = contadormaximo;
			
		}
		else{
			
			contadormaximo = "otros";
			
			contO = contadormaximo;
		}
	//	f) el promedio de pesos por cada tipo ingresado */
		
		document.write("El nombre del comestible mas pesado es : " + nombrecompesado + "<br>");
		document.write("El nombre del producto mas caro es : " + nombrecaro + "<br>")
		document.write("El nombre del elaborado mas barato : " + nombreelabbarato + "<br>")
		document.write("El tipo de mercaderia que mas aparece es : " + contadormaximo + "<br>");
		
		
		
		
		
		
		
	}
	
	
	
	
	
	
	
	








	





	






	










	




	



	









	




	














	








	









	




	
/*{
let nombre;
let carrera;
let estado;
let sexo;
let edad;
let nota;
let seguir;
let contpsico = 0;
let contpro = 0;
let contdis = 0;
let fprog = 0;
let alumnb = 0;
let acumnotasf = 0; //acumular las notas de los finalizantes
let contadorF = 0; //cuento los alumnos que finalizaron
let promedioF;
let nombreviejo;
let sexoviejo;
let edadviejo;
let flag = 0;
let nombremejor;
let notamejor;
let estadomejor;
let flag1 = 0;
let mayorcarrera;


do {
	
   nombre = prompt("Ingrese nombre del alumno");

   while(isNaN(nombre) == false){

nombre = prompt("Ingrese su nombre nuevamente");

   }

   carrera = prompt("Ingrese su carrera");

   while( carrera != "programacion" && carrera != "psicologia" && carrera != "diseño"){ // carrera es distinto a estos, entrara al bucle

carrera = prompt("Carrera NO valida , ingrese nuevamente (psicologia , diseño , programacion");

   }

estado = prompt("Ingrese el estado de su crrera (en curso, abandono, finalizado");

while(estado != "en curso" && estado != "abandono" && estado != "finalizado"){

estado = prompt("Estado NO valido , ingrese nuevamente");

}

sexo = prompt("Ingrese sexo del alumno");

while( sexo != "f" && sexo != "m" && sexo != "nb"){

	sexo = prompt("Sexo NO valido, ingrese f, m o nb");

}


edad = parseInt(prompt("Ingrese edad del alumno"));

while(isNaN(edad) || edad < 18){

edad = parseInt(prompt("Edad NO valida, ingrese una mayor de 18"));


}
nota = parseInt(prompt("Ingrese su nota"));

while (isNaN(nota) || nota > 10 || nota  < 1){

nota = parseInt(prompt("Nota NO valida, ingrese nuevamente de 1 a 10"))

}

switch (carrera){

case "diseño":
	contdis++

break;

case "programacion":

contpro++

if(sexo == 'f' && estado == "en curso"){

fprog++

}
break;

case "psicologia":
contpsico++

if(flag == 0 || edad > edadviejo){ //si la nueva edad ingresada es mayor a la que ya era mayor, TENEMOS UN NUEVO MAXIMO

edadviejo = edad;

sexoviejo = sexo;

nombreviejo = nombre;

flag = 1;

}

if(sexo ==  "nb"){

if(flag1 == 0 || nota > notamejor){

notamejor = nota;

nombremejor = nombre;

estadomejor = estado;

flag1 = 1 ;



}







}


break;


}
if(sexo == "nb"){

alumnb++

}

if(estado == "finalizado"){

acumnotasf = acumnotasf + nota;

contadorF++

}
seguir = prompt(" ¿Desea seguir agregando alumnos?");


} while (seguir == 's');

if(contadorF != 0){ //SOLO PUEDO HACER ESTO CUANDO EL CONTADOR ES DISTINTO DE 0, PORQUE NO SE PUEDE DIVIDIR X CERO

promedioF = acumnotasf / contadorF;
}

if(contdis > contpro && contdis > contpsico){ //si es contador de diseño (csntidad de alumnos) es mayor a los otros, es porque tiene mas cant

mayorcarrera = "diseño"
contdis = mayorcarrera;



}else if(contpro > contpsico){

mayorcarrera = "programacion"
contpro = mayorcarrera;

}
else{

mayorcarrera = "psicologia"
contpsico = mayorcarrera;

}
document.write("La cantidad de alumnos en las carreras es: Psi. " + contpsico + " pro. " + contpro + " dis. " + contdis + "<br>");
document.write("La cantidad de mujeres que estudian programacion es : " + fprog + "<br>");
document.write("La cantida de alumnos no binarios es : " + alumnb + "<br>");
document.write("El promedio de notas de alumnos finalizantes es : " + promedioF + "<br>");
document.write("El nombre sexo y edad del mas viejo de psico es " + edadviejo + " años y es " + sexoviejo + " su nombre " + nombreviejo + "<br>" )
document.write("El nombre del de mejor nota NB es : " + nombremejor + " y el estado de su carrera : " + estadomejor + " su nota es: " + notamejor + "<br>")
document.write("Carrera con mas alumnos es " + mayorcarrera); */