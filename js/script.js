var headerHeight = 60;
var headerMargin = 0;
$(function(){
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        var elem =  $('#search');
        if (top+headerMargin < headerHeight){
            elem.css('top', (headerHeight - top));
        } else {
            elem.css('top', headerMargin);
        }
    });
});
