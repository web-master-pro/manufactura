$(document).ready(function(){

    $(".sticker__go-top").click(function () {
        destination = $(".header").offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
        return false;
    });

    $(".sticker__write-us").click(function () {
        $(".sticker__form").addClass("on");
        return false;
    });

    $(document).click(function (event) {
        if ($(".sticker__form").hasClass("on")) {
            var target = $(event.target),
                selfclick = target.is(".form-message") || ($(".form-message").find(target).length > 0);
            if (!selfclick) {
                $(".sticker__form").removeClass("on");
            };
        };
        // return true
    });

});


$(window).scroll(function() {

    var headerHeight = $(".header").outerHeight();
        winPosition = $(this).scrollTop();

    if (winPosition > headerHeight) {
        $(".sticker__go-top").addClass("visible");
    } else {
        $(".sticker__go-top").removeClass("visible");
    };

});
