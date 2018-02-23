$(document).ready(function() {
    //tab切换
    $('.choose-type ul li').each(function(index, value) {
        $(value).click(function() {
            $('.choose-type ul li[class="selected"]').removeClass('selected');
            $(this).addClass('selected');
        });
    });

    // //图片hover时放大
    $('.item-cell img').each(function(index,value) {
    	$(value).mouseenter(function(){
    		$(this).addClass('img_hover');
    	}).mouseleave(function(){
    		$(this).animate(1000);
    		$('.item-cell img[class="img_hover"]').removeClass('img_hover');
    	});
    });
});
