$(function(){
	/* show-box 样式 */
	  var mySwiper = new Swiper('.swiper-container',{
	  	loop:true,
		slidesPerView :'auto',
		loopedSlides :12,
		autoplay:3000,
	    speed:1000,
		simulateTouch : false,
		roundLengths : true,
	  }); 
	/* 瀑布流样式 */
	$('.video-banner-box').masonry({
        //options
        "itemSelector":'.item',
        "columnWidth":260,
        "isFitWidth": true
    }) 
	/* 子级导航栏修饰样式 */
	$('.hot-1 a').mouseover(function(){
		$('.decoration-bottom-line').stop().animate({
			left:'0'
		},300)
	})
	$('.video-1 a').mouseover(function(){
		$('.decoration-bottom-line').stop().animate({
			left:'100'
		},300)
	})
	$('.img-txt-1').mouseover(function(){
		$('.decoration-bottom-line').stop().animate({
			left:'200'
		},300)
	})
	$('.particular-1 a').mouseover(function(){
		$('.decoration-bottom-line').stop().animate({
			left:'300'
		},300)
	})
	/* 子级导航栏点击事件 */
	$('.hot-1 a').click(function(){
		$('body').stop().animate({
			scrollTop:'430'
		},600);
	})
	$('.video-1 a').click(function(){
		$('body').stop().animate({
			scrollTop:'1550'
		},600);
	})
	$('.img-txt-1 a').click(function(){
		$('body').stop().animate({
			scrollTop:'2750'
		},600);
	})
	$('.particular-1 a').click(function(){
		$('body').stop().animate({
			scrollTop:'6115'
		},600);
	})
	/* 字体超出部分变成... */
	$('.hot-txt-box').each(function(){
		var max_width=60;
		if ($(this).text().length>max_width) {
			$(this).text($(this).text().substring(0,max_width));
			$(this).html($(this).html()+'...');
		}
	})
	$(window).scroll(function(){
		var oHotbannerScrollTop=$('.hot-banner').height()+370;
		var oVideoScrollTop=$('.video-banner').height()+oHotbannerScrollTop+100;
		var oImgTxtScrollTop=$('.img-txt-banner-box').height()+oVideoScrollTop+100;
		var oScrollTop=$(document).scrollTop();
		if (!$(".decoration-bottom-line").is(":animated")) {
			if (oScrollTop<oHotbannerScrollTop) {
			$('.decoration-bottom-line').stop().animate({
				left:'0'
			},300)
			}
			else if(oScrollTop>=oHotbannerScrollTop && oScrollTop<oVideoScrollTop){
				$('.decoration-bottom-line').stop().animate({
					left:'100'
				},300)
			}
			else if(oScrollTop>=oVideoScrollTop && oScrollTop<oImgTxtScrollTop){
				$('.decoration-bottom-line').stop().animate({
					left:'200'
				},300)
			}
			else if (oScrollTop>=oImgTxtScrollTop){
				$('.decoration-bottom-line').stop().animate({
					left:'300'
				},300)
			}		
		}
			
		/* 视差滚动 */
		var distance_top=$(document).scrollTop();
		var particular_top=$('.particular-banner').offset().top;
		var visible_range=$(window).height();
		var particular_move=-(distance_top+visible_range-particular_top)*0.5
		if (distance_top>(particular_top-visible_range)) {
			$('.particular-bg').css({
				'top':particular_move
			})
		}
		if (distance_top>370) {
			$('.child-nav').css({
				'position':'fixed',
				'top':'0px'
			})
			if (!$('.mini-user-center-btn2').is(':animated')) {
				$('.mini-user-center-btn2').addClass('box-disblock');
				$('.mini-user-center-btn2').stop().animate({
					'top':'45',
					'opacity':'1'
				},200)
			}
		}
		else {
			$('.child-nav').css({
				'position':'absolute',
				'top':'370px'
			})
				$('.mini-user-center-btn2').stop().animate({
					'top':'15',
					'opacity':'0'
				},200,function(){
					$('.mini-user-center-btn2').removeClass('box-disblock');
				})
		}
	})

})