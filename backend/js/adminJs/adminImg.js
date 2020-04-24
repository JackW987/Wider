$(function(){
	$('.show-img-box li .mask').hover(function(){
		$(this).stop().animate({
			'opacity':1
		},150)
	},function(){
		$(this).stop().animate({
			'opacity':0
		},150)
	})
	$('.show-img-box li img').click(function(){
		var con = $(this).closest('li');
		layer.photos({
			photos:con,
			anim:5
		})
	})
	$('.btn-delete').click(function(){
		var thisEl=$(this);
		layer.confirm('是否删除本条图集？', {
		  btn: ['确定','取消'] //按钮
		}, function(){
		  layer.msg('删除成功');
		  thisEl.closest('tr').remove();
		});
	})
})