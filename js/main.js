$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#navigator").addClass("navigator-scrolled");
  } else {
    $("#navigator").removeClass("navigator-scrolled");
  }
});
