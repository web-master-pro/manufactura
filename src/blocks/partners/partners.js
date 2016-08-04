$(document).ready(function(){

    $(".partners__partner").click(function(){
        var index = $(this).index(".partners__partner");
        $(".partners__partner").removeClass("active");
        $(this).addClass("active");
        $(".partners__contact").removeClass("active").fadeOut(300);
        $(".partners__contact").eq(index).addClass("active").fadeIn(300);
    });

});
