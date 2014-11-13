$(document).ready(function() {

  // $("#image").hide();
  // $("#image").show(2000);

  $("#personal-intro").css({"opacity":"0"})
  $("#index-title").css({"opacity":"0"})


  $("#image").css({"height":"0px"});
  $("#image").animate({"height":"359px"}, 700, function() {

    $("#index-title").animate({"opacity":"1"},500);
    $("#personal-intro").animate({"opacity":"1"}, 500);

  //   });

  });

  // $("#personal-intro").css({"opacity":"0"})
  // $("#personal-intro").animate({"opacity":"1"},3000);




  // $("#image2").css({"height":"0","width":"0"})
  // $("#image2").animate({"height":"400px","width":"400px"},2000);


  $("#nav-bar ul li").mouseenter(function() {
    $(this).animate({"font-size":"+=0.5em"})
  });

  $("#nav-bar ul li").mouseleave(function() {
    $(this).animate({"font-size":"-=0.5em"})



  });
});
