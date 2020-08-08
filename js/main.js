!(function ($) {
  "use strict";

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

  // Back to top button
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
