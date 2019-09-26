var colors = ['lightsalmon','cadetblue','lavender','thistle','cornflowerblue','darkseagreen','rosybrown','sandybrown'];
var colors2 = [];

var hourShowing = false;
var minuteShowing = false;
var secondShowing = false;

getSeconds();
getMinutes();
getHours();

//DISPLAYING SECONDS
function getSeconds(){

  //SECONDS
  var second = new Date();
  var seconds = second.getSeconds();
  // document.getElementById("second").innerHTML = seconds;

  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  $('#secondcircle').css('background-color', randomColor);

  if(seconds==0){
    $('#minutecircle').css('background-color',randomColor);
  }

  setTimeout(getSeconds,1000);

}


function getMinutes(){

  var minute = new Date();
  var minutes = minute.getMinutes();
  // document.getElementById("minute").innerHTML = minutes;

  $('#minutecircle').click(function(){

    if(minuteShowing===false){
      if(minutes<=9){
        document.getElementById("circleclock2").innerHTML = "0"+minutes;
      }else{
        document.getElementById("circleclock2").innerHTML = minutes;
      }
      minuteShowing = true;
    }else{
      document.getElementById("circleclock2").innerHTML = null;
      minuteShowing = false;
    }
  });

  var randomColor = colors[Math.floor(Math.random() * colors.length)];

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

  //CLICK FOR HOUR
  $('#hourcircle').click(function(){

    if(hourShowing===false){
      document.getElementById("circleclock1").innerHTML = hours;
      hourShowing=true;
    }else{
      document.getElementById("circleclock1").innerHTML = null;
      hourShowing=false;
    }

  });

}
