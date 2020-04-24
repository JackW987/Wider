$(function(){


  	$('.fans-label').click(function(){
  		$('.fans-banner').css({
  			'display':'block'
  		})
  		$('.follow-banner').css({
  			'display':'none'
  		})
  		$(this).css({
  			'top':0+'px'
  		})
  		$('.follow-label').css({
  			'top':-20+'px'
  		})
  	})
  	$('.follow-label').click(function(){
  		$('.fans-banner').css({
  			'display':'none'
  		})
  		$('.follow-banner').css({
  			'display':'block'
  		})
  		$(this).css({
  			'top':0+'px'
  		})
  		$('.fans-label').css({
  			'top':-20+'px'
  		})

  	})
  	$(document).on('click','.follow-green-btn',function(){
	  		$(this).css({
	  			'border':'1px solid hsla(0,0%,59%,.6)',
	  			'background':'#f8f8f8',
	  			'color':'#8c8c8c'
	  		})
	  		$(this).text('✔ 已关注');
	  		$(this).addClass('follow-green-btn-followed');
  	})
  	$(document).on('mouseover','.follow-green-btn-followed',function(){
  		$(this).text('✘ 取消关注');
  		$(this).addClass('follow-green-btn-cancelled');
  	})
  	$(document).on('mouseout','.follow-green-btn-followed',function(){
  		$(this).text('✔ 已关注')
  		$(this).removeClass('follow-green-btn-cancelled');
  	})
  	$(document).on('click','.follow-green-btn-cancelled',function(){
  		$(this).css({
  			'border':'none',
  			'background':'#42c02e',
  			'color':'white'
  		})
  		$(this).text('✔ 已关注');
  		$(this).removeClass('follow-green-btn-cancelled');
  		$(this).removeClass('follow-green-btn-followed');
  	})
  	/* 动态添加字数判断 */
  	function fontLength(){
		$('.follow-user-banner-txt').each(function(){
		    var max_width=26;
		    if ($.trim($(this).text()).length>max_width) {
		      $(this).text($.trim($(this).text()).substring(0,max_width));
		      $(this).html($(this).html()+'...');
		    }
	  	})
	  	$('.follow-recent-update-menu ul li a').each(function(){
		    var max_width=10;
		    if ($.trim($(this).text()).length>max_width) {
		      $(this).text($.trim($(this).text()).substring(0,max_width));
		      $(this).html($(this).html()+'...');
		    }
	  	})	
	}	
  	$('.fans-load-more').click(function(){
  		$(this).before('<div class="col-xs-4"><div href="javascript:void(0);" class="follow-user-banner"><span class="follow-user-banner-name">测试用户</span><a href="javascript:void(0);" class="follow-user-banner-head"></a><span class="follow-user-banner-txt">一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂</span><a href="javascipt:void(0);" class="follow-green-btn">+ 关注</a><div class="follow-recent-update-title clearfix"><span>最近更新</span><div></div></div><div class="follow-recent-update-menu"><ul class="clearfix"><li><a href="javascript:void(0);">年轻人为什么不努力？...</a></li><li><a href="javascript:void(0);">年轻人为什么不努力？...</a></li><li><a href="javascript:void(0);">一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂</a></li></ul></div></div></div><div class="col-xs-4"><div href="javascript:void(0);" class="follow-user-banner"><span class="follow-user-banner-name">测试用户</span><a href="javascript:void(0);" class="follow-user-banner-head"></a><span class="follow-user-banner-txt">一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂</span><a href="javascipt:void(0);" class="follow-green-btn">+ 关注</a><div class="follow-recent-update-title clearfix"><span>最近更新</span><div></div></div><div class="follow-recent-update-menu"><ul class="clearfix"><li><a href="javascript:void(0);">年轻人为什么不努力？...</a></li><li><a href="javascript:void(0);">年轻人为什么不努力？...</a></li><li><a href="javascript:void(0);">一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂</a></li></ul></div></div></div><div class="col-xs-4"><div href="javascript:void(0);" class="follow-user-banner"><span class="follow-user-banner-name">测试用户</span><a href="javascript:void(0);" class="follow-user-banner-head"></a><span class="follow-user-banner-txt">一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂</span><a href="javascipt:void(0);" class="follow-green-btn">+ 关注</a><div class="follow-recent-update-title clearfix"><span>最近更新</span><div></div></div><div class="follow-recent-update-menu"><ul class="clearfix"><li><a href="javascript:void(0);">年轻人为什么不努力？...</a></li><li><a href="javascript:void(0);">年轻人为什么不努力？...</a></li><li><a href="javascript:void(0);">一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂</a></li></ul></div></div></div>');
  		fontLength();
  	})
  	$('.follow-load-more').click(function(){
  		$(this).before('<div class="col-xs-4"><div href="javascript:void(0);" class="follow-user-banner"><span class="follow-user-banner-name">测试用户</span><a href="javascript:void(0);" class="follow-user-banner-head"></a><span class="follow-user-banner-txt">一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂</span><a href="javascipt:void(0);" class="follow-green-btn">+ 关注</a><div class="follow-recent-update-title clearfix"><span>最近更新</span><div></div></div><div class="follow-recent-update-menu"><ul class="clearfix"><li><a href="javascript:void(0);">年轻人为什么不努力？...</a></li><li><a href="javascript:void(0);">年轻人为什么不努力？...</a></li><li><a href="javascript:void(0);">一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂</a></li></ul></div></div></div><div class="col-xs-4"><div href="javascript:void(0);" class="follow-user-banner"><span class="follow-user-banner-name">测试用户</span><a href="javascript:void(0);" class="follow-user-banner-head"></a><span class="follow-user-banner-txt">一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂</span><a href="javascipt:void(0);" class="follow-green-btn">+ 关注</a><div class="follow-recent-update-title clearfix"><span>最近更新</span><div></div></div><div class="follow-recent-update-menu"><ul class="clearfix"><li><a href="javascript:void(0);">年轻人为什么不努力？...</a></li><li><a href="javascript:void(0);">年轻人为什么不努力？...</a></li><li><a href="javascript:void(0);">一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂</a></li></ul></div></div></div><div class="col-xs-4"><div href="javascript:void(0);" class="follow-user-banner"><span class="follow-user-banner-name">测试用户</span><a href="javascript:void(0);" class="follow-user-banner-head"></a><span class="follow-user-banner-txt">一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂</span><a href="javascipt:void(0);" class="follow-green-btn">+ 关注</a><div class="follow-recent-update-title clearfix"><span>最近更新</span><div></div></div><div class="follow-recent-update-menu"><ul class="clearfix"><li><a href="javascript:void(0);">年轻人为什么不努力？...</a></li><li><a href="javascript:void(0);">年轻人为什么不努力？...</a></li><li><a href="javascript:void(0);">一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂一个有趣的灵魂</a></li></ul></div></div></div>');
  		fontLength();
  	})
    fontLength();
})
