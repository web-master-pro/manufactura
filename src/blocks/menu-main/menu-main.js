$(document).ready(function(){

    $(".menu-main__item").each(function( index ) {
        if ($(this).find(".menu-main-sub").length > 0) {
            $(this).addClass("menu-main__item--submenu");
        };
    });

    $(".menu-main__item--submenu").click(function(e){
        var submenu = $(this).find(".menu-main-sub"),
            hasSubmenu = submenu.length > 0;
        if (hasSubmenu) {
            e.preventDefault();
        }
        if ($(this).hasClass("expanded")) {
            $(this).removeClass("expanded");
            submenu.slideUp(200);
        } else {
            $(".menu-main__item").removeClass("expanded");
            $(".menu-main-sub").slideUp(100)
            $(this).addClass("expanded");
            submenu.slideDown(300);
        };
        return !hasSubmenu;

    });

    $(document).click(function(event){
        var target = $(event.target);
        if ( ($(".menu-main__item").hasClass("expanded")) && (!target.hasClass("menu-main-sub__link")) ) {
            $(".menu-main__item").removeClass("expanded");
            $(".menu-main-sub").slideUp(200);
            return false;
        };
        return true;
    })

});
