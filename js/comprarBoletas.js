const divs = document.getElementsByClassName("divs");

var questions = 
      [
        {
          question: "¿Cuál NO es un festival de música?",
          choices: ["Estéreo picnic", "La Solar Festival", "Festival Rock al Parque", " Festival Crazy"],
          answer: 4
        },
        
        {
          question: "¿En qué ciudad se desarrolla el festival Estéreo picnic?",
          choices: ["Medellin,Colombia", "Bogotá,Colombia", "Cali,Colombia", "Cartagena,Colombia"],
          answer: 2
        },

        {
          question: "¿Cuál es el festival gratuito más grande de América Latina?",
          choices: ["La Solar Festival", "Jamming festival", "Estereo Picnic", "Festival Rock al parque"],
          answer: 4
        },

        {
          question: "¿Qué festival incluye electrónica, house y tecno?",
          choices: ["Estereo Beach Festival", "Soundhearts Festival", "Storyland festival", "Be you Fest"],
          answer: 3
        },
        
         {
          question: "¿En qué festival se encuentra no solo música sino también actividades como yoga, surf, masajes y gastronomía?",
          choices: ["Festelar 2018", "Estereo Beach Festival", "Tatacoa Festival", "Storyland Festival"],
          answer: 2
        },
         
        {
          question: "¿En qué año se realizó el primer festival de música Coachella?",
          choices: ["1990", "1999", "2000", "2010"],
          answer: 2
        },
        
        {
          question: "¿En qué estado de Estados Unidos tiene lugar el festival de música Coachella?",
          choices: ["California", "Ohio", "Florida", "Nueva York"],
          answer: 1
        },
        
        {
          question: "¿En qué mes se realiza el festival de música del pacífico Petronio Álvarez?",
          choices: ["Julio", "Agosto", "Octubre", "Diciembre"],
          answer: 2
        },

         {
          question: "¿En qué año se realizó el primer festival de música del pacífico Petronio Álvarez?",
          choices: ["1990", "1996", "2000", " 2005"],
          answer: 2
        },
        
         {
          question: "¿Cuál es uno de los festivales de música electrónica más emblemático en la actualidad?",
          choices: ["Daydream festival", "Ultra", "Tomorrowland", " Alfa future people"],
          answer: 3
        },
        
      ];
      
for (var i = 0; i < questions.length; i++) {
    var question = questions[i].question;
    document.write(question);
    var options = questions[i].choices;
    document.body.appendChild(document.createElement("br"));
    var name = "radio" + i;
    for (var opt in options) {
        
        var radioEle = document.createElement("input");
        radioEle.type = "radio";
        radioEle.value = options[opt];
        radioEle.name = name;
        document.body.appendChild(radioEle);
        var label = document.createElement("Label");
        label.innerHTML = options[opt];
        document.body.appendChild(label);
        document.body.appendChild(document.createElement("br"));
    }
        
    document.body.appendChild(document.createElement("br"));
          
    function cambiarQuestion() {
        const indice = Math.floor(Math.random() * questions.length);
        document.getElementsByClassName("divs") = questions[indice];
    }
    

}
      


