$(document).ready(function() {

  $("#personal-intro").css({"opacity":"0"})
  $("#index-title").css({"opacity":"0"})

  $("#image").css({"height":"0px"});
  $("#image").animate({"height":"359px"}, 700, function() {
    $("#index-title").animate({"opacity":"1"},500);
    $("#personal-intro").animate({"opacity":"1"}, 500);
  });

  $("#nav-bar ul li").mouseenter(function() {
    $(this).animate({"font-size":"+=0.5em"})
  });

  $("#nav-bar ul li").mouseleave(function() {
    $(this).animate({"font-size":"-=0.5em"})
  });

});
