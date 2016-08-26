$(document).ready(function(){

    $(".filter__button").click(function(){
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(".filter__form").removeClass("on").slideUp(300);
        } else {
            $(this).addClass("on");
            $(".filter__form").addClass("on").slideDown(300);
        };
    });


});
