$(document).ready(function(){

    $(".menu-main__item").each(function( index ) {
        if ($(this).find(".menu-main-sub").length > 0) {
            $(this).addClass("menu-main__item--submenu");
        };
    });

    $(".menu-main__item--submenu .menu-main__link").click(function(e){
        var submenu = $(this).next(".menu-main-sub"),
            item = $(this).parent(".menu-main__item"),
            hasSubmenu = submenu.length > 0;
        if (hasSubmenu) {
            e.preventDefault();
        }
        if (item.hasClass("expanded")) {
            item.removeClass("expanded");
            submenu.slideUp(200);
        } else {
            $(".menu-main__item").removeClass("expanded");
            $(".menu-main-sub").slideUp(100)
            item.addClass("expanded");
            submenu.slideDown(300);
        };
        return !hasSubmenu;

    });

    $(".menu-main-sub__link").click(function(){
        if ($(".menu-main__item.expanded").length > 0){
            $(".menu-main__item").removeClass("expanded");
            $(".menu-main-sub").slideUp(100);
        };
        return true;
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
