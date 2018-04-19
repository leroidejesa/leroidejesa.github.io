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

  $('.jubel-link-hover').hover(
      function() {
        $('.tagline-wrap').fadeOut(300);
        $('.collection-jubel div').fadeIn(300);
      },function() {
        $('.collection-jubel div').fadeOut(300);
        $('.tagline-wrap').fadeIn(300);
      }
  );

  $('.bio-link-hover').hover(
      function() {
        $('.tagline-wrap').fadeOut(300);
        $('.collection-bio .hidden').fadeIn(300);
      },function() {
        $('.collection-bio .hidden').fadeOut(300);
        $('.tagline-wrap').fadeIn(300);
      }
  );

});
