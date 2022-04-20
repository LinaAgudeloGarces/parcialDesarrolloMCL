//Variables que necesito
let usuario = "susana.morera";
let contrasena = "abcd1234";

//Variables que ingresa el usuario
let usuarioIng;
let contrasenaIng;

//Para cuando unde boton
let boton = document.getElementById("boton");
boton.addEventListener("click", function(){ingresar()});

//método que se ejecuta al presionar el botón ingresar
function ingresar(){
    //Obtengo los datos del usuario
    usuarioIng = document.getElementById("name").value;
    contrasenaIng = document.getElementById("contra").value;
    console.log("Usuario: "+ usuarioIng + "\nContraseña: " + contrasenaIng);
    //Saber si hay datos
    if((usuarioIng !="")&& (contrasenaIng !="")){
        //Si el usuario y la contraseña son correctos
        if(usuarioIng===usuario&&contrasenaIng===contrasena){
            window.location.href="./parcialDesarrolloMCL/panel.html";
        }
        //Si no es correcto el usuario
        else if(usuarioIng!=usuario&&contrasenaIng===contrasena){
            window.alert("El usuario no es correcto. Vuelve a comprobarlo");
        }
        //Si es incorrecta la contraseña
        else if(usuarioIng===usuario&&contrasenaIng!=contrasena){
            window.alert("Tu contraseña no es correcta. Vuelve a comprobarla");
        }
        //Si todo es malo
        else{
            window.alert("El usuario y la contraseña no es correcto. Vuelve a comprobarlo");
        }
    }
}

//Método que se ejecuta al darle mostrar
document.querySelector('#span').addEventListener('click', e => {
    const passwordInput = document.querySelector('#contra');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        e.target.textContent = 'Ocultar';
        passwordInput.type = 'text';
    } else {
        e.target.classList.add('show');
        e.target.textContent = 'Mostrar';
        passwordInput.type = 'password';
    }
});
