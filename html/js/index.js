$(document).ready(function () {
    $(".tabButton").click(function () {
      $(".tabButton").not($(this).addClass("active")).removeClass("active");
      $(".tabContent").not($("#" + $(this).attr("id") + "Content").fadeIn("slow")).fadeOut(0);});
  });