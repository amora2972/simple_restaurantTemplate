$(document).ready(function(){
    $(window).scroll(function(){

        /*navbar scroll affixs*/
        var navbar = $(".navbar");
        if($(window).scrollTop() >= navbar.height()){
            navbar.addClass("scrolled");
        }else{
            navbar.removeClass("scrolled");
        }
    });

    /*tabs*/
    $(".tab-switch li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".tabs-section .tabs-content>div").hide();
        $("." + $(this).data("class")).show();
    });

    var attr;
    //removing placeholders once the user presses in the form
    $(document).on("focus" , "input" , function () {
        attr = $(this).attr("placeholder");
        $(this).removeAttr('placeholder');
    });

    $(document).on("focusout" , "input" , function () {
        if($(this).val() == ''){
            $(this).attr('placeholder' , attr);
        }

    });

});
