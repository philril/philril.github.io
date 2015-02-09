$(document).ready(function() {

  // $("#personal-intro").css({"opacity":"0"})
  // $("#index-title").css({"opacity":"0"})

  // $("#image img").css({"opacity":"0"})

  //   $("#image img").animate({"opacity":"1"},800);
  //   $("#index-title").animate({"opacity":"1"},800);
  //   $("#personal-intro").animate({"opacity":"1"},800);


//  ANIMATE HEIGHT UP________
  // $("#image img").css({"height":"0px"});
  // $("#image img").animate({"height":"500px"}, 700, function() {
  //   $("#index-title").animate({"opacity":"1"},500);
  //   $("#personal-intro").animate({"opacity":"1"}, 500);
  // });
// END ANIMATE HEIGHT UP_________



  $("#nav-bar ul li").mouseenter(function() {
    $(this).animate({"font-size":"+=0.5em"})
  });

  $("#nav-bar ul li").mouseleave(function() {
    $(this).animate({"font-size":"-=0.5em"})
  });

  $('.project').mouseenter(function(){
    $(this).css("box-shadow","20px 20px 20px black")
  });

  $('.project').mouseleave(function(){
    $(this).css("box-shadow","")
  });

});
