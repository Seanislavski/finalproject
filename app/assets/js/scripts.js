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
// var books = $('.books');

function handleResponse(response) {
    $('#searchResults').html(''); //clear area

    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        var results = item.volumeInfo;
        // var next = (i + 1);
        var auths = [];
        if (results.authors.length > 1){
            for (var t = 0; t < results.authors.length; t++){
                auths.push(results.authors[t]);
            }
            var authsAsString = auths.join(', ');
        } else {var authsAsString = results.authors[0]}
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

        $('#bookB' + i).html("<span class='title2'>" + results.title + '</span><span class="by"><br>By ' + authsAsString + "</span><span class='hiddenIsbn'>" + hiddenIsbn + "</span><span class='add'>Add</span>");

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
    var bookArea = $('.book');
    if (response.items){
        var item = response.items[0];    
    } else{
        var item;
    }
    
    var results = item.volumeInfo;
    var auths = [];
    if (results.authors.length > 1){
        for (var i = 0; i < results.authors.length; i++){
        auths.push(results.authors[i]);
        }
        var authsAsString = auths.join(', ');
    } else{ var authsAsString = results.authors[0]}
    myLibrary.append('<div class="book"><div class="bookCover"><img src="' + results.imageLinks.thumbnail + '"></img></div><div class="contents"><span id="title3">' + results.title + '<br><span id="author3"> By: ' + authsAsString + '</span></span><br><span class="desc">' + results.description + '</span></div></div>' );

    var bookClick = function(){
        console.log(myLibrary.length);
    }
    bookArea.click();
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

