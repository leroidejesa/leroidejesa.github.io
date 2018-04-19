$( document ).ready(function() {

  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    console.log(traX);
    $(".tagline-wrap").css({"background-position": traX + "%" + traY + "%"});
  });
  // credit to @dghez_ for this mousemove effect

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
