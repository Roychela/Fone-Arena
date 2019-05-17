// floating action button/ /
  $(document).ready(function () {
    $('.slider').slider();
    $('.dropdown-trigger').dropdown();
    $('.fixed-action-btn').floatingActionButton();

 });
 function resetFields() {
   $("input#name").val("");
   $("input#email").val("");
   $("#message").val("");

}

$("#submitbutton").click(function () {
  var messageHere = (document.getElementById("messageHere").value);
  var name = (document.getElementById("name").value);
  var email = (document.getElementById("email").value);
  var comment = (document.getElementById("message").value);
  if (messageHere != "") {
    alert(name + " your message is received. Thank you for the review.");
  } else {
    alert("Fill out form and submit");
  }
  $(".reviews").append(
                           '<div class="new-reviws">' +
                             '<h4>Name</h4>'+ name +
                             '<h4>comment</h4>'+ comment
                           +'</div>'

                           );

 resetFields();
});
