//animations
$(document).ready(function () {

$(".wp-1").addClass("animated slideInDown");
$(".wp-1, .wp-1 + h1").addClass("animated slideInDown");

$(".my-skills").waypoint(function() {

    $(".my-skills").addClass("animated fadeInUp");

},
{
    offset: '50%'
});


//hamburger
$(".hamburger").click(function () {

    $(this).toggleClass("is-active");
    $(".mobile-menu").toggle();
});

 });


//form validation
function validateForm() {
    var comment = document.forms["myForm"]["message"].value;
    if (comment == "") {
        alert("Please write your comment");
        return false;
    }
}


//modal

var modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  }
});

var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
}
