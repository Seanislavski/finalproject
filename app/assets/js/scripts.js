/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
// (function ($, window, document, undefined) {

//   'use strict';

//   $(function () {
//     // FastShell
//   });

// })(jQuery, window, document);



// $(document.ready(function(){

// });

var mainArea = $('.main');
var defaultContent = mainArea.html();

$(document).ready(function(){
                 $('#home').click(function(){
                     $('.main').html(defaultContent);
                 });
});
$(document).ready(function(){
                 $('#library').click(function(){
                    defaultContent = mainArea.html();
                     $('.main').load('library.html');
                 });
});
$(document).ready(function(){
                 defaultContent = mainArea.html();
                 $('#checkedout').click(function(){
                     $('.main').load('checkedout.html');
                 });
});
$(document).ready(function(){
                defaultContent = mainArea.html();
                 $('#faq').click(function(){
                 $('.main').load('faq.html');
                 });
});

var numBooks;
var books = $('.books');
function handleResponse(response) {
    $('#searchResults').html(''); //clear area

    // for(var x = 0; x < response.items.length; x++) {
    //     var bookStop = "<div class='books' id='book" + x + "'></div>";
    //     $('#searchResults').append(bookStop);
    // };
    // window.numBooks = response.items.length;

    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        var results = item.volumeInfo;
        var next = (i + 1);
        var bookStop = "<div class='flip'><div class='card'><div class='face front' id='book" + i + "'></div><div class='face back' id='bookB" + i + "'></div></div></div>";
        $('#searchResults').append(bookStop);
        // console.log(results.imageLinks.medium);
        if (results.imageLinks.medium === true){

            $('#book' + i).html('<img src="' + results.imageLinks.medium + '"></img>');
            $('#bookB' + i).html('Hello');
        } else{
        $('#book' + i).html('<img src="' + results.imageLinks.thumbnail + '"></img>');
        $('#bookB' + i).html(results.title + '<br>By ' + results.authors);
        }
        // $('#book' + [i]).html('<h3>' + results.title + '</h3><br>by ' + results.authors + '<span class="bookContent"><p>Description: ' + results.description + '</p><img src="' + results.imageLinks.thumbnail + '"></img>&nbsp;</span><span class="addToLibrary"><button id="btn' + i + '">Add To Library</button></span>');
   } //end for statement
}  //query API and put in #main

//
var newBook = $('#newBook'); //Search button

// var searchForm = $('search'); //Search form

newBook.click(function(event){
    event.preventDefault();
    var queryId = searchInput.value;
    $.getJSON('https://www.googleapis.com/books/v1/volumes', {
                q: queryId,
                maxResults: 40}, handleResponse);

});
var flipIt = function(){
    $(this).find('.card').addClass('flipped').mouseleave(function(){
        $(this).removeClass('flipped');
    }
)};
$('.flip').click(
    console.log('yep'));
    // flipIt();

    // return false;

/*
newBook.click(function(event){
    event.preventDefault();
    // var searchInput = $('#searchInput');
    var queryId = searchInput.value; //text field
    // console.log(typeof queryId);
    var results = ('"https://www.googleapis.com/books/v1/volumes?q=' + queryId + '&callback=handleResponse"');
    var scrInject = ('<script src=' + results + '></script>');
    $('#putScript').html(scrInject);
    // console.log(queryId);
    // console.log(scrInject);
}); //button press
*/



// var addToLibrary = $('.addToLibrary');
// var addToButton = $('Hello');

// var addIfClicked = ('#btn' + numBooks);
// addIfClicked.click(function(event){
//     event.preventDefault();
// });
/*
    Vertigo.js
    Simple vertical and horizontal parallax with no jQuery or Stellar.js
    Ed Aponte 11.04.2015

*/


var parallaxY = document.getElementsByClassName("parallaxY"); // get an array of all elements with class parallaxY
var speedY = []; // declare a speedY array that will be used to store data-speeds for each class parallaxY

var parallaxX = document.getElementsByClassName("parallaxX"); // get an array of all elements with class parallaxX
var speedX = []; // declare a speedX array that will be used to store data-speeds for each class parallaxX


window.onscroll = function() { // window.onscroll will perform the below code whenever you scroll

    // Loop thru all classes parallaxY, get their corresponding data-speed value and apply the vertical offset to the background
    for ( var y = 0 ; y < parallaxY.length ; y++) {

        speedY[y] = parallaxY[y].getAttribute("data-speed");
        var yOffset = window.pageYOffset;
        parallaxY[y].style.backgroundPosition = "0px " + (yOffset / speedY[y]) + "px";

    }

    // Loop thru all classes parallaxX, get their corresponding data-speed value and apply the horizontal offset to the background
    for ( var x = 0 ; x < parallaxX.length ; x++) {

        speedX[x] = parallaxX[x].getAttribute("data-speed");
        var xOffset = window.pageXOffset;
        parallaxX[x].style.backgroundPosition = (xOffset / speedX[x]) + "px" + " 0px";

    }

};

