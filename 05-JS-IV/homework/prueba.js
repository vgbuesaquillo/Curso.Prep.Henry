function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  var long = usuarios.length;
  for (var i = 0; i < long; i++) {
    console.log(usuarios[i].esPremium);
    usuarios[i].esPremium = "true";
  }
  console.log(usuarios)
  return usuarios
}

const usr1 = {
  "Nombre": "Jose",
  "esPremium": false
};

const usr2 = {
  "Nombre": "María",
  "esPremium": false
};

var usuarios = [usr1,usr2];

pasarUsuarioAPremium(usuarios)