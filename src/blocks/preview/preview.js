$(document).ready(function(){

    $(".preview__thumb").click(function(){
        var src = $(this).attr("src");
        $(".preview__img").attr("src", src);
    });
});
