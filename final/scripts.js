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

var listCaptions = [
  "🌲🍭",
  "Five bucks",
  "🍜",
  "Ubi🚗🌃",
  "Yeet",
  "Eesh",
  "Allowance.....",
  "East. I thought you said. Udon weast",
  "Malaysia",
  "Xo",
  "Nyc gluttony",
  "🍕",
  "Pumpkin beer hell",
  "Jeff bezos shallots scam",
  "🍞🍵",
  "💦",
  "🍜",
  "🐄",
  "🛒",
  "🥵",
  "💅",
  "No thai chicken rice allowed",
  "oh and cleaning fee for cabin which was $60 flat rate :/",
  "this venmo payment for gasoline and The Toll is one vote for MARIANNE",
  "Lymes",
  "If the hats missin......ive gone Rafting and Mini Golfing",
  "T H M O R E S 🤗",
  "Tarzan sex scene",
  "🧀🍞🍋",
  "🥂",
  "🍧+🥗+🥧",
  "drinks @ gingers/Italy etc",
  "🌸",
  "family dinner",
  "bogo DO impress me much 🥵",
  "Various shes",
  "Kbeebeeque",
  "she..... is.  ѕнe ιѕ. holiday inn express",
  "golfland volcano hellhole",
  "🥴,🍚",
  "Zoupo 2.0",
  "🍜",
  "Zoupo",
  "My D E B T",
  "🆘🆘🆘🅱️",
  "🍾",
  "🍺",
  "🍖",
  "🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜🍜",
  "🍜🍜🍜SLORP SLORP",
  "🥤",
  "🍰☕🍩",
  "Cloth",
  "🍜",
  "🥐🍩",
  "🍗",
  "🚗💨",
  "I calculated it wrong last time lmao",
  "Beep beep binch",
  "#declined",
  "DUSHA",
  "The ice cream",
  "🇸🇪BRÖDER NÖRD🇸🇪",
  "merci et á bientot 🇫🇷",
  "Fuckin bun mee united scam t e a",
  "goose skate park entrance fee",
  "🅱️",
  "HUEVOS~!",
  "waiter~!",
  "🍵🏄‍☘️🤑👒🐸",
  "🍥🍥",
  "this covers. the Catfish Belly",
  "the IThcream 🍨",
  "🍛",
  "🥑",
  "🌮",
  "Weeb extravaganza",
  "banh mi 🤸‍",
  "🇻🇳",
  "Le OOH eh le OOH",
  "mango wonderland",
  "🍴",
  "🍙🍣",
  "🍚",
  "Gong xi fa cai🏮🎉",
  "Taco$",
  "I'm in love with the coco",
  "lyft",
  "🍝",
  "💰",
  "Love and friendship",
  "🍅🌊🔥🥖",
  "glug glug bitch",
  "🍮",
  "Dank pot",
  "🎞️",
  "😛😛😛😛😛😛😛😛😛",
  "🌿",
  "🍦",
  "lots and lots of kale and quinoa🍃",
  "🔙",
  "⛩️🚄",
  "bcuz Zelle snatched all my monetary possessions",
  "😩thai😜house🕷️",
  "☻",
  "big fat juicy MEAT",
  "🇯🇵hôtel",
  "bronch",
  "🍼",
  "👹",
  "🍤🍤🍤🍤🍤",
  "heheheheheheheheheheheehehehehe",
  "crunch",
  "moana fan club dues",
  "Reparations",
  "naruto is our god",
  "Recipe book from the creepy food anime",
  "my undying affection :-*",
  "Tiddy",
  "I love you",
  "the last supper",
  "😘",
  "BITCH"
];

