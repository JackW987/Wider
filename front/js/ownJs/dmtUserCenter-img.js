$(function(){
	$('.usercenter-video-banner').masonry({
        //options
        "itemSelector":'.item',
        "isFitWidth": true
    }) 
    $('.usercenter-img-mask').mouseover(function(){
    	$(this).stop().animate({
    		'opacity':1
    	},200)
    })
    $('.usercenter-img-mask').mouseout(function(){
    	$(this).stop().animate({
    		'opacity':0
    	},200)
    })
    $('.usercenter-img-mask').click(function(){
    	var thisImg=$(this).parent('.usercenter-img').find('img').attr('src');
    	$('.wider-show-banner').css({
    		'display':'block',
    	})
    	$('.wider-show-banner-img-box img').attr('src',thisImg);
    	$('body').css({
    		'overflow':'hidden'
    	})
    })
    $('.wider-show-banner-img-nav .fa-times').click(function(){
    	$('.wider-show-banner').css({
    		'display':'none',
    	})
    	$('body').css({
    		'overflow':'auto'
    	})
    })
    $('.comment-action-like').click(function(){
    	if ($(this).hasClass('action-like')) {
    		$(this).find('i').css({
    			'color':'red'
	    	})
	    	$(this).find('div').text(parseInt($(this).find('div').text())+1);
	    	$(this).removeClass('action-like');
	    	$(this).addClass('action-liked');
    	}
    	else{
    		$(this).find('i').css({
    			'color':'white'
	    	})
	    	$(this).find('div').text(parseInt($(this).find('div').text())-1);
	    	$(this).removeClass('action-liked');
	    	$(this).addClass('action-like');
    	}
    })
    var parentElement=$('.img-post-comment-banner-output').children('ul:first-child');
    $(parentElement).on('click','.banner-output-first-bottom i',function(){
    	if ($(this).hasClass('bottom-like')) {
    		$(this).css({
    			'color':'red'
	    	})
	    	$(this).text(' '+(parseInt($(this).text())+1));
	    	$(this).removeClass('bottom-like');
	    	$(this).addClass('bottom-liked');
    	}
    	else{
    		$(this).css({
    			'color':'inherit'
	    	})
	    	$(this).text(' '+(parseInt($(this).text())-1));
	    	$(this).removeClass('bottom-liked');
	    	$(this).addClass('bottom-like');
    	}
    })
    $(document).on('mouseover','.comment-head-followed',function(){
    	$(this).removeClass('comment-head-followed');
    	$(this).addClass('comment-head-followed-cancel');
    	$(this).text('✘ 取消关注');
    })
    $(document).on('mouseout','.comment-head-followed-cancel',function(){
    	$(this).removeClass('comment-head-followed-cancel');
    	$(this).addClass('comment-head-followed');
    	$(this).text('✔ 已关注');
    })
    $(document).on('click','.comment-head-followed-cancel',function(){
    	$(this).removeClass('comment-head-followed-cancel')
    	$(this).addClass('comment-head-follow');
    	$(this).text('+关注');
    	$(this).css({
    		'color':'#42c02e'
    	})
    })
    $(document).on('click','.comment-head-follow',function(){
    	$(this).removeClass('comment-head-follow');
    	$(this).addClass('comment-head-followed');
    	$(this).text('✔ 已关注');
    	$(this).css({
    		'color':'#b0b5b8'
    	})
    })
    /*  回复功能 */
    /* 一阶回复 */
    $(document).on('click','.first-content-response',function(){
    	var point = $(this).parent().next();
    	if (point.hasClass('nonexistence')) {
    		point.css({
    			'display':'block'
	    	}).focus()
	    	$(this).next().css({
	    		'display':'inline'
	    	})
	    	point.removeClass('nonexistence');
	    	point.addClass('existence');
    	}
    	else{
    		if (point.val() == '') {
    			layer.msg('评论内容不能为空');	
    		}
    		else{
    			var replyTxt=point.val();
    			point.val('');
    			layer.msg('评论成功')
    			point.next().prepend('<li><div class="banner-output-second-txt"><a href="javascript:void(0);" class="banner-output-first-head">管理员</a> '+replyTxt+'</div><div class="banner-output-first-bottom"><span>6月21日</span><a href="javascript:void(0);" class="comment-input-text-open second-content-response">回复</a><a href="javascript:void(0);" class="comment-input-text-stop">收起</a><i class="fa fa-heart bottom-like"> 1</i></div><textarea  class="nonexistence" placeholder="随便说几句..."></textarea></li>');
    		}
    	}
    })
    /* 二阶回复 */
    $(document).on('click','.second-content-response',function(){
    	var point = $(this).parent().next();
    	if (point.hasClass('nonexistence')) {
    		point.css({
    			'display':'block'
	    	}).focus()
	    	$(this).next().css({
	    		'display':'inline'
	    	})
	    	point.removeClass('nonexistence');
	    	point.addClass('existence');
    	}
    	else{
    		if (point.val() == '') {
    			layer.msg('评论内容不能为空');	
    		}
    		else{
    			var replyName=$(this).parents('li:first').find('.banner-output-first-head').text();
    			var replyTxt=point.val();
    			point.val('');
    			layer.msg('评论成功');
    			point.parents('ul:first').prepend('<li><div class="banner-output-second-txt"><a href="javascript:void(0);" class="banner-output-first-head">管理员</a> '+' 回复 '+'<a href="javascript:void(0);" class="append_a">'+replyName+'</a> '+replyTxt+'</div><div class="banner-output-first-bottom"><span>6月21日</span><a href="javascript:void(0);" class="comment-input-text-open second-content-response">回复</a><a href="javascript:void(0);" class="comment-input-text-stop">收起</a><i class="fa fa-heart bottom-like"> 1</i></div><textarea  class="nonexistence" placeholder="随便说几句..."></textarea></li>');
    		}
    	}
    })
    /* 框体收回 */
    $(document).on('click','.comment-input-text-stop',function(){
    	var point = $(this).parent().next();
    	if (point.hasClass('existence')) {
    		$(this).parent().next().css({
    			'display':'none'
	    	})
	    	$(this).css({
	    		'display':'none'
	    	})
	    	point.removeClass('existence');
	    	point.addClass('nonexistence');
    	}
    })
    /* 大回复功能 */
    $('.img-post-comment-banner-input a').click(function(){
    	var point = $(this).parent('.img-post-comment-banner-input').find('textarea');
    	if (point.val()=='') {
    		layer.msg('评论内容不能为空');
    	}
    	else{
    		var replyImg=$('.img-post-comment-banner-input img').attr('src');
    		var prependTxt=point.val();
    		point.val('');
    		layer.msg('评论成功');
    		$('.img-post-comment-banner-output').children('ul:first-child').prepend('<li><a href="javascript:void(0);" class="first-head-img"><img src='+replyImg+' class="first-head-img" /></a><a href="javascript:void(0);" class="banner-output-first-head">管理员</a><div class="banner-output-first-txt">'+prependTxt+'</div><div class="banner-output-first-bottom"><span>6月21日</span><a href="javascript:void(0);" class="comment-input-text-open first-content-response">回复</a><a href="javascript:void(0);" class="comment-input-text-stop">收起</a><i class="fa fa-heart bottom-like"> 1</i></div><textarea class="nonexistence" placeholder="随便说几句..."></textarea><ul class="clearfix"></ul></li>')
    	}
    })
    /* 缩略图 ul 计算 */
    $('.wider-show-banner-img-small-box ul li').click(function(){
    	var tbWidth = $(this).outerWidth(true);
    	var	tbIndex = $(this).index();
    	var tbMarginLeft = -tbWidth*tbIndex;
    	$(this).parents('ul').stop().animate({
    		'margin-left': tbMarginLeft 
    	},300)
    })

    var maxMarginLeft=$('.wider-show-banner-img-small-box ul li').outerWidth(true)*($('.wider-show-banner-img-small-box ul li').length-1);
    $('.show-img-btn-right').click(function(){   
    	var thisMarginLeft = $('.wider-show-banner-img-small-box ul').css('margin-left');
    	var tbWidth = $('.wider-show-banner-img-small-box ul li').outerWidth(true);
   		var nextMarginLeft = -parseInt(tbWidth)+parseInt(thisMarginLeft);
        if (-parseInt(thisMarginLeft)<maxMarginLeft && !$('.wider-show-banner-img-small-box ul').is(':animated')) {
           $('.wider-show-banner-img-small-box ul').stop().animate({
                'margin-left' : nextMarginLeft
            }) 
        }
    })
    $('.show-img-btn-left').click(function(){
        var thisMarginLeft = $('.wider-show-banner-img-small-box ul').css('margin-left');
        var tbWidth = $('.wider-show-banner-img-small-box ul li').outerWidth(true);
        var nextMarginLeft = +parseInt(tbWidth)+parseInt(thisMarginLeft);
        if (parseInt(thisMarginLeft)<0 && !$('.wider-show-banner-img-small-box ul').is(':animated')) {
            $('.wider-show-banner-img-small-box ul').stop().animate({
                'margin-left' : nextMarginLeft
            })
        }
    })
    /* 举报框JS */
  $('.report-save-btn').click(function(){
    if ($(this).closest('#reportBox').find('textarea').val()=='') {
        layer.msg('具体原因不能为空');
    }
    else{
      $('#reportBox').modal('hide');
      layer.msg('举报原因已发送');  
    }
  })    /* 阻止事件冒泡 */
    $('.usercenter-img-mask a').click(function(event){
        event.stopPropagation();
    })
})