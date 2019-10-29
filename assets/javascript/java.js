$(document).ready(function () {
  $("#appendArea").empty();
  $("#appendArea").append(
    "<h2 class='title'>About Me</h2>" +
    "<br>" +
    "<p>I was born and raised in Kaysville Utah. I grew up in a family of 4 kids, two boys and two girls. We grew up going camping a lot and enjoying the outdoors. Growing up I remember always go fourwheeling and camping in the mountains for the majority of our family vacations.</p><br>" +
    "<p>I've been married for 5 years now and currently have two little boys that I love spending time with. Some of my hobbies are playing soccer, fishing, riding motorcycles, and restoring and fixing classic cars & motorcycles.</p><br>" +
    "<p>Currently I work at Fidelty Invesmtents. I have been working there for the past 4 years and have enjoyed it but am looking to pursue a career in software development and web design.</p><br>"
  )
});

$("#about").on('click', function () {
  $("#appendArea").empty();
  $("#appendArea").append(
    "<h2 class='title'>About Me</h2>" +
    "<br>" +
    "<p>I was born and raised in Kaysville Utah. I grew up in a family of 4 kids, two boys and two girls. We grew up going camping a lot and enjoying the outdoors. Growing up I remember always go fourwheeling and camping in the mountains for the majority of our family vacations.</p><br><br>" +
    "<p>I've been married for 5 years now and currently have two little boys that I love spending time with. Some of my hobbies are playing soccer, fishing, riding motorcycles, and restoring and fixing classic cars & motorcycles.</p><br><br>" +
    "<p>Currently I work at Fidelty Invesmtents. I have been working there for the past 4 years and have enjoyed it but am looking to pursue a career in software development and web design.</p><br>"
  )
});

