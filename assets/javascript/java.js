$("#about").on('click', function(){
    $("#appendArea").empty();
    $("#appendArea").append("<p>I was born and raised in Kaysville Utah. I grew up in a family of 4 kids, two boys and two girls. We grew up going camping a lot and enjoying the outdoors. Growing up I remember always go fourwheeling and camping in the mountains for the majority of our family vacations.</p><br><br>" + 
    "<p>I got married in July of 2014 and currently have two little boys that I love spending time with. We love to go fishing together. Our first boy is 2 years old and the second was just born. Some of my hobbies are playing soccer, fishing, riding motorcycles, and restoring and fixing classic cars & motorcycles.</p><br><br>" +
    "<p>Currently I work at Fidelty Invesmtents. I have been working there for the past 4 years and have enjoyed it but am looking to pursue a career in software engineering and web design.</p><br>" 
    )
});

$("#projects").on('click', function(){
    $("#appendArea").empty();
    $("#appendArea").append("<div class='card-group'>" +
    "<div class='card text-center' class='card'>" +
      "<img class='card-img-top' src='...' alt='Card image cap'>" +
      "<div class='card-body'>" +
        "<h5 class='card-title'>Card title</h5>" +
        "<p class='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>" +
      "</div>" +
      "<div class='card-footer'>" +
        "<small class='text-muted'>Last updated 3 mins ago</small>" +
      "</div>" +
    "</div>" +
    "<div class='card text-center' class='card'>" +
      "<img class='card-img-top' src='...' alt='Card image cap'>" +
      "<div class='card-body'>" +
        "<h5 class='card-title'>Card title</h5>" +
        "<p class='card-text'>This card has supporting text below as a natural lead-in to additional content.</p>" +
      "</div>" +
      "<div class='card-footer'>" +
        "<small class='text-muted'>Last updated 3 mins ago</small>" +
      "</div>" +
    "</div>" +
    "<div class='card text-center' class='card'>" +
      "<img class='card-img-top' src='...' alt='Card image cap'>" +
      "<div class='card-body'>" +
        "<h5 class='card-title'>Card title</h5>" +
        "<p class='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>" +
      "</div>" +
      "<div class='card-footer'>" +
        "<small class='text-muted'>Last updated 3 mins ago</small>" +
      "</div>" +
    "</div>" +
  "</div>" +
  "<br>" +
  "<hr>" +
  "<br>" +
  "<div class='card-group'>" +
        "<div class='card text-center' class='card'>" +
          "<img class='card-img-top' src='...' alt='Card image cap'>" +
          "<div class='card-body'>" +
            "<h5 class='card-title'>Card title</h5>" +
            "<p class='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>" +
          "</div>" +
          "<div class='card-footer'>" +
            "<small class='text-muted'>Last updated 3 mins ago</small>" +
          "</div>" +
        "</div>" +
        "<div class='card text-center' class='card'>" +
          "<img class='card-img-top' src='...' alt='Card image cap'>" +
          "<div class='card-body'>" +
            "<h5 class='card-title'>Card title</h5>" +
            "<p class='card-text'>This card has supporting text below as a natural lead-in to additional content.</p>" +
          "</div>" +
          "<div class='card-footer'>" +
            "<small class='text-muted'>Last updated 3 mins ago</small>" +
          "</div>" +
        "</div>" +
        "<div class='card text-center' class='card'>" +
          "<img class='card-img-top' src='...' alt='Card image cap'>" +
          "<div class='card-body'>" +
            "<h5 class='card-title'>Card title</h5>" +
            "<p class='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>" +
          "</div>" +
          "<div class='card-footer'>" +
            "<small class='text-muted'>Last updated 3 mins ago</small>" +
          "</div>" +
        "</div>" +
      "</div>"
      )
});

$("#contact").on('click', function(){
    $("#appendArea").empty();
    $("#appendArea").append(
    "<section class='container'>" +
    "<h1 class='aboutme'>" +
        "Contact" +
    "</h1>" +
"<div>" +
    "<form action='_blank'>" +
        "Name<br>" +
        "<input type='text'>" +
        "<br><br>" +
        "Email<br>" +
        "<input type='text'>" +
        "<br><br>" +
        "Message<br>" +
        "<textarea id='textbox'></textarea>" +
        "<br><br>" +
        "<input id='submitbutton' type='submit' value='Submit'>" +
    "</form>" +
"</div>" +
"</section>"
    )
});
