img = "";
estado = "";
objects = [];

function preload(){
    img = loadImage('Senhor.jpg')
}


function setup(){
    canvas = createCanvas(640,420);
    canvas.position();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Reconhecendo" ;
}

function modelLoaded(){
console.log("Modelo carregado");
estado = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results)
    objects = results;
}

function draw(){
    image(img, 0, 0, 640, 420);

    if(estado != ""){
        for(i = 0; i< objects.length; i++){
            document.getElementById("status").innerHTML = "Objeto Detectado";
            fill("#FF000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill()
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            console.log("¯\_(ツ)_/¯");
        }
    }

    

}





