// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function menudeopcion() {
	var opcion;
	// Ejercicio 37 :Hacer un programa que tenga un menu con las siguientes opciones:
	// Opcion 1: Elevar un numero a una potencia x
	// Opcion 2: Sacar la raiz cuadrada de un numero 
	// Opcion 3: Salir
	var opciom = new Number();
	document.write("Menu",'<BR/>');
	document.write("1.Elevar un numero a una potencia x",'<BR/>');
	document.write("2. Sacar la raiz cuadrada de un numero",'<BR/>');
	document.write("3. Salir",'<BR/>');
	document.write("Digite una opcion: ",'<BR/>');
	opcion = Number(prompt());
	switch (opcion) {
	case 1:
		var num = new Number();
		var pot = new Number();
		var resultado = new Number();
		document.write("Digite un numero: ",'<BR/>');
		num = Number(prompt());
		document.write("Digite la potencia",'<BR/>');
		pot = Number(prompt());
		resultado = num*pot;
		break;
	case 2:
		var num = new Number();
		var resultado = new Number();
		document.write("Digite un  umero:",'<BR/>');
		num = Number(prompt());
		resultado = Math.sqrt(num);
		document.write("El resultado es:",resultado,'<BR/>');
		break;
	case 3:
		break;
	default:
		document.write("Se equivoco de opcion de menu",'<BR/>');
	}
}

