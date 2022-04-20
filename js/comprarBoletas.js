const questions = [
  {
    question: "¿Cuál NO es un festival de música?",
    choices: [
      "Estéreo picnic",
      "La Solar Festival",
      "Festival Rock al Parque",
      " Festival Crazy",
    ],
    answer: 3,
  },

  {
    question: "¿En qué ciudad se desarrolla el festival Estéreo picnic?",
    choices: [
      "Medellin,Colombia",
      "Bogotá,Colombia",
      "Cali,Colombia",
      "Cartagena,Colombia",
    ],
    answer: 1,
  },

  {
    question: "¿Cuál es el festival gratuito más grande de América Latina?",
    choices: [
      "La Solar Festival",
      "Jamming festival",
      "Estereo Picnic",
      "Festival Rock al parque",
    ],
    answer: 3,
  },

  {
    question: "¿Qué festival incluye electrónica, house y tecno?",
    choices: [
      "Estereo Beach Festival",
      "Soundhearts Festival",
      "Storyland festival",
      "Be you Fest",
    ],
    answer: 2,
  },

  {
    question:
      "¿En qué festival se encuentra no solo música sino también actividades como yoga, surf, masajes y gastronomía?",
    choices: [
      "Festelar 2018",
      "Estereo Beach Festival",
      "Tatacoa Festival",
      "Storyland Festival",
    ],
    answer: 1,
  },

  {
    question: "¿En qué año se realizó el primer festival de música Coachella?",
    choices: ["1990", "1999", "2000", "2010"],
    answer: 1,
  },

  {
    question:
      "¿En qué estado de Estados Unidos tiene lugar el festival de música Coachella?",
    choices: ["California", "Ohio", "Florida", "Nueva York"],
    answer: 0,
  },

  {
    question:
      "¿En qué mes se realiza el festival de música del pacífico Petronio Álvarez?",
    choices: ["Julio", "Agosto", "Octubre", "Diciembre"],
    answer: 1,
  },

  {
    question:
      "¿En qué año se realizó el primer festival de música del pacífico Petronio Álvarez?",
    choices: ["1990", "1996", "2000", " 2005"],
    answer: 1,
  },

  {
    question:
      "¿Cuál es uno de los festivales de música electrónica más emblemático en la actualidad?",
    choices: [
      "Daydream festival",
      "Ultra",
      "Tomorrowland",
      " Alfa future people",
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
      <button class="btn first" type="button" onclick="compararRespuesta(indice)">Siguiente</button>
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
  } else {
    if (tipoBoletaInput.value === "basic") {
      precio = 399_900;
      total = precio * cantidadInput.value;
    } else if (tipoBoletaInput.value === "full") {
      precio = 899_900;
      total = precio * cantidadInput.value;
    }
  }

  const resumen = document.getElementById("resumenCompra");
  resumen.innerHTML = `${
    tipoBoletaInput.options[tipoBoletaInput.selectedIndex].text
  } x ${cantidadInput.value} = $${total} COP`;

  totalLabel.innerHTML = total;
}