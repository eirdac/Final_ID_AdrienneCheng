//kinetic type section
$(document).on("click", "#nav_ktype", function() {

  $("#content_ktype").slideDown("fast");
  $("#content_ktype").siblings().slideUp("fast");

});

//anajo section
$(document).on("click", "#nav_anajo", function() {

  $("#content_anajo").slideDown("fast");
  $("#content_anajo").siblings().slideUp("fast");

});


//3d section
$(document).on("click", "#nav_3d", function() {

  $("#content_3d").slideDown("fast");
  $("#content_3d").siblings().slideUp("fast");

});

//split section
$(document).on("click", "#nav_split", function() {

    $("#content_split").slideDown("fast");
    $("#content_split").siblings().slideUp("fast");
  
  });

  //blobbo section
$(document).on("click", "#nav_blobbo", function() {

    $("#content_blobbo").slideDown("fast");
    $("#content_blobbo").siblings().slideUp("fast");
  
  });

  $("#nav_ktype").click();
