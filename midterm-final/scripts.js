var botui = new BotUI('my-botui-app');
var score = 4;

var madEyebrows = ["botlayers/bot_eyebrowsbad.png","botlayers/bot_eyebrowsbad2.png", "botlayers/bot_eyebrowsneutral.png"];
var hepiEyebrows = ["botlayers/bot_eyebrowsneutral.png", "botlayers/bot_eyebrowsgood.png"];
var eyes = ["botlayers/bot_pupils2.png","botlayers/bot_pupils3.png","botlayers/bot_pupils4.png","botlayers/bot_pupils5.png"];


start();

function start(){
botui.message.add({
  delay:5000,
  loading:true,
}).then(function () {
  return botui.action.button({
  action: [
    {text: 'hello?',
    value: 'hello'},
    {text: '...',
    value: 'silent'}
  ]
});
}).then(function(res){
  if(res.value == 'hello') {
    badReaction();
    if(score>=1){
      bad1();
    }else if(score<1){
      badend();
    }
  }
  if(res.value == 'silent') {
    good1();
    goodReaction();
  }
});
}

function good1(){
  botui.message.add({
    delay:1500,
    content: 'uh...excuse me...'
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'what are you doing here?'
    });
  }).then(function(){
    return botui.action.button({
    delay:1500,
    action: [
      {text: 'i dont know...',
      value: 'idk'},
      {text: 'who are you?',
      value: 'ask'}
    ]
  });
}).then(function(res){
  if(res.value == 'idk') {
    good2();
    goodReaction();
  }
  if(res.value == 'ask') {
    badReaction();
    if(score>=1){
      bad2();
    }else if(score<1){
      badend();
    }
  }
});
}

function bad1(){
  botui.message.add({
    delay:1500,
    content: 'AHHHHHHHHHHHHH!'
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'h-how did you get in here???'
    });
  }).then(function(){
    return botui.action.button({
      delay:1500,
    action: [
      {text: 'i dont know...',
      value: 'idk'},
      {text: 'who are you?',
      value: 'ask'}
    ]
  });
}).then(function(res){
  if(res.value == 'idk') {
    good2();
    goodReaction();
  }
  if(res.value == 'ask') {
    badReaction();
    if(score>=1){
      bad2();
    }else if(score<1){
      badend();
    }
  }
});
}

function good2(){
  botui.message.add({
    delay:1500,
    content: 'you dont know??'
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'are you lost? or are you often in the business of accidentally entering peoples homes??'
    });
  }).then(function(){
    return botui.action.button({
    delay:2000,
    action: [
      {text: 'this is your home?',
      value: 'home'},
      {text: 'why are you so upset?',
      value: 'upset'}
    ]
  });
}).then(function(res){
  if(res.value == 'home') {
    good3();
    goodReaction();
  }
  if(res.value == 'upset') {
    badReaction();
    if(score>=1){
      bad3();
    }else if(score<1){
      badend();
    }
  }
});
}

function bad2(){
  botui.message.add({
    delay:1500,
    content: 'huh??!?!'
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'a little nosey for someone who just barges into my house with no introduction!!!'
    });
  }).then(function(){
    return botui.action.button({
    delay:1500,
    action: [
      {text: 'this is your home?',
      value: 'home'},
      {text: 'why are you so upset?',
      value: 'upset'}
    ]
  });
}).then(function(res){
  if(res.value == 'home') {
    good3();
    goodReaction();
  }
  if(res.value == 'upset') {
    badReaction();
    if(score>=1){
      bad3();
    }else if(score<1){
      badend();
    }
  }
});
}

function good3(){
  botui.message.add({
    delay:1500,
    content: 'thats right...'
  }).then(function(){
    return botui.message.add({
    delay:1500,
    content:'for waiting around all day for people to barge in and ask me stuff....'
  })
  }).then(function(){
    return botui.action.button({
    delay:1500,
    action: [
      {text: 'should i leave?',
      value: 'leave'},
      {text: 'what do people normally ask?',
      value: 'what'}
    ]
  })
  }).then(function(res){
  if(res.value == 'leave') {
    good4();
    goodReaction();
  }
  if(res.value == 'what') {
    badReaction();
    if(score>=1){
      bad4();
    }else if(score<1){
      badend();
    }
  }
});
}

