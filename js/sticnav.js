window.onscroll = function () {
    scrollfunc()
    stickynavfunc()
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function stickynavfunc() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");

    } else {
        navbar.classList.remove("sticky");
    }
}



function scrollfunc() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        document.getElementById("navbar").style.padding = "0px 0px";

    } else {
        document.getElementById("navbar").style.padding = "10px 0px";

    }
}

// hamberger function



 function hamberger()
 {
     let ham=document.querySelector('.hamberger');
     let times=document.querySelector('.times');
     let mobnav=document.querySelector('.mobile-nav');
     let blur=document.querySelector('.blur');

     ham.addEventListener('click', function(){
         mobnav.classList.add('open');
         blur.classList.add('blur');
     });

     times.addEventListener('click',function(){
         mobnav.classList.remove('open');
         blur.classList.remove('blur');
     });
 }
