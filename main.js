function preload(){

}

function setup(){
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ERwKA4Pch/model.json',modelLoaded);
    
}

function draw(){
image(video,50,50,300,300);
classifier.classify(video,gotResult);


}

function gotResult(error,results)
{
    if(error){
        console.log(error);
    }else{
        console.log(results);
     document.getElementById("result_object_name").innerHTML = results[0].label;
     document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);

   }
    }



function modelLoaded()
{
    console.log("Model Loaded");
}

