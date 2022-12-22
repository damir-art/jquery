jQuery(document).ready( function ($) {
  $('li').not('.active').css('backgroundColor', 'red')
  $('li').css('marginBottom', '8px')
  $('li').has('ul').css('backgroundColor', 'green')
})
