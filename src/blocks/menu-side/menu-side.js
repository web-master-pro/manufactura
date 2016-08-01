$(document).ready(function(){

    $(".menu-side__item").each(function( index ) {
        if ($(this).find(".menu-side-sub").length > 0) {
            $(this).addClass("menu-side__item--submenu");
        };
    });

    $(".menu-side__item--submenu").click(function(e){
        var submenu = $(this).find(".menu-side-sub"),
            hasSubmenu = submenu.length > 0;
        if (hasSubmenu) {
            e.preventDefault();
        }
        if ($(this).hasClass("expanded")) {
            $(this).removeClass("expanded");
            submenu.slideUp(200);
        } else {
            $(".menu-side__item").removeClass("expanded");
            $(".menu-side-sub").slideUp(100)
            $(this).addClass("expanded");
            submenu.slideDown(300);
        };
        return !hasSubmenu;

    });

    // $(document).click(function(event){
    //     var target = $(event.target);
    //     if ( ($(".menu-side__item").hasClass("expanded")) && (!target.hasClass("menu-main-sub__link")) ) {
    //         $(".menu-side__item").removeClass("expanded");
    //         $(".menu-side-sub").slideUp(300);
    //         return false;
    //     };
    //     return true;
    // })

});
