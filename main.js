function staart()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gaRe2L7Jm/model.json', modelReady);
}

function modelReady()
{
    Classifier.classify(gotResult);
}

function gotResult(error, result)
{
if (error)
{
    console.error(error);
}
else 
{
    console.log(result);

    Random_r= Math.floor(Math.random()*255)+1;
    Random_g= Math.floor(Math.random()*255)+1;
    Random_b= Math.floor(Math.random()*255)+1;

    document.getElementById("hear").innerHTML='I can hear- '+result[0].label;
    document.getElementById("Yuo").innerHTML='Accuracy- '+(result[0].confidence*100).toFixed(2)+'%';

    document.getElementById("hear").style.color="rgb("+Random_r+", "+Random_g+", "+Random_b+")";
    document.getElementById("Yuo").style.color="rgb("+Random_r+", "+Random_g+", "+Random_b+")";

   img1= document.getElementById("ear");
  

   if (result[0].label=="Akaza")
   {
     img1.src= "Akaza.png";
   }else if (result[0].label=="Background Noise")
   {
    img1.src= "Shinobu.png";
   }else if (result[0].label=="Giyuu")
   {
    img1.src= "Giyu.png";
   }
   else if (result[0].label=="Rengoku")
   {
    img1.src= "Rengoku.png";
   }else if (result[0].label=="Tanjiro")
   {
    img1.src= "Tanjiro.png";
   }

   else 
   {
    img1.src= "Yorichi.png";
   }

}

}