var contain = document.getElementById("containmenu");
var menubar1 = document.getElementsByClassName("menubarre1");
var menubar2 = document.getElementsByClassName("menubarre2");
var menubar3 = document.getElementsByClassName("menubarre3");
var leftbar = document.getElementById("left");
var rightbar = document.getElementById("right");
var navmenu = document.getElementById("navigation");
var hide = document.querySelectorAll(".hide");
var count = 0;


contain.addEventListener("click", function () {
    if(count === 0){
        count++;
        menubar1[0].style.animationName = "slidein1";
        menubar2[0].style.animationName = "slidein2";
        menubar3[0].style.animationName = "slidein3";
        leftbar.style.animationName = "leftbar";
        rightbar.style.animationName = "rightbar";
        navmenu.style.animationName = "navdef";
        for( let i = 0; i < hide.length; i++){
            hide[i].style.animationName = "slidehide";
        }
        
    } else if (count === 1){
        count--;
        menubar1[0].style.animationName = "slidein1reverse";
        menubar2[0].style.animationName = "slidein2reverse";
        menubar3[0].style.animationName = "slidein3reverse";
        leftbar.style.animationName = "leftbarreverse";
        rightbar.style.animationName = "rightbarreverse";
        navmenu.style.animationName = "navdefreverse";
        for( let i = 0; i < hide.length; i++){
            hide[i].style.animationName = "slidehidereverse";
        }
    }
        
})