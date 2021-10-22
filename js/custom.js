$(function(){
    'use-strict';
    $(".header , .layout").height($(window).height());
    $(window).resize(function(){
        $(".header , .layout").height($(window).height());
    });
    $(".read").on('click' , function(){
        $(this).prev().toggle();
        if($(this).text() == 'more'){
            $(this).text('less');
        }else{
            $(this).text('more');
        }
    })
});
