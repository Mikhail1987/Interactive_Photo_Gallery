/*Overlay*/

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img class="full_size">');
var $caption = $('<p></p>');
var $exit = $('<img id="close" src="img/close-round.png">');
var $buttonLeft = $('<img id="left" src="img/arrow-backward.png">');
var $buttonRight = $('<img id="right" src="img/arrow-forward.png">');

//an  image to overlay
$overlay.append($exit);
$overlay.append($image);

//Add an overlay
$("body").append($overlay);


  //A caption
$overlay.append($caption);
$overlay.append($buttonLeft);
$overlay.append($buttonRight);


//Capture the click event on a link to an image
 $("#wrapper a").click(function(event){
   event.preventDefault()
   //Hide fixed header 
   $("#header").css( "display", "none" );
   
  var imageLocation = $(this).attr("href");
  currentImg = $(this);
  currentImg.addClass("selected");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  //Show the overlay
   $overlay.fadeIn("show");

  //Get child's  alt attribute and set caption
    var captionText = $(this).children("img").attr("alt");
    //add text to overlay
    $caption.text(captionText);

     //Creating buttons
    $buttonLeft.click(function() {
        newImg = $("#wrapper .selected").prev("a");
        newImgLocation = newImg.attr("href");
        newImg.next().removeClass("selected");  //remove class
        newImg.addClass("selected");            //add clas
        $image.attr("src", newImgLocation);
    });

    $buttonRight.click(function() {
        newImg = $("#wrapper .selected").next("a");
        newImgLocation = newImg.attr("href");
        newImg.prev().removeClass("selected");  //remove class
        newImg.addClass("selected");            //add class
        $image.attr("src", newImgLocation);
    });


 });


//When overlay is cllicked
$exit.click(function() {
    //Hide the overlay
      $("#header").css( "display", "true" );

      $overlay.fadeOut();
});

/*$overlay.click(function(){
   // Hide the overlay
      $("#header").css( "display", "true" );

      $overlay.fadeOut();

});*/