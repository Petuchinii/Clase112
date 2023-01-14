Webcam.attach('#camera' ); camera = document.getElementById("camera");

Webcam.set({
width: 200, 
height: 200,
image_format: "png",
png_quality: 150
});

function take_snapshot() {
    Webcam.snap( function (data_url){
        document.getElementById("result").innerHTML = '<img id="wsws" src="'+data_url+'"/>';
    }

    );
}
console.log("ml5 se activo", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7AoqU8k8G/model.json", modelLoaded)

function modelLoaded() {
    console.log('¡Modelo cargado!');
  }
      
  function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }


// Una función que se ejecuta cuando tenemos algún error y los resultados.
function gotResult(error, results) {
  // Mostrar error en la consola.
  if (error) {
    console.error(error);
  } else {
    // Los resultados están en una matriz ordenados por la confianza.
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
