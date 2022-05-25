
$(document).ready(function () {
    if(document.getElementById("nav34")){
        window.onscroll = function() {xScroll()};
    }
    
});

function xScroll() {
    var x = document.getElementById("nav34");
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        x.classList.remove("not");
    }else{
        x.classList.add("not");
    }
}

setTimeout(() => {
    var x = "#load";
    $(x).addClass("hide");
    setTimeout(() => {
      $(x).remove();
    }, 500);
  }, 1000);

  $(".sM34").click(function (e) { 
    $("#navKiri").toggleClass("show");
    e.preventDefault();
  });
  