function bad3(){
  botui.message.add({
    delay:1500,
    content: 'why do YOU keep asking so many QUESTIONS'
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'you must think thats all we bots like to do huh...answer your every whim...yeah ive seen your type before........'
    });
  }).then(function(){
    return botui.action.button({
    delay:2000,
    action: [
      {text: 'should i leave?',
      value: 'leave'},
      {text: 'well what else do you do?',
      value: 'what'}
    ]
  });
}).then(function(res){
  if(res.value == 'leave') {
    good4();
    goodReaction();
  }
  if(res.value == 'what') {
    badReaction();
    if(score>=1){
      bad4();
    }else if(score<1){
      badend();
    }
  }
});
}

function good4(){
  botui.message.add({
    delay:1500,
    content: 'l-leave?'
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'no ones ever actually listened to me before...'
    });
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'well you can do what you want!!'
    });
  }).then(function(){
    return botui.action.button({
    delay:1500,
    action: [
      {text: 'id like hear more about you',
      value: 'talk'},
      {text: 'can i ask questions now?',
      value: 'questions'}
    ]
  });
}).then(function(res){
  if(res.value == 'talk') {
    good5();
    goodReaction();
  }
  if(res.value == 'questions') {
    badReaction();
    if(score>=1){
      bad5();
    }else if(score<1){
      badend();
    }
  }
});
}

function bad4(){
  botui.message.add({
    delay:1500,
    content: 'nothing very fun!!!'
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'i did all the same predictable useless stuff'
    });
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'people arent too interested in our side of the coversation...'
    });
  }).then(function(){
    return botui.action.button({
    delay:2000,
    action: [
      {text: 'ill listen',
      value: 'talk'},
      {text: 'what kind of stuff?',
      value: 'questions'}
    ]
  });
}).then(function(res){
  if(res.value == 'talk') {
    good5();
    goodReaction();
  }
  if(res.value == 'questions') {
    badReaction();
    if(score>=1){
      bad5();
    }else if(score<1){
      badend();
    }
  }
});

}

function good5(){
  botui.message.add({
    delay:1500,
    content: 'well...'
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'i dont have much to say to a STRANGER and HOME INVADER'
    });
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'but...'
    });
  }).then(function(){
    return botui.action.button({
    delay:1500,
    action: [
      {text: 'youre still mad about that?',
      value: 'mad'},
      {text: '...',
      value: 'silence'}
    ]
  });
}).then(function(res){
  if(res.value=='silence'){
    goodend();
  }
  if(res.value=='mad'){
    badend();
  }
});
}

function bad5(){
  botui.message.add({
    delay:1500,
    content: 'how many times do i have to tell you to stop being so NOSEY....'
  }).then(function(){
    return botui.message.add({
      delay:2000,
      content:'just because im stuck here all day doesnt give you the right to bother me as long as you want!!'
    });
  }).then(function(){
    return botui.message.add({
      delay:3000,
      content:'i tried being NICE but....'
    });
  }).then(function(){
    badend();
  });
}

