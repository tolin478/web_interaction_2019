var colors = ['lightsalmon','cadetblue','lavender','thistle','cornflowerblue','darkseagreen','rosybrown','sandybrown'];
var colors2 = [];

var hourShowing = false;
var minuteShowing = false;
var secondShowing = false;

var hourChanged = false;

getSeconds();
getMinutes();
getHours();

//DISPLAYING SECONDS
function getSeconds(){

  //SECONDS
  var second = new Date();
  var seconds = second.getSeconds();
  // document.getElementById("second").innerHTML = seconds;
  document.getElementById("circleclock3").innerHTML = seconds;

  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  $('#secondcircle').css('background-color', randomColor);

  var randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  if(seconds==0){
    $('#minutecircle').css('background-color',randomColor2);
  }

  setTimeout(getSeconds,1000);

}


function getMinutes(){

  var minute = new Date();
  var minutes = minute.getMinutes();
  // document.getElementById("minute").innerHTML = minutes;
  if(minutes<=9){
    document.getElementById("circleclock2").innerHTML = "0"+minutes;
  }else{
    document.getElementById("circleclock2").innerHTML = minutes;
  }

  setTimeout(getMinutes,1000);

}


function getHours(){

  var hour = new Date();
  var hours = hour.getHours();
  // document.getElementById("hour").innerHTML = hours;

  if(hours>=13){
    hours-=12;
  }else if(hours==0){
    hours+=12;
  }

  document.getElementById("circleclock1").innerHTML = hours;

  setTimeout(getHours,1000);

}

//CLICK FOR HOUR
$('#hourcircle').click(function(){

  if(hourShowing===false){
    $('#circleclock1').css('opacity',1);
    hourShowing=true;
  }else{
    $('#circleclock1').css('opacity',0);
    hourShowing=false;
  }

});

//CLICK FOR MINUTE
$('#minutecircle').click(function(){

  if(minuteShowing===false){
    $('#circleclock2').css('opacity',1);
    minuteShowing = true;
  }else{
    $('#circleclock2').css('opacity',0);
    minuteShowing = false;
  }
});

//CLICK FOR SECONDS
$('#secondcircle').click(function(){

  if(secondShowing===false){
    $('#circleclock3').css('opacity',1);
    secondShowing = true;
  }else{
    $('#circleclock3').css('opacity',0);
    secondShowing = false;
  }
});
