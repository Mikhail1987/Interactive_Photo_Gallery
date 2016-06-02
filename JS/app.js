/*
1) Find a jQuery plugin for creating a photo gallery or write your own script.

2) The gallery must include the ability to click on photos and view them in a lightbox 
(see the photo_lightbox.png file for the design).
3) Add text captions to the images when viewed in the lightbox.
-See the photo_lightbox.png file for the design.
4) Add back and forward buttons when the lightbox is visible to switch between photos.
5) Implement the search box at the top of the page that filters photos based on the captions.
6) The photos should filter in real-time as you type. - keypress & keyup
7) This could be a jQuery plugin that you find on the web, or code that you write yourself.*/


/*
1) input get
2) SHow and hide images in real time while typing values 
	-KeyUp - start condition statment
	-KeyPress -if input != 0 hide all img (or div with opacity)and show result 
	
3)Condition statment 
	-If value is meet request show result
	-if not show masseg 
	-If empty return all img

*/

$("#liveSearch").keyup(function() {
    var SearchResult = $(this).val();
    console.log(SearchResult);
    $("#wrapper img").each(function() {
    console.log($(this).attr("alt").SearchResult);
        var SearchAttr = $(this).attr("alt");
        if(SearchAttr.toLowerCase().search(SearchResult.toLowerCase()) > -1) {
            $(this).fadeOut();
            $(this).fadeIn(300);
        } else {
            $(this).fadeOut();
        }
    });
});


