// (function ($, window, document, undefined) {

//   'use strict';

//   $(function () {
//     // FastShell
//   });

// })(jQuery, window, document);



// $(document.ready(function(){

// });

var mainArea = $('.main');
// var defaultContent = mainArea.html(); //only stores HTML not JS so books will not flip after search if "home" clicked on

$(document).ready(function(){
                 $('#home').click(function(){
                     // $('.main').html(defaultContent);
                    // defaultContent = mainArea.html();
                     $('.main').load('main.html'); 
                 });
});
$(document).ready(function(){
                 $('#library').click(function(){
                    // defaultContent = mainArea.html();
                     $('.main').load('library.html');
                 });
});
$(document).ready(function(){
                 // defaultContent = mainArea.html();
                 $('#checkedout').click(function(){
                     $('.main').load('checkedout.html');
                 });
});
$(document).ready(function(){
                // defaultContent = mainArea.html();
                 $('#faq').click(function(){
                 $('.main').load('faq.html');
                 });
});

var libraryArray = []; //array to store info for search on myLibrary

var readList = $('#listOfBooks');

function notMe(){
    // .remove();    
}

function addToList(){
    var bookToList = $(this).siblings('.title2');
    var isbnToList = $(this).siblings('.hiddenIsbn');
    // var myLib = $('#myLibrary');
    
    // if()
    readList.append('<li><a onclick="notMe()" class="notThis">x</a> &nbsp;<span class="listedBook">' + bookToList.html() + '</span><br>'); //add to List
    libraryArray.push(isbnToList.html());
    var evOth = $('#listOfBooks:nth-child(odd)'); //every other listed book
    evOth.css('background', '#444444'); //now has a grey bg
}

var x = $('.notThis');
// x.


function flipIt(){
    $('.flip').click(function(){
        $(this).find('.card').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return false;
    });
    
}

var numBooks;
var books = $('.books');

function handleResponse(response) {
    $('#searchResults').html(''); //clear area

    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        var results = item.volumeInfo;
        var next = (i + 1);
        var bookStop = "<div class='flip'><div class='card'><div class='books face front' id='book" + i + "'></div><div class='books back' id='bookB" + i + "'></div></div></div>";
        if (results.industryIdentifiers){
            var hiddenIsbn = results.industryIdentifiers[0]['identifier'];
        } else{
            var hiddenIsbn;
        }
        $('#searchResults').append(bookStop);

            if(results.imageLinks){
                $('#book' + i).html('<img src="' + results.imageLinks.thumbnail + '"></img>');
            }
        $('#bookB' + i).html("<span class='title2'>" + results.title + '</span><span class="by"><br>By ' + results.authors + "</span><span class='hiddenIsbn'>" + hiddenIsbn + "</span><span class='add'>Add</span>");

   } //end for statement

flipIt();//call the flip in the loop!
var addButton = $('.add'); //Add button on book
addButton.click(addToList); // call addToList function when clicked
}  //query API and put in #main

//
var newBook = $('#newBook'); //Search button
var queryId;
newBook.click(function(event){
    event.preventDefault();
    queryId = searchInput.value;
    $.getJSON('https://www.googleapis.com/books/v1/volumes', {
                q: queryId,
                maxResults: 40}, handleResponse);

});

function libraryBooks(response){
    var myLibrary = $('#myLibrary');
    if (response.items){
        var item = response.items[0];    
    } else{
        var item;
    }
    
    var results = item.volumeInfo;
    myLibrary.append('<div class="book"><div class="bookCover"><img src="' + results.imageLinks.thumbnail + '"></img></div><div class="contents">' + results.title + '<br> By: ' + results.authors + '<br>' + results.description + '</div></div>' );
}



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
*///old way of calling API



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

