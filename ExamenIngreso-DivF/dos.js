function mostrar()/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando 
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo

*/
{
  let nombre;
  let situacion;
  let cantmate;
  let sexo;
  let nota;
  let edad;
  let seguir;
  let mejornota;
  let nombremejornota;
  let flag = 0;
  let mayoredad;
  let nombremayoredad;
  let flag1 = 0;
  let promediobusc;
  let promtrab;
  let promestu;
  let acumnotabus = 0;
  let acumnotatra = 0;
  let acumnnotaestu =0;
  let contbus = 0;
  let conttrab = 0;
  let contestu = 0;
  let edadmenos;
  let nombremenos;
  let menorcantidad;
  let flag2 = 0;


do {

nombre = prompt("Ingrese nombre");
while(isNaN(nombre) == false){

  nombre = prompt("Error, Ingrese nombre");
}

situacion = prompt("Ingrese situacion laboral");

while( situacion != "buscando" && situacion != "trabajando" && situacion != "solo estudiante"){

  situacion = prompt("Error,Ingrese situacion laboral");
}

cantmate = parseInt(prompt("Ingrese la cant de materias "));

while (isNaN(cantmate) || cantmate < 0 || cantmate > 8) {

  cantmate = parseInt(prompt("Error, Ingrese la cant de materias "));
}

sexo = prompt("Ingrese sexo. ");

while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario") {
  sexo = prompt("Error, Ingrese sexo. ");
}
nota = parseInt(prompt("Ingrese nota"));
while (isNaN(nota) || nota < 0 || nota > 10) {
  
  nota = parseInt(prompt("Error,Ingrese nota"));

}

edad= parseInt(prompt("Ingrese la edad "));
while (isNaN(edad) || edad < 18) {
  edad= parseInt(prompt("Error, Ingrese la edad "));

}

//a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
 
if(situacion == "buscando" || situacion == "solo estudiante"){
//yo lo interprete asi profe, despues cuado usted lo aclaro, no me alcanzo el tiempo de cambiarlo :(
if(flag == 0 || nota > mejornota){

  mejornota = nota;

  nombremejornota = nombre;

  flag = 1;
}
}
//b) El nombre del mas viejo de los alumnos que solo sea estudiantes

if(situacion == "solo estudiante"){

  if(flag1 == 0 || edad > mayoredad){

mayoredad = edad;

nombremayoredad = nombre;

flag1 = 1;


  }
acumnnotaestu += nota;
contestu++;

}
if(situacion == "buscando"){

acumnotabus += nota;
contbus++;

if(flag2 == 0 || cantmate < menorcantidad){

menorcantidad = cantmate;

nombremenos = nombre;

edadmenos = edad;

flag2 = 1;

}









}
if(situacion == "trabajando"){

  acumnotatra += nota;
  conttrab++;
}

//d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo




  seguir = prompt("desea seguir agragando alumnos?")
} while (seguir == 's');

if(flag != 0){


document.write("El nombre del que no trabaja o busca de mejor nlota es : " + nombremejornota + "<br>");

}

if(flag1 != 0){


  document.write("El nombre del mas viejo de los alumnos que solo sea estudiantes : " + nombremayoredad + "<br>");
  
  }
  else{

    document.write("No se ingresaron" + "<br>");
  }
  
if(conttrab != 0){

  promtrab = acumnotatra / conttrab;
  document.write("El promedio de notas de trabajan es " + promtrab + "<br>");
}
else{

  document.write("No se ingresaron" + "<br>");

}
if(contbus  != 0){

promediobusc = acumnotabus / contbus;
document.write("El promedio de notas de buscan trabajo es " + promediobusc + "<br>");

}
else{


  document.write("No se ingresaron" + "<br>");
}
if(contestu != 0){
 
  promestu = acumnnotaestu / contestu;
 document.write("El promedio de notas de los que solo estudian  es " + promestu + "<br>");
}

if(flag2 != 0){

  document.write("El nombre del que cursa menos materias y busca trabajo es " + nombremenos + " y " + edadmenos + "<br>");




}





}
