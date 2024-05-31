var index =1;
var pngname = "2.png";
var imgs = document.getElementById("img");
var fontexts = document.getElementById("textid");

function NextImage() {     
ImageChange(1);
}
function BackImage() {
ImageChange(-1);

}


function ImageChange(value)
{
    index += value;
    if(index>5)index=2;
    if(index <2)index = 5;
 document.getElementById("img").src = "./images/" + index.toString() + ".png";
  //
document.getElementById("textid").textContent = index;
}
