!(function ($) {
  "use strict";

  // loader
  $(window).on("load", function () {
    if ($("#loader").length) {
      $("#loader")
        .delay(200)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // header scrolling effect
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#navigator").addClass("navigator-scrolled");
    } else {
      $("#navigator").removeClass("navigator-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#navigator").addClass("navigator-scrolled");
  }

  // back to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });
})(jQuery);
