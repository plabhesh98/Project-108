function start_classification() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PoqqNMeol/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error , results) {
     if (error) {
        console.error(error);
     }else {
         console.log(results);
         random_r = Math.floor(Math.random() * 255) + 1;
         random_g = Math.floor(Math.random() * 255) + 1;
         random_b = Math.floor(Math.random() * 255) + 1;

         document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
         document.getElementById("accuracy").innerHTML = "Accuracy : " + (results[0].confidence * 100).toFixed(2) + "%";
         document.getElementById("result_label").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";
         document.getElementById("accuracy").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";

         if (results[0].label == "Barking"){
             document.getElementById("Animal_1").src = "Dog.gif";
         } else if(results[0].label == "Meowing"){
             document.getElementById("Animal_1").src = "Cat.gif";
         }else if (results[0].label == "Insects Chirping"){
             document.getElementById("Animal_1").src = "Insect.gif";
         }else if(results[0].label == "Background Noise"){
             document.getElementById("Animal_1").src = "listen.gif";
         }
     }
}  