var listValues = [
  "$13.00",
  "$5.00",
  "$15.00",
  "$15.00",
  "$14.00",
  "$25.00",
  "$5.00",
  "$15.00",
  "$15.50",
  "$15.50",
  "$53.00",
  "$2.10",
  "$18.50",
  "$5.50",
  "$22.50",
  "$15.00",
  "$13.60",
  "$15.00",
  "$17.00",
  "$14.00",
  "$10.00",
  "$12.00",
  "$20.00",
  "$38.66",
  "$16.75",
  "$54.00",
  "$20.00",
  "$15.00",
  "$22.00",
  "$15.00",
  "$20.00",
  "$28.00",
  "$13.50",
  "$28.00",
  "$2.88",
  "$22.00",
  "$20.00",
  "$64.32",
  "$4.15",
  "$18.50",
  "$7.50",
  "$24.00",
  "$16.50",
  "$27.00",
  "$17.00",
  "$75.00",
  "$5.00",
  "$5.00",
  "$5.00",
  "$12.00",
  "$17.00",
  "$17.00",
  "$1.25",
  "$21.00",
  "$40.50",
  "$18.40",
  "$13.10",
  "$5.00",
  "$7.50",
  "$16.50",
  "$7.50",
  "$34.50",
  "$32.00",
  "$18.00",
  "$16.00",
  "$9.95",
  "$11.00",
  "$21.00",
  "$5.50",
  "$3.00",
  "$16.00",
  "$19.00",
  "$4.00",
  "$3.00",
  "$15.00",
  "$17.50",
  "$16.00",
  "$5.00",
  "$16.00",
  "$17.50",
  "$3.50",
  "$11.75",
  "$15.00",
  "$18.00",
  "$40.00",
  "$10.00",
  "$6.00",
  "$21.00",
  "$6.00",
  "$30.00",
  "$12.00",
  "$8.50",
  "$12.60",
  "$7.00",
  "$4.75",
  "$20.25",
  "$3.00",
  "$3.00",
  "$6.25",
  "$3.00",
  "$15.00",
  "$10.25",
  "$166.00",
  "$7.00",
  "$9.00",
  "$50.00",
  "$10.00",
  "$60.00",
  "$125.00",
  "$200.00",
  "$20.00",
  "$18.00",
  "$27.00",
  "$345.00",
  "$12.00",
  "$14.00",
  "$5.50",
  "$11.00",
  "$7.50",
  "$12.00",
  "$18.00",
  "$10.00",
  "$10.00",
];

console.log(listCaptions.length);
console.log(listValues.length);

var oldList = listCaptions.slice();

for (i = 0; i < listCaptions.length; i++){
  console.log(listCaptions[i]);
  $(".listcaption").append("<p>" + listCaptions[i] + "</p>");
}

for (i = 0; i < listValues.length; i++){
  console.log(listValues[i]);
  $(".listprice").append("<p>" + listValues[i] + "</p>");
}

function sortCaptions(){

  var sortChoice = document.getElementById("chooseSort").value;
  console.log(sortChoice);

  if(sortChoice=="chrono"){
    $('.listcaption').empty();
    for (i = 0; i < oldList.length; i++){
      console.log(oldList[i]);
      $(".listcaption").append("<p>" + oldList[i] + "</p>");
    }
  }else if(sortChoice=="alpha"){
    $('.listcaption').empty();
    listCaptions.sort();
    for (i = 0; i < listCaptions.length; i++){
      console.log(listCaptions[i]);
      $(".listcaption").append("<p>" + listCaptions[i] + "</p>");
    }
  }

}

//for FOOD
var foodArray = ["Pumpkin beer","shallots","mango","Kbeebeeque","ithe cream","Zoupo","banh mi","meat","taco bell","bronch"];
var foodEmojiArray = ["🍜","🍕","🍞","🍵","🐄","🧀","🥖","🍋","🍧","🥗","🥧","🍺","🍖","🍰","🍩","🍗","🍥","🍛","🥑","🌮"];

//for ACTIVITIES
var activitiesArray = ["Rafting and Mini Golfing","holiday inn express","golfland","hôtel","parking","cabin"];
var activityEmojiArray = ["🛒","💅","🚘","🌃","🅱️","🆘","🚗","🇰🇷","💨","🎬","🔙"];

