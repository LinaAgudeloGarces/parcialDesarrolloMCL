//Variables que necesito
let usuario = "susana.morera";
let contrasena = "abcd1234";
//Contraseña encriptada
let contraEncriptada;
let arregloDatos= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","#","$","%","&","/","(",")","=","?","¡","¿","*","[","]","{","}","-","_","<",">",";"];
//TAMAÑO ES 85

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
    
    //Saber si hay datos
    if((usuarioIng !="")&& (contrasenaIng !="")){
        //Encriptar contraseña
        contraEncriptada = encriptar(contrasenaIng);
        console.log("Usuario: "+usuarioIng + "\nContraseña: "+ contrasenaIng + "\nENCRIPTADA: " + contraEncriptada );
        //Si el usuario y la contraseña son correctos
        if(usuarioIng===usuario&&contrasenaIng===contrasena){
            //Abre la ventana
            window.open("../panel.html");
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
            window.alert("El usuario y la contraseña no son correctos. Vuelve a comprobarlos");
        }
    }
}


//Método que encripta la contraseña
function encriptar(password){
    let contraE = "";
    //Vuelvo array la contraseña
    let arregloPass = Array.from(password);
    
    let num=0;
    for(let i=0; i<arregloPass.length; i++){
        //Obtengo numero aleatorio
        num = Math.round(Math.random() * (85));
        contraE+= arregloDatos[num];
    }
    
    return contraE;
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
