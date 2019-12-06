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
var foodArray = []

//for RANDOM
var descriptorArray = ["histamine-packed","goose skate park","Jeff bezos","malaysia","weeb","moana fan club","Pumpkin beer","Nyc","family","my",];
var expletiveArray = ["fuckin","BITCH","hell"];
var itemArray = ["Pumpkin beer","Rafting and Mini Golfing","mango","shallots","dinner","Kbeebeeque","holiday inn express","ithe cream","Zoupo","D E B T"];
var paymentArray = ["scam","Allowance....","gluttony","hellhole","experience","entrance fee","extravaganza","dues","supper","wonderland"];
var onelinerArray = ["crunch","yeet","Reparations", "Cloth","heheheheheheheheheheheehehehehe","Tiddy"];
var emojis = ["🎄","🧂","🍭","🍜","🚘","🌃","🍕","🍞","🍵","💦","🐄","🛒","🥵","💅","🧀","🥖","🍋","🥂","🍧","🥗","🥧"]

var mode = document.getElementById("chooseMode").value;

function generate(){
  if(mode=="random"){
    randomGenerate();
  }
}

function randomGenerate(){

  var descriptor = descriptorArray[Math.floor(Math.random()*descriptorArray.length)];
  var expletive = expletiveArray[Math.floor(Math.random()*expletiveArray.length)];
  var item = itemArray[Math.floor(Math.random()*itemArray.length)];
  var payment = paymentArray[Math.floor(Math.random()*paymentArray.length)];
  var oneliner = onelinerArray[Math.floor(Math.random()*onelinerArray.length)];

  var num1 = Math.floor(Math.random() * 50);
  var num2 = Math.floor(Math.random() * 100);

  var caption = descriptor + " " + item + " " + payment;

  if(num2>10){
    var price = "$" + num1 + "." + num2;
  }else if(num2<10){
    var price = "$" + num1 + ".0" + num2;
  }

  $(".caption").append("<p>" + caption);
  $(".value").append("<p>" + price);
}
