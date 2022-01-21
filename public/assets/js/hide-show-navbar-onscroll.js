// alert('COUCOU');
$(function(){
    var scroll = $(document).scrollTop();
    var navHeight = $('.site-header').outerHeight();

    $(window).scroll(function(){

        var scrolled = $(document).scrollTop();
        if(scrolled > navHeight){
            $('.site-header').addClass('animate');
        }else{
            $('.site-header').removeClass('animate');
        }

        if(scrolled > scroll){
            $('.site-header').removeClass('sticky');
        }else{
            $('.site-header').addClass('sticky');
        }

        scroll = $(document).scrollTop();

    })
})
