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

function handleResponse(response) {
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        var results = item.volumeInfo; 
        // in production code, item.text should have the HTML entities escaped.
        // var main = document.getElementsByClassName('searchResults')[0]
        var main = $('.searchResults')[0];
        //main.innerHTML += '<br>' + results.title + ' by ' + results.authors;
        var bookStop = "<div class='books' id='book" + i + "'></div>";
        $('#searchResults').append(bookStop);

            //^ append makes sure that multiple searches means more divs with the same ID
            // if use html() instead it only allows one 'book'

        $('#book' + [i]).html('<h3>' + results.title + '</h3><br>by ' + results.authors + '<p>Description: ' + results.description + '</p>');
       
   } //end for statement
}  //query API and put in #main

//get form to work
var newBook = $('#newBook'); //button

var searchForm = $('search'); //form

newBook.click(function(event){
    event.preventDefault();
    var queryId = searchInput.value; //text field    
    
    // console.log(typeof queryId);
    var results = ('"https://www.googleapis.com/books/v1/volumes?q=' + queryId + '&callback=handleResponse"');
    var scrInject = ('<script src=' + results + '></script>');

    var putScript = $('#putScript');

    $('#putScript').html(scrInject);

    console.log(queryId);
    // console.log(scrInject);

}); //button press

// function searchHard(){
//     console.log("ok");
// }