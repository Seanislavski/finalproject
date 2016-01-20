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
