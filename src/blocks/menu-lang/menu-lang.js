$(document).ready(function(){

    $(".menu-lang__button").click(function(e){
        var submenu = $(".menu-lang__menu");
        e.preventDefault();
        if ($(this).hasClass("expanded")) {
            $(this).removeClass("expanded");
            submenu.slideUp(300);
        } else {
            $(this).addClass("expanded");
            submenu.slideDown(300);
        };
        return false;

    });

    $(document).click(function(event){
        var target = $(event.target);
        if ( ($(".menu-lang__button").hasClass("expanded")) && (!target.hasClass("menu-lang__link")) ) {
            $(".menu-lang__button").removeClass("expanded");
            $(".menu-lang__menu").slideUp(300);
            return false
        };
        // return true;
    })

});
