$(document).ready(function () {
  let hiddenRow = $(".expandable");
  $(".expand-btn").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      $(".expand-btn").html("Reduce");
    } else {
      $(".expand-btn").html("To expand");
    }
  });
});
$(document).ready(function () {
  let hiddenRow = $(".expandable");
  $(".feather-menu").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      $(".feather-menu");
    } else {
      $(".feather-menu");
    }
  });
});