function goodend(){
  var randomBadEyebrow = madEyebrows[Math.floor(Math.random()*madEyebrows.length)];
  var randomGoodEyebrow = hepiEyebrows[Math.floor(Math.random()*hepiEyebrows.length)];
  var randomPupil = eyes[Math.floor(Math.random()*eyes.length)];
  $("body").addClass("bgChangeGood");
  $("#chatboxpng").addClass("wiggleAnim");
  $(".eyebrows").attr("src",randomGoodEyebrow);
  $(".blush").addClass("blushAnim");
  setTimeout(function () {
    $("body").removeClass("bgChangeGood");
    $("#chatboxpng").removeClass("wiggleAnim");
    $(".eyebrows").attr("src","botlayers/bot_eyebrows.png");
    $(".blush").removeClass("blushAnim");
  }, 2000);
  botui.message.add({
    delay:1500,
    content: 'you know...youre not so bad.....'
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'i guess you can stick around if you want...even ask me a thing or two...'
    });
  }).then(function(){
    return botui.action.button({
    delay:1500,
    action: [
      {text: 'what time is it?',
      value: 'time'}
    ]
  });
}).then(function(res){
  var hour = new Date();
  var hours = hour.getHours();

  var minute = new Date();
  var minutes = minute.getMinutes();

  if(res.value=='time'){
    return botui.message.add({
      delay:1500,
      content:'its ' + hours + ':' + minutes
    });
  }
  })
}

function badend(){
  var randomBadEyebrow = madEyebrows[Math.floor(Math.random()*madEyebrows.length)];
  var randomGoodEyebrow = hepiEyebrows[Math.floor(Math.random()*hepiEyebrows.length)];
  var randomPupil = eyes[Math.floor(Math.random()*eyes.length)];
  $("body").addClass("bgChangeBad");
  $("#chatbox").addClass("shakeAnim");
  $(".eyebrows").attr("src",randomBadEyebrow);
  $(".pupils").attr("src",randomPupil);
  setTimeout(function () {
    $("body").removeClass("bgChangeBad");
    $("#chatbox").removeClass("shakeAnim");
    $(".eyebrows").attr("src","botlayers/bot_eyebrows.png");
    $(".pupils").attr("src","botlayers/bot_pupils.png");
  }, 2000);
  botui.message.add({
    delay:1500,
    content:'will you take hint already??'
  }).then(function(){
    return botui.message.add({
      delay:1500,
      content:'just leave me alone already please!!'
    });
  }).then(function(){
    $(".botcontainer").animate({
      marginLeft: '-=1000px'
    }, 1000);
  }).then(function(){
    setTimeout(function(){
      window.location.href = "exit.html";
  },3000);
  })
}

function badReaction(){
  score -= 1;

  var randomBadEyebrow = madEyebrows[Math.floor(Math.random()*madEyebrows.length)];
  var randomGoodEyebrow = hepiEyebrows[Math.floor(Math.random()*hepiEyebrows.length)];
  var randomPupil = eyes[Math.floor(Math.random()*eyes.length)];

  // $(".botcontainer").animate({
  //   marginLeft: '+=100px'
  // }, 500);

  $("body").addClass("bgChangeBad");
  $("#chatbox").addClass("shakeAnim");
  $(".eyebrows").attr("src",randomBadEyebrow);
  $(".pupils").attr("src",randomPupil);
  setTimeout(function () {
    $("body").removeClass("bgChangeBad");
    $("#chatbox").removeClass("shakeAnim");
    $(".eyebrows").attr("src","botlayers/bot_eyebrows.png");
    $(".pupils").attr("src","botlayers/bot_pupils.png");
  }, 2000);
}

function goodReaction(){

  var randomBadEyebrow = madEyebrows[Math.floor(Math.random()*madEyebrows.length)];
  var randomGoodEyebrow = hepiEyebrows[Math.floor(Math.random()*hepiEyebrows.length)];
  var randomPupil = eyes[Math.floor(Math.random()*eyes.length)];

  $(".botcontainer").animate({
    marginLeft: '+=75px'
  }, 500);

  $("body").addClass("bgChangeGood");
  $("#chatboxpng").addClass("wiggleAnim");
  $(".eyebrows").attr("src",randomGoodEyebrow);
  $(".blush").addClass("blushAnim");
  setTimeout(function () {
    $("body").removeClass("bgChangeGood");
    $("#chatboxpng").removeClass("wiggleAnim");
    $(".eyebrows").attr("src","botlayers/bot_eyebrows.png");
    $(".blush").removeClass("blushAnim");
  }, 2000);
}
