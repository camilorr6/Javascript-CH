let usuario1="usuario123";
let pass1="pass123";

function playMusica(){
    console.log("rafael la tiene adentro");
    let cancion = prompt("Ingresa el numero de cancion que deseas escuchar, escriba 0 para volver a la página principal");
        switch (cancion) {
        case '0':
            break
        case '1':
            alert('Escuchando cancion 1 de tu playlist');
            break;
        case '2':
            alert('Escuchando cancion 2 de tu playlist');
            break;
        case '3':
            alert('Escuchando cancion 3 de tu playlist');
            break;
        case '4':
            alert('Escuchando cancion 4 de tu playlist');
            break;
        case '5':
            alert('Escuchando cancion 5 de tu playlist');
            break;
        case '6':
            alert('Escuchando cancion 1 de tu playlist');
            break;
        default:
            alert(`Lo sentimos, la cancion que deseas escuchar no se encuentra en la playlist!`);
        }
}

function inicioSesion(){
let preguntarDatos = confirm("¿Desea iniciar sesión")
if (preguntarDatos == true){
    let valUs = prompt("Ingrese su usuario");
    let valPass = prompt("Ingrese su contraseña");
        if (usuario1 == valUs && pass1 == valPass){
            alert("Bienvenido " + usuario1 + "!");
            playMusica()        
        }
        else if(usuario1 != valUs){
        alert ("Usuario ingresado no existe")}
        else{
            alert ("Contraseña incorrecta");
            inicioSesion()
        }
    }

}





inicioSesion()