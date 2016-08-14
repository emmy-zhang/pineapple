$(function () {
  var pageHeight = $("html").height();
  var navHeight = $(".navbar").outerHeight(true);
  var contentHeight = pageHeight - navHeight;
  $(".content").css("height", contentHeight);
})
