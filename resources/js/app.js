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

  // shows and hides replies and changes + to - on click
  $('.faq_quest').click(function(){
    if($(this).find('p').is(':visible')){
      $('.faq_quest h3 i').removeClass('fa-minus').addClass('fa-plus');
      $('.faq_quest p').slideUp();
    } else {
      $('.faq_quest p').slideUp();
      $(this).find('p').slideDown();
      $('.faq_quest h3 i').removeClass('fa-minus').addClass('fa-plus');
      $(this).find('h3 i').addClass('fa-minus').removeClass('fa-plus');
    };
  }); // end shows and hides replies and changes + to - on click


}); // end DOM
