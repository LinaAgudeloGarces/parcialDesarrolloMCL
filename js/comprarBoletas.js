const questions = [
  {
    question: "¿Cuál es el disco más vendido de Michael Jackson?",
    choices: [
      "Off the Wall",
      "Dangerous",
      "Bad",
      "Thriller",
    ],
    answer: 3,
  },

  {
    question: "¿Cuál es el quinto título del álbum Future Nostalgia de Dua Lipa?",
    choices: [
      "Love Again",
      "Levitating",
      "Physical",
      "Break My Heart",
    ],
    answer: 1,
  },

  {
    question: "¿Cuál de las siguientes canciones NO es de Bad Bunny con Bryant Myers?",
    choices: [
      "Un ratito mas",
      "Pa ti",
      "Triste",
      "Soy peor",
    ],
    answer: 3,
  },

  {
    question: "¿Con quién canta Christian Nodal en la canción Botella Tras Botella?",
    choices: [
      "Pipe Bueno",
      "Jhonny Rivera",
      "Gera MX",
      "Jessi Uribe",
    ],
    answer: 2,
  },

  {
    question:
      "¿Cuándo se formó el grupo Jesse & Joy?",
    choices: [
      "2004",
      "2005",
      "2006",
      "2007",
    ],
    answer: 1,
  },

  {
    question: "¿En qué video musical de Michael Jackson aparece Eddie Murphy?",
    choices: ["Smooth Criminal", "Remember The Time", "They Don't Care About Us", "Thriller"],
    answer: 1,
  },

  {
    question:
      "¿En qué idioma canta Dua Lipa, en la canción Fever, a parte del inglés?",
    choices: ["Francés", "Español", "Ruso", "Catalán"],
    answer: 0,
  },

  {
    question:
      "¿Cuál de las siguientes canciones no hace parte del álbum YHLQMDLG de Bad Bunny?",
    choices: ["Yo perreo sola", "Dákiti", "Si veo a tu mamá", "Solía"],
    answer: 1,
  },

  {
    question:
      "¿Cómo se llama la canción de Christian Nodal con Juanes?",
    choices: ["Probablemente", "Tequila", "Pa' olvidarme de ella", "Guaro"],
    answer: 1,
  },

  {
    question:
      "¿Cuál es el nombre de los hermanos de Jesse & Joy?",
    choices: [
      "Joy García y Jesse García",
      "Joy Pérez y Jesse Pérez",
      "Joy Huerta y Jesse Huerta",
      "Joy Flores y Jesse Flores",
    ],
    answer: 2,
  },
];

let indice = 0;
let contador = 0;

function generarIndice() {
  return (indice = Math.floor(Math.random() * questions.length));
}

indice = generarIndice();

function mostrarPregunta(indice) {
  const quiz = document.getElementById("quiz");
  let html = questions.length
    ? `
      <div class="divs">
      <h2 id="descuento">Gánate un descuento del 50%</h2><br>

      <h3>${questions[indice].question}</h3><br>
        <label for="option1"><input type="radio" name="answer" id="option1" value="0">${questions[indice].choices[0]}</label><br>
        <label for="option2"><input type="radio" name="answer" id="option2" value="1">${questions[indice].choices[1]}</label><br>
        <label for="option3"><input type="radio" name="answer" id="option3" value="2">${questions[indice].choices[2]}</label><br>
        <label for="option4"><input type="radio" name="answer" id="option4" value="3">${questions[indice].choices[3]}</label><br>
      <button class="btn first" type="button" onclick="compararRespuesta(indice)" >Siguiente</button>
    </div>
    `
    : mostrarCodigo();
  quiz.innerHTML = html;
}

mostrarPregunta(indice);

function compararRespuesta(indice) {
let ele = document.getElementsByName("answer");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      if (ele[i].value == questions[indice].answer) {
        console.log("Correcto");
        contador++;
      } else {
        console.log("Incorrecto");
      }
  }

  if (questions.length > 0) {
    questions.splice(indice, 1);
    indice = generarIndice();
    mostrarPregunta(indice);
  }
}

//Funcion mostrar codigo, analiza si las preguntas estan vacias y el contador es 10
//De lo contrario, se muestra un mensaje.
function mostrarCodigo() {
  const descuentoLabel = document.getElementById("descuento")
  if (questions.length === 0 && contador === 10) {
    descuentoLabel.remove()
    let html = `
    <div class="divs">
      <h2 id="mensaje">¡Felicitaciones,ganaste un código de descuento!</h2>
      <h3>${generateCode()}</h3><br>
    </div>
    `;
    return html;
  } else {
    //Mostrar mensaje de no ganar cupon
    return `<h2 id="mensaje">Gracias por participar,una próxima vez será</h2>`;
  }
}

let arrayOfCodes = [];

function generateCode() {
  let code = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 6; i++) {
    code += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  arrayOfCodes.push(code);
  return code;
}

//Función para sacar total
let cantidad = 0;
let precio = 0;
let total = 0;
const tipoBoletaInput = document.getElementById("tipo");
const cantidadInput = document.getElementById("cantidad");
const totalLabel = document.getElementById("total");
const descuentoInput = document.getElementById("descuentoInput");

// si el codigo de descuento esta en el array (true), aplicar el descuento
function totalCompra() {
  console.log(cantidadInput.value);
  console.log(tipoBoletaInput.value);

  if (descuentoInput.value && arrayOfCodes.includes(descuentoInput.value)) {
    if (tipoBoletaInput.value === "basic") {
      precio = 399_900;
      total = precio * cantidadInput.value * 0.5;
    } else if (tipoBoletaInput.value === "full") {
      precio = 899_900;
      total = precio * cantidadInput.value * 0.5;
    }
  } else{
    if (tipoBoletaInput.value === "basic") {
      precio = 399_900;
      total = precio * cantidadInput.value;
    } else if (tipoBoletaInput.value === "full") {
      precio = 899_900;
      total = precio * cantidadInput.value;
    }else if(tipoBoletaInput.value === ""){
    }
  }

  const resumen = document.getElementById("resumenCompra");
  resumen.innerHTML = `${
    tipoBoletaInput.options[tipoBoletaInput.selectedIndex].text
  } x ${cantidadInput.value} = $${total} COP`;

  totalLabel.innerHTML = total;
}
