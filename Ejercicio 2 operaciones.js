
function principal() {
	// Ejercicio 2 : Determinar la solucion logica de la siguiente operacion
	var a = new Number();
	var b = new Number();
	var resultado = new Boolean();
	document.write("Digite el valor de a: ",'<BR/>');
	a = Number(prompt());
	document.write("Digite el valor de  b: ",'<BR/>');
	b = Number(prompt());
	resultado = ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b);
	document.write(" el rusultado es: ",resultado,'<BR/>');
}

