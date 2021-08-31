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

let Menu=document.getElementById("toggleMenu");
Menu.addEventListener("click", toggle);

function toggle(){
    activeToggle();
}
function activeToggle(){
    if(Menu.getAttribute("data")=="inactive"){
        Menu.setAttribute("data","active");
        console.log(Menu);
    }
    else{
        Menu.setAttribute("data","inactive");
        console.log(Menu);
    }
}