$("#projects").on('click', function () {
  $("#appendArea").empty();
  $("#appendArea").append(
    "<h2 class='title'>My Projects</h2>" +
    
    "<br>" +
    "<div class='card-deck'>" +
    "<div class='card text-center' class='card'>" +
    "<a href='https://mattwhittle10.github.io/ProjectTest/' target='_blank'><img class='card-img-top' src='./assets/images/trailProject.jpg' alt='Card image cap'></a>" +
    "<div class='card-body'>" +
    "<h5 class='card-title'>National Parks Project</h5>" +
    "</div>" +

    "</div>" +
    "<div class='card text-center' class='card'>" +
    "<a href='https://mattwhittle10.github.io/word-guess-game/' target='_blank'><img class='card-img-top' src='./assets/images/hangman.jpg' alt='Card image cap'></a>" +
    "<div class='card-body'>" +
    "<h5 class='card-title'>Hangman Game</h5>" +
    "</div>" +

    "</div>" +
    "<div class='card text-center' class='card'>" +
    "<a href='https://mattwhittle10.github.io/unit4gamefinal/' target='_blank'><img class='card-img-top' src='./assets/images/crystalGame.jpg' alt='Card image cap'></a>" +
    "<div class='card-body'>" +
    "<h5 class='card-title'>Crystal Counter</h5>" +
    "</div>" +

    "</div>" +
    "</div>" +
    "<br>" +
    "<hr class='line'>" +
    "<br>" +
    "<div class='card-deck'>" +
    "<div class='card text-center' class='card'>" +
    "<a href='https://mattwhittle10.github.io/train-scheduler/' target='_blank'><img class='card-img-top' src='./assets/images/trainScheduler.jpg' alt='Card image cap'></a>" +
    "<div class='card-body'>" +
    "<h5 class='card-title'>Train Scheduler</h5>" +
    "</div>" +

    "</div>" +
    "<div class='card text-center' class='card'>" +
    "<a href='https://mattwhittle10.github.io/triviagame/' target='_blank'><img class='card-img-top' src='./assets/images/triviaGame.jpg' alt='Card image cap'></a>" +
    "<div class='card-body'>" +
    "<h5 class='card-title'>Trivia Game</h5>" +
    "</div>" +

    "</div>" +
    "<div class='card text-center' class='card'>" +
    "<a href='http://hoarder-helper.herokuapp.com/' target='_blank'><img class='card-img-top' src='./assets/images/hoarderHelper.jpg' alt='Card image cap'></a>" +
    "<div class='card-body'>" +
    "<h5 class='card-title'>Hoarder Helper</h5>" +
    "</div>" +

    "</div>" +
    "</div>" +
    "<br>" +
    "<hr class='line'>" +
    "<br>" +
    "<div class='card-deck'>" +
    "<div class='card text-center' class='card'>" +
    "<a href='https://limitless-sands-50340.herokuapp.com/burgers' target='_blank'><img class='card-img-top imageAdjust' src='./assets/images/burgerTown.jpg' alt='Card image cap'></a>" +
    "<div class='card-body'>" +
    "<h5 class='card-title titleAdjust'>Burger Town</h5>" +
    "</div>" +

    "</div>" +
    "<div class='card text-center' class='card'>" +
    "<a href='https://drive.google.com/file/d/1w7lkGPJC6fYZFkJ4q1g8L2FJ5scBen_9/view' target='_blank'><img class='card-img-top imageAdjust' src='./assets/images/liri.jpg' alt='Card image cap'></a>" +
    "<div class='card-body'>" +
    "<h5 class='card-title titleAdjust'>Liri</h5>" +
    "</div>" +

    "</div>" +
    "<div class='card text-center' class='card'>" +
    "<a href='https://drive.google.com/file/d/177uRXzu3FiKxoLI5q5QaCuHEFNdIUQnF/view' target='_blank'><img class='card-img-top' src='./assets/images/bamazon.jpg' alt='Card image cap'></a>" +
    "<div class='card-body'>" +
    "<h5 class='card-title'>Bamazon</h5>" +
    "</div>" +

    "</div>" +
    "</div>" +
    "<br>" +
    "<hr class='line'>" +

    "<br>" +
    "<div class='card-deck'>" +
    "<div class='card text-center' class='card'>" +
    "<a href='https://floating-hamlet-22025.herokuapp.com/' target='_blank'><img class='card-img-top imageAdjust' src='./assets/images/looneyTunes.jpg' alt='Card image cap'></a>" +
    "<div class='card-body'>" +
    "<h5 class='card-title titleAdjust'>Looney Tunes Memory Game</h5>" +
    "</div>" +

    "</div>" +
    "<div class='card text-center' class='card'>" +
    "<a href='https://floating-lowlands-75824.herokuapp.com/' target='_blank'><img class='card-img-top imageAdjust' src='./assets/images/bookCave.png' alt='Card image cap'></a>" +
    "<div class='card-body'>" +
    "<h5 class='card-title titleAdjust'>The Book Cave</h5>" +
    "</div>" +

    "</div>" +
    "<div class='card text-center' class='card'>" +
    "<a href='https://trader-trainer.herokuapp.com/' target='_blank'><img class='card-img-top' src='./assets/images/traderTrainer.jpg' alt='Card image cap'></a>" +
    "<div class='card-body'>" +
    "<h5 class='card-title'>Trader Trainer</h5>" +
    "</div>" +

    "</div>" +
    "</div>" +
    "<br>" +
    "<hr class='line'>" 

  )
});

$("#contactLink").on('click', function () {
  $("#appendArea").empty();
  $("#appendArea").append(
    "<h2 class='title'>Contact Me</h2>" +
    "<br>" +
    "<section class='container'>" +
    "<div>" +
    "<form action='_blank'>" +
    "Name<br>" +
    "<input class='container' type='text'>" +
    "<br><br>" +
    "Email<br>" +
    "<input class='container' type='text'>" +
    "<br><br>" +
    "Message<br>" +
    "<textarea class='container' id='textbox'></textarea>" +
    "<br><br>" +
    "<input id='submitbutton' type='submit' value='Submit'>" +
    "</form>" +
    "</div>" +
    "</section>"
  )
});
