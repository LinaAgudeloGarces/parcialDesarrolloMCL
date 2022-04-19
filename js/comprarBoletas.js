const questions = 
      [
        {
          question: "¿Cuál NO es un festival de música?",
          choices: ["Estéreo picnic", "La Solar Festival", "Festival Rock al Parque", " Festival Crazy"],
          answer: 3
        },
        
        {
          question: "¿En qué ciudad se desarrolla el festival Estéreo picnic?",
          choices: ["Medellin,Colombia", "Bogotá,Colombia", "Cali,Colombia", "Cartagena,Colombia"],
          answer: 1
        },

        {
          question: "¿Cuál es el festival gratuito más grande de América Latina?",
          choices: ["La Solar Festival", "Jamming festival", "Estereo Picnic", "Festival Rock al parque"],
          answer: 3
        },

        {
          question: "¿Qué festival incluye electrónica, house y tecno?",
          choices: ["Estereo Beach Festival", "Soundhearts Festival", "Storyland festival", "Be you Fest"],
          answer: 2
        },
        
         {
          question: "¿En qué festival se encuentra no solo música sino también actividades como yoga, surf, masajes y gastronomía?",
          choices: ["Festelar 2018", "Estereo Beach Festival", "Tatacoa Festival", "Storyland Festival"],
          answer: 1
        },
         
        {
          question: "¿En qué año se realizó el primer festival de música Coachella?",
          choices: ["1990", "1999", "2000", "2010"],
          answer: 1
        },
        
        {
          question: "¿En qué estado de Estados Unidos tiene lugar el festival de música Coachella?",
          choices: ["California", "Ohio", "Florida", "Nueva York"],
          answer: 0
        },
        
        {
          question: "¿En qué mes se realiza el festival de música del pacífico Petronio Álvarez?",
          choices: ["Julio", "Agosto", "Octubre", "Diciembre"],
          answer: 1
        },

         {
          question: "¿En qué año se realizó el primer festival de música del pacífico Petronio Álvarez?",
          choices: ["1990", "1996", "2000", " 2005"],
          answer: 1
        },
        
         {
          question: "¿Cuál es uno de los festivales de música electrónica más emblemático en la actualidad?",
          choices: ["Daydream festival", "Ultra", "Tomorrowland", " Alfa future people"],
          answer: 2
        },
        
      ];

let indice = 0;
let contador = 0;

function generarIndice() {
    return indice = Math.floor(Math.random() * questions.length);
}

indice = generarIndice()

function mostrarPregunta(indice) {
    const quiz = document.getElementById('quiz');
    let html = `
    <div class="divs">
      <h3>${questions[indice].question}</h3>
        <input type="radio" name="answer" id="genre" value="0">
          <label for="genre">${questions[indice].choices[0]}</label><br>
        <input type="radio" name="answer" id="genre" value="1">
          <label for="genre">${questions[indice].choices[1]}</label><br>
        <input type="radio" name="answer" id="genre" value="2">
          <label for="genre">${questions[indice].choices[2]}</label><br>
        <input type="radio" name="answer" id="genre" value="3">
          <label for="genre">${questions[indice].choices[3]}</label><br>
      <button class="boton" type="button" onclick="compararRespuesta(indice)">Siguiente</button>
    </div>
    `
    quiz.innerHTML = html;
}

mostrarPregunta(indice);

function compararRespuesta(indice) {
  let ele = document.getElementsByName('answer');

  for(i = 0; i < ele.length; i++) {
    if(ele[i].checked)
      if(ele[i].value == questions[indice].answer) {
        console.log("Correcto");
        contador++;
      }else {
        console.log("Incorrecto");
      }
  }
  
  if(questions.length > 0) {
    questions.splice(indice, 1);
    indice = generarIndice();
    mostrarPregunta(indice);
  }else {
    //Codigo para generar cupon de descuento y mostrarlo en pantalla si contador == 10
    if(contador == 10){
      //Generar cupon de descuento
    }else {
      //Mostrar mensaje de no ganar cupon
    }
  }
}

function generateCode(){
  let code = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for(let i = 0; i < 6; i++)
    code += possible.charAt(Math.floor(Math.random() * possible.length));

  return code;
}