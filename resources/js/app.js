require('./bootstrap');

var $ = require('jquery');

$(document).ready(function(){
  // looks for current url
  var url = window.location.pathname;
  // removes class on non nav pages
  if(url === '/privacy-policy'){
    $('.nav-item').removeClass('active');
  } else if (url === '/faq') {
    $('.nav-item').removeClass('active');
  } // end if remove active

  //toggle on click reply to question
  $('.faq_quest').click(function(){
    $('.faq_quest p').slideUp('slow');
    $(this).find('.dis-none').slideDown('slow');
    if($('.faq_quest p').hasClass('slided')){
      $('.faq_quest p').removeClass('slided');
    } else{
      $(this).find('.dis-none').addClass('slided');
    }
  });// end toggle reply on click

}); // end DOM
