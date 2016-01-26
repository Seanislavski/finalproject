/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });

})(jQuery, window, document);



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
        // var main = $('.searchResults')[0];
        var bookStop = "<div class='books' id='book" + i + "'></div>";
        $('#searchResults').append(bookStop);
        console.log(results.imageLinks.medium);
        if (results.imageLinks.medium === true){

            $('#book' + [i]).html('<img src="' + results.imageLinks.medium + '"></img>');
        } else{
        $('#book' + [i]).html('<img src="' + results.imageLinks.thumbnail + '"></img>');
        }
        // $('#book' + [i]).html('<h3>' + results.title + '</h3><br>by ' + results.authors + '<span class="bookContent"><p>Description: ' + results.description + '</p><img src="' + results.imageLinks.thumbnail + '"></img>&nbsp;</span><span class="addToLibrary"><button id="btn' + i + '">Add To Library</button></span>');
   } //end for statement
}  //query API and put in #main

//
var newBook = $('#newBook'); //Search button

// var searchForm = $('search'); //Search form

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

// var addToLibrary = $('.addToLibrary');
// var addToButton = $('Hello');

// var addIfClicked = ('#btn' + numBooks);
// addIfClicked.click(function(event){
//     event.preventDefault();
// });
