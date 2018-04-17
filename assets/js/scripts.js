$( document ).ready(function() {

  $('.epicodus-link-hover').hover(
      function() {
        $('.tagline-wrap').fadeOut(300);
        $('.collection-epicodus div').fadeIn(300);
      },function() {
        $('.collection-epicodus div').fadeOut(300);
        $('.tagline-wrap').fadeIn(300);
      }
  );

});
