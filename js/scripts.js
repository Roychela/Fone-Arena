
/ floating action button/ /
  $(document).ready(function () 
    $('.fixed-action-btn').floatingActionButton();
    $('.dropdown-trigger').dropdown();
  });
  $(document).ready(function(){
   $('.slider').slider();
   $('.dropdown-trigger').dropdown();
 });

$("#submitbutton").click(function () {
  var messageHere = (document.getElementById("messageHere").value);
  var name = (document.getElementById("name").value);
  var email = (document.getElementById("email").value);
  if (messageHere != "") {
    alert(name + " your message is received. Thank you for the review.");
  } else {
    alert("Fill out form and submit");
  }
});