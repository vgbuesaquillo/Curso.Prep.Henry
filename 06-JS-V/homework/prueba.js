 function Persona (nombre,apellido){
	this.nombre = nombre || 'Juan';
	this.apellido = apellido || 'Pérez';
	}

Persona.prototype.getNombre = function(){
	console.log(this.nombre+' '+this.apellido);
	return this.nombre+' '+this.apellido;
	}

var toni = new Persona('Toni','Pérez');
toni.getNombre();
console.log(toni.nombre);
console.log(toni.apellido);

var Hombre = {
	nombre: 'Defecto',
	apellido: 'Defecto',
	getNombre: function (){
	console.log(this.nombre+' '+this.apellido);
	return this.nombre+' '+this.apellido;	
	}
}

var carlos = Object.create(Hombre);
carlos.nombre = 'Carlos';
carlos.apellido = 'Tobar';

carlos.getNombre();
console.log(carlos.nombre);
console.log(carlos.apellido);

class Mujer {
	constructor(nombre,apellido){
		this.nombre = nombre,
		this.apellido = apellido
	};
	getNombre (){
		console.log(this.nombre+' '+this.apellido);
		return this.nombre+' '+this.apellido;	
	}
}

var ana = new Mujer('Ana','Estrada');
ana.getNombre();
console.log(ana.nombre);
console.log(ana.apellido);

class Estudiante extends Mujer {
	constructor(nombre,apellido,carrera){
		super(nombre,apellido);
		this.carrera = carrera;
	}
	mostrarCarrera(){
		console.log(this.carrera);
	}
}

var estudiante = new Estudiante('Lorena','Ramírez','Ingeniería Civil');
estudiante.getNombre();
console.log(estudiante.nombre);
console.log(estudiante.apellido);
console.log(estudiante.carrera);