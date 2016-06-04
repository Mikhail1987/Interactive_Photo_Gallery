/*Overlay*/

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img class="full_size">');
var $caption = $('<p></p>');

//an  image to overlay
$overlay.append($image);

//2. Add an overlay
$("body").append($overlay);


  //2.2 A caption
  $overlay.append($caption);

//1. Capture the click event on a link to an image
 $("#wrapper a").click(function(event){
   event.preventDefault()
   $(".full_size").css("width","60%");
   //Hide fixed header 

   $("#header").css( "display", "none" )


  var imageLocation = $(this).attr("href");

  //1.2 Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  //1.1 Show the overlay
   $overlay.show();

  //1.3 Get child's  alt attribute and set caption
    var captionText = $(this).children("img").attr("alt");
    //add text to overlay
    $caption.text(captionText);
 });


//3 When overlay is cllicked
$overlay.click(function(){
   //3.1 Hide the overlay
  $("#header").css( "display", "true" );
  $overlay.hide();

});