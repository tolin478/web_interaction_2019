// var clicked = false;
//
//   $("#yeet").click(function () {
//     if(clicked==false){
//       $("#yeet").text('$14.00');
//       clicked = true;
//     }else if(clicked==true){
//       $("#yeet").text('yeet');
//       clicked = false;
//     }
//   })
//
// // var firstpart = ['your', 'golfland','goose'];
// // var secondpart = [];
// // var thirdpart = [];
//
// function sortList() {
//   var list, i, switching, b, shouldSwitch;
//   list = document.getElementById("captions");
//   switching = true;
//   /* Make a loop that will continue until
//   no switching has been done: */
//   while (switching) {
//     // start by saying: no switching is done:
//     switching = false;
//     b = list.getElementsByTagName("li");
//     // Loop through all list-items:
//     for (i = 0; i < (b.length - 1); i++) {
//       // start by saying there should be no switching:
//       shouldSwitch = false;
//       /* check if the next item should
//       switch place with the current item: */
//       if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
//         /* if next item is alphabetically
//         lower than current item, mark as a switch
//         and break the loop: */
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       /* If a switch has been marked, make the switch
//       and mark the switch as done: */
//       b[i].parentNode.insertBefore(b[i + 1], b[i]);
//       switching = true;
//     }
//   }
// }

//for FOOD
var foodArray = ["Pumpkin beer","🍜","🍕","🍞","🍵","🐄","shallots","mango","Kbeebeeque","ithe cream","Zoupo"]

//for ACTIVITIES
var activitiesArray = ["Rafting and Mini Golfing","holiday inn express","golfland","🛒","💅"];

//for RANDOM
var descriptorArray = ["histamine-packed","goose skate park","Jeff bezos","malaysia","weeb","moana fan club","Pumpkin beer","Nyc","family","my","glug glug","Dank","lots and lots of"];
var expletiveArray = ["fuckin","BITCH","hell","bitch","binch"];
var itemArray = ["Pumpkin beer","Rafting and Mini Golfing","mango","shallots","dinner","Kbeebeeque","holiday inn express","ithe cream","Zoupo","D E B T","golfland","pot","ubi","beep beep"];
var paymentArray = ["scam","Allowance....","gluttony","hellhole","experience","entrance fee","extravaganza","dues","supper","wonderland","love and friendship"];
var onelinerArray = ["crunch","yeet","Reparations", "Cloth","heheheheheheheheheheheehehehehe","Tiddy"];
var emojis = ["🎄","🧂","🍭","🍜","🚘","🌃","🍕","🍞","🍵","💦","🐄","🛒","🥵","💅","🧀","🥖","🍋","🥂","🍧","🥗","🥧"]

function generate(){
  var mode = document.getElementById("chooseMode").value;
  console.log(mode);


  if(mode=="random"){
    randomGenerate();
  }else if(mode=="food"){
    foodGenerate();
  }else if (mode=="acitivty"){
    activityGenerate();
  }
}

function randomGenerate(){

  var caption;

  var descriptor = descriptorArray[Math.floor(Math.random()*descriptorArray.length)];
  var expletive = expletiveArray[Math.floor(Math.random()*expletiveArray.length)];
  var item = itemArray[Math.floor(Math.random()*itemArray.length)];
  var payment = paymentArray[Math.floor(Math.random()*paymentArray.length)];
  var oneliner = onelinerArray[Math.floor(Math.random()*onelinerArray.length)];
  var emoji = emojis[Math.floor(Math.random()*emojis.length)];


  var num1 = Math.floor(Math.random() * 50);
  var num2 = Math.floor(Math.random() * 100);

  var randomizer = Math.floor(Math.random() * 100);

  if(randomizer<=50){
    var caption = descriptor + " " + item + " " + payment;
  }else if(randomizer>50 && randomizer<=75){
    var caption = emoji;
  }else if(randomizer>75 && randomizer<=100){
    var caption = oneliner;
  }

  if(num2>10){
    var price = "$" + num1 + "." + num2;
  }else if(num2<10){
    var price = "$" + num1 + ".0" + num2;
  }

  $(".caption").prepend("<p>" + caption);
  $(".value").prepend("<p>" + price);
}

function foodGenerate(){

  var descriptor = descriptorArray[Math.floor(Math.random()*descriptorArray.length)];
  var expletive = expletiveArray[Math.floor(Math.random()*expletiveArray.length)];
  var food = foodArray[Math.floor(Math.random()*foodArray.length)];
  var payment = paymentArray[Math.floor(Math.random()*paymentArray.length)];
  var oneliner = onelinerArray[Math.floor(Math.random()*onelinerArray.length)];

  var num1 = Math.floor(Math.random() * 50);
  var num2 = Math.floor(Math.random() * 100);

  var randomizer = Math.floor(Math.random() * 100);

  if(randomizer<=75){
    var caption = descriptor + " " + food + " " + payment;
  }else if(randomizer>75){
    var caption = oneliner;
  }

  if(num2>10){
    var price = "$" + num1 + "." + num2;
  }else if(num2<10){
    var price = "$" + num1 + ".0" + num2;
  }

  $(".caption").prepend("<p>" + caption);
  $(".value").prepend("<p>" + price);


}

function activityGenerate(){

}
