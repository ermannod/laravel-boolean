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

}); // end DOM
