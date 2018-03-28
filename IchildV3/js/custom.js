
var parentwidth = $(".parent").width();
var childwidth = $(".child").width();
$(window).scroll(function(){
	if ($(window).scrollTop() >= 50) {
      $(".child").width(parentwidth);
      }
    else {
       $('child').width(childwidth);
    }   
  });

$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
       $('#wrap').addClass('fix-post');
    }
    else {
       $('#wrap').removeClass('fix-post');
    }
});


