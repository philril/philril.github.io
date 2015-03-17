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

  $(window).scroll(function(){
    var anchors = $('a.anchor')
    console.log("hey")
    var position = anchors[0].offset().top

    $('html, body').animate({scrollTop:position}, 'slow');
  })


  $("#nav-bar ul li").mouseenter(function() {
    $(this).animate({"font-size":"+=0.5em"})
  }).mouseleave(function() {
    $(this).animate({"font-size":"-=0.5em"})
  });


  $("#github").mouseenter(function() {
    $('#social-identifier').html("<h2>GitHub</h2>")
  }).mouseleave(function() {
    $('#social-identifier').html("")
  });

  $("#linkedin").mouseenter(function() {
    $('#social-identifier').html("<h2>LinkedIn</h2>")
  }).mouseleave(function() {
    $('#social-identifier').html("")
  });

  $("#twitter").mouseenter(function() {
    $('#social-identifier').html("<h2>Twitter</h2>")
  }).mouseleave(function() {
    $('#social-identifier').html("")
  });

  $("#google_plus").mouseenter(function() {
    $('#social-identifier').html("<h2>Google Plus</h2>")
  }).mouseleave(function() {
    $('#social-identifier').html("")
  });


  // $(".project").click(function(event){
  //   event.preventDefault()
  //   console.log($(this).find('.project_hide').css({'display':'block'}));
  // }).click(function(event){
  //   event.preventDefault()
  //   console.log($(this).find('.project_hide').css({'display':'hide'}));
  // });

  // $(".project").click(function(event){
  //   event.preventDefault()
  //   $(this).find('img').hide();
  // })


  $(".project").mouseenter(function(){
    $(this).find('img').hide();
    $(this).find('.image').css({'display':'inline'})
  }).mouseleave(function(){
    $(this).find('img').show()
    $(this).find('.image').css({'display':'none'})
  })

  // $('.project').mouseenter(function(){
  //   $(this).css("box-shadow","20px 20px 20px black")
  // });

  // $('.project').mouseleave(function(){
  //   $(this).css("box-shadow","")
  // });

});
