(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });

})(jQuery, window, document);



// $(document.ready(function(){

// });

var spoon = $('.main');
var poon = spoon.html();
console.log(poon);
$(document).ready(function(){

                 $('#home').click(function(){
                     $('.main').html(poon);
                 });
});
$(document).ready(function(){
                 $('#library').click(function(){
                     $('.main').load('library.html');
                 });
});
$(document).ready(function(){
                 $('#checkedout').click(function(){
                     $('.main').load('checkedout.html');
                 });
});
$(document).ready(function(){
                 $('#faq').click(function(){
                 $('.main').load('faq.html');
                 });
});
