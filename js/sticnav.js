window.onscroll = function () {
    stickynavfunc()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickynavfunc(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

