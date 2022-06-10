$(function(){
    var menu__btn = document.getElementById('menu__btn');
    var sideNav = document.getElementById('sideNav');
    var menu = document.getElementById('menu');

    sideNav.style.right="-250px";
    menu__btn.onclick= function(){
        if(sideNav.style.right=="-250px"){
            sideNav.style.right="0px"
            menu.src="img/close.png"
        }else{
            sideNav.style.right="-250px"
            menu.src="img/menu.png"
        }
    }
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });
});
