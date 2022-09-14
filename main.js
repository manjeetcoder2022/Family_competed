
Webcam.set({
    width:340,
    height:240,
    image_formet:"png",
    png_quality:"90",
})

Webcam.attach("#camera")

function capture_image(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("image_div").innerHTML= "<img id='captured_image' src= '" +data_uri +" '>"
        }
    )
}
console.log("Ml5 version : " +ml5.version)

  classifier=  ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QRfGcbL_y/model.json",modelLoaded)

function modelLoaded(){
  console.log("Model Loaded")
}
function check(){
   
        img= document.getElementById('captured_image')
        classifier.classify(img,goResult)
    
}
function goResult(error,results){
     if(error){
      console.log(error)
    }else{
        console.log(results)
         document.getElementById("result_object_name").innerHTML=results[0].label
       document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2)
    }

 }

