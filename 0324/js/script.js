$(function(){

    $('.dropdown').mouseenter(function(){
        $(this).find('ul').css({
            visibility : 'visible',
            opacity : 1
        });
        $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }).mouseleave(function(){
        $(this).find('ul').css({
            opacity : 0,
            visibility : 'hidden'
        });
        $(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    $(window).scroll(function(){
        const oheight = $('#header').offset().top;
        // console.log(oheight);
        if(oheight > 100){
            $('#header').css({
                top : 0
            });
        }else{
            $('#header').css({
                top : '3em'
            });
        }
    });
    $('.toggle-btn').click(function(){
        $(this).find('i').toggleClass('fa-x').toggleClass('fa-bars');
        $('.navbar ul').css({display: 'block'});
    });
    

   
});