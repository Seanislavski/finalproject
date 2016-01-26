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
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        var results = item.volumeInfo; 
        // var main = $('.searchResults')[0];
        var bookStop = "<div class='books' id='book" + i + "'></div>";
        $('#searchResults').append(bookStop);
        $('#book' + [i]).html('<h3>' + results.title + '</h3><br>by ' + results.authors + '<span class="bookContent"><p>Description: ' + results.description + '</p><img src="' + results.imageLinks.thumbnail + '"></img>&nbsp;</span><span class="addToLibrary"><button id="btn' + i + '">Add To Library</button></span>');
   } //end for statement
   numBooks = books.length;
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

    // var putScript = $('#putScript');

    $('#putScript').html(scrInject);

    // console.log(queryId);
    // console.log(scrInject);

}); //button press




// var addToLibrary = $('.addToLibrary');
// var addToButton = $('Hello');

var addIfClicked = ('#btn' + numBooks);
addIfClicked.click(function(event){
    event.preventDefault();

});
