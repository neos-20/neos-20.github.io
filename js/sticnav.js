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
        document.getElementById("navbar").style.padding = "20px 0px";

    }
}