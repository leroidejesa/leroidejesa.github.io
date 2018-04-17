$( document ).ready(function() {

  $('.epicodus-link-hover').hover(
      function() {
          $('.epicodus-preview-img').fadeIn(200);
          $('.collection-desc').fadeOut(200);
      },function() {
          $('.epicodus-preview-img').fadeOut(200);
          $('.collection-desc').fadeIn(200);
      }
  );

});
