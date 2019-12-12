//Open modals
$("#modal-1").click(function() {
  $("#modal-1-img").addClass("modal-visible");
});
$("#modal-2").click(function() {
  $("#modal-2-img").addClass("modal-visible");
});
$("#modal-3").click(function() {
  $("#modal-3-img").addClass("modal-visible");
});
$("#modal-4").click(function() {
  $("#modal-4-img").addClass("modal-visible");
});
$("#modal-5").click(function() {
  $("#modal-5-img").addClass("modal-visible");
});
$("#modal-6").click(function() {
  $("#modal-6-img").addClass("modal-visible");
});
$("#modal-7").click(function() {
  $("#modal-7-img").addClass("modal-visible");
});
$("#modal-8").click(function() {
  $("#modal-8-img").addClass("modal-visible");
});
$("#modal-9").click(function() {
  $("#modal-9-img").addClass("modal-visible");
});
$("#modal-10").click(function() {
  $("#modal-10-img").addClass("modal-visible");
});
//Close open modal
$(".modal-close").click(function() {
  $(this).parent().parent().parent().removeClass("modal-visible");        
});