//for RANDOM
var descriptorArray = ["your","histamine-packed","goose skate park","Jeff bezos","malaysia","weeb","moana fan club","Pumpkin beer","Nyc","family","my","glug glug","Dank","lots and lots of","drinks @","bogo", "Various","Five","Past Due","for","Tarzan","she.......is."];
// var expletiveArray = ["fuckin","BITCH","hell","bitch","binch"];
var itemArray = ["Pumpkin beer","Rafting and Mini Golfing","mango","shallots","dinner","Kbeebeeque","holiday inn express","ithe cream","Zoupo","D E B T","golfland","pot","ubi","beep beep", "gasoline and The Toll", "banh mi","meat","hôtel","bronch","taco bell","parking","cabin"];
var paymentArray = ["scam","Allowance....","gluttony","hellhole","experience","entrance fee","extravaganza","dues","supper","wonderland","love and friendship", "bucks", "shes","lyft","monies","cleaning fee"];
var additionArrap = ["and one vote for MARIANNE", "DO impress me much","2.0"];
var onelinerArray = ["crunch","yeet","Reparations", "Cloth","heheheheheheheheheheheehehehehe","Tiddy","gong xi fa cai","I love you","🍵🏄‍☘️🤑👒🐸"];
var emojis = ["🎄","🍭","🍜","🚘","🌃","🍕","🍞","🍵","💦","🐄","🛒","💅","🧀","🥖","🍋","🥂","🍧","🥗","🥧","🅱️","🆘","🍺","🍖","🍰","🍩","🍗","🚗","🇰🇷","💨","🍥","🎬","🍛","🥑","🌮","🔙","🕷️"];

function generate(){
  var mode = document.getElementById("chooseMode").value;
  console.log(mode);


  if(mode=="random"){
    randomGenerate();
  }else if(mode=="food"){
    foodGenerate();
  }else if (mode=="activity"){
    activityGenerate();
  }

}

function randomGenerate(){

  var caption;

  var descriptor = descriptorArray[Math.floor(Math.random()*descriptorArray.length)];
  // var expletive = expletiveArray[Math.floor(Math.random()*expletiveArray.length)];
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

  $(".caption").prepend("<p>" + caption + "</p>");
  $(".value").prepend("<p>" + price + "</p>");
}

function foodGenerate(){

  var descriptor = descriptorArray[Math.floor(Math.random()*descriptorArray.length)];
  // var expletive = expletiveArray[Math.floor(Math.random()*expletiveArray.length)];
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

  $(".caption").prepend("<p>" + caption + "</p>");
  $(".value").prepend("<p>" + price + "</p>");
}

function activityGenerate(){

  var descriptor = descriptorArray[Math.floor(Math.random()*descriptorArray.length)];
  // var expletive = expletiveArray[Math.floor(Math.random()*expletiveArray.length)];
  var activity = activitiesArray[Math.floor(Math.random()*activitiesArray.length)];
  var payment = paymentArray[Math.floor(Math.random()*paymentArray.length)];
  var oneliner = onelinerArray[Math.floor(Math.random()*onelinerArray.length)];

  var num1 = Math.floor(Math.random() * 50);
  var num2 = Math.floor(Math.random() * 100);

  var randomizer = Math.floor(Math.random() * 100);

  if(randomizer<=75){
    var caption = descriptor + " " + activity + " " + payment;
  }else if(randomizer>75){
    var caption = oneliner;
  }

  if(num2>10){
    var price = "$" + num1 + "." + num2;
  }else if(num2<10){
    var price = "$" + num1 + ".0" + num2;
  }

  $(".caption").prepend("<p>" + caption + "</p>");
  $(".value").prepend("<p>" + price + "</p>");
}

function displayList(){
  $("#generateContainer").css("display","none");
  $("#listDiv").css("display","block");

  // $("body").css("background-color","aliceblue");
}

function displayGenerate(){
  $("#generateContainer").css("display","block");
  $("#listDiv").css("display","none");

  // $("body").css("background-color","ghostwhite");
}
