$(document).ready(function(){

    function updateMenuSelectMaxHeight(dropdown){
        var maxItems = 12,
            maxHeight = 10;
            items = $(dropdown).find(".menu-select__item");
        if ($(items).length >= maxItems) {
            for (var i=0; i < maxItems; i++) {
                maxHeight = maxHeight + $(items).eq(i).outerHeight();
            };
            $(dropdown).css({"max-height": maxHeight});
        };
    };

    $(".menu-select__button").click(function(){
        var dropdown = $(this).next(".menu-select__list");
        if (!$(this).hasClass("on")) {
            $(".menu-select__button").removeClass("on");
            $(this).addClass("on");
            $(".menu-select__list").slideUp(300);
            dropdown.slideDown(300);
            updateMenuSelectMaxHeight(dropdown)
        } else {
            $(this).removeClass("on");
            dropdown.slideUp(300);
        };
    });

    function submit(action, method, values) {
        var form = $('<form/>', {
            action: action,
            method: method
        });
        $.each(values, function() {
            form.append($('<input/>', {
                type: 'hidden',
                name: this.name,
                value: this.value
            }));
        });
        form.appendTo('body').submit();
    };

    $(".menu-select__link").click(function(e){
        e.preventDefault();
        var item = $(this).parent(".menu-select__item"),
            list = $(item).parent(".menu-select__list"),
            menu = $(list).parent(".menu-select"),
            button = $(menu).find(".menu-select__button"),
            isChecked = $(this).hasClass("checked");

        $(menu).attr("data-value", $(this).attr("data-value"));
        $(list).find(".menu-select__link").removeClass("checked");
        $(this).addClass("checked");

        $(button).removeClass("on");
        $(list).slideUp(300);

        if (!isChecked) {
            submit($("#filter-form").attr("data-action"), 'POST', [
                { name: 'brand',    value: $("#filter-form .menu-select--brand").attr("data-value")},
                { name: 'sex',      value: $("#filter-form .menu-select--sex").attr("data-value")},
                { name: 'price',    value: $("#filter-form .menu-select--price").attr("data-value")},
                { name: 'abc',      value: $("#filter-form .menu-select--abc").attr("data-value")},
                { name: 'time',     value: $("#filter-form .menu-select--time").attr("data-value")},
                { name: 'state',    value: $("#filter-form .menu-select--state").attr("data-value")}
            ]);
        };

    });

});
