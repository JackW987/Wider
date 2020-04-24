$(function(){
	$(document).on('mouseover','.tag-list li a',function(){
		$(this).stop().animate({
	    	'opacity': 0.4,
	    },300)
	})
	$(document).on('mouseout','.tag-list li a',function(){
		$(this).stop().animate({
	    	'opacity':0,
	    },300)
	})

	$('.tag-load-more a').click(function(){
		$('.tag-list').append('<li><a href="javascript:void(0);"></a><img src="images/tag-img/tag-img-1.jpg"><span>测试内容</span></li><li><a href="javascript:void(0);"></a><img src="images/tag-img/tag-img-2.png"><span>测试内容</span></li><li><a href="javascript:void(0);"></a><img src="images/tag-img/tag-img-4.jpg"><span>测试内容</span></li><li><a href="javascript:void(0);"></a><img src="images/tag-img/tag-img-3.jpg"><span>测试内容</span></li>')
	})
})