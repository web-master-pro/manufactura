$(function(){
    var wrapper = $(".file-upload"),
        inp = wrapper.find(".file-upload__input"),
        btn = wrapper.find(".file-upload__button"),
        lbl = wrapper.find(".file-upload__file");

    btn.focus(function(){
        inp.focus()
    });
    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass("focus");
    }).blur(function(){
        wrapper.removeClass("focus");
    });

    var file_api = (window.File && window.FileReader && window.FileList && window.Blob) ? true : false;

    inp.change(function(){
        var file_name;
        if ( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if ( ! file_name.length )
            return;

        if ( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            // btn.text( "Выбрать" );
        } else {
            // btn.text( file_name );
        }
    }).change();

});
$(window).resize(function(){
    $(".file-upload__input").triggerHandler("change");
});
