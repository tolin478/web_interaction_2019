var logoname = document.getElementById("logoname");
var logoimg = document.getElementById("logopic");
var container = document.getElementById("container");

function fontFunction(){
  var font = document.getElementById("myFonts").value;
  logoname.style.fontFamily = font;
}

function boldFunction(){
  var checkBox = document.getElementById("boldCheck");

  if(checkBox.checked==true){
    logoname.style.fontWeight = 'bold';
  }else{
    logoname.style.fontWeight = 'inherit';
  }
}

function italicFunction(){

  var checkBox = document.getElementById("italicCheck");

  if(checkBox.checked==true){
    logoname.style.fontStyle = 'italic';
  }else{
    logoname.style.fontStyle = 'inherit';
  }

}

function sizeFunction(){
  var checkSize = document.getElementById("size").value;
  logoname.style.fontSize = checkSize + "px";
}

function xPositionFunction(){
  var currentPosition = document.getElementById("xposition").value;
  logoname.style.marginLeft = currentPosition + "px";
}

function yPositionFunction(){
  var currentPosition = document.getElementById("yposition").value;
  logoname.style.marginTop = currentPosition + "px";
}

function underlineFunction(){
  var checkBox = document.getElementById("underlineCheck");

  if(checkBox.checked==true){
    logoname.style.textDecoration = "underline";
  }else{
    logoname.style.textDecoration = "none";
  }
}

function addImage(){
  var checkBox = document.getElementById("imageCheck");

  if(checkBox.checked==true){
    logoimg.style.opacity = 1;
  }else{
    logoimg.style.opacity = 0;
  }
}

function addBackground(){
  var checkBox = document.getElementById("bgCheck");

  if(checkBox.checked==true){
    document.body.style.backgroundColor = "ghostwhite";
  }else{
    document.body.style.backgroundColor = "white";
  }
}
