$(document).ready(function(){

    function navigateTab(){
        if (window.location.hash) {
            var hash = window.location.hash.substring(1);
                index = $(".tabs__tab[data-tab='" + hash + "']").index(".tabs__tab");
            if (index > -1) {
                $(".tabs__tab").removeClass("active");
                $(".tabs__tab").eq(index).addClass("active");
                $(".tabs__page").removeClass("active").fadeOut(1);
                $(".tabs__page").eq(index).addClass("active").fadeIn(1);
            }
        };
    };

    navigateTab();

    $(window).on('hashchange', function() {
        navigateTab();
    });

    $(".tabs__tab-link").click(function(e){
        e.preventDefault();

        var tab = $(this).parent(".tabs__tab"),
            index = tab.index(".tabs__tab");

        $(".tabs__tab").removeClass("active");
        tab.addClass("active");

        $(".tabs__page").removeClass("active").fadeOut(500);
        $(".tabs__page").eq(index).addClass("active").fadeIn(500);

    })
});
