$(function(){
	$('.person-banner-nav li a').click(function(){
		$('.person-banner-nav li a').removeClass('white-bg');
		$(this).addClass('white-bg');
	})
	var phoneCheck = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var emailCheck = /^[a-zA-Z0-9_-]+((@(yeah)+(\.(net)))|(@(163|126|qq|sina)+(\.(cn|com)+)))+$/
	/* 分页 */
	$('.person-msg-btn').click(function(){
		$('.person-banner-mainbox').css({
			'display':'none'
		})
		$('.person-msg-box').css({
			'display':'block'
		})
	})

	$('.base-msg-btn').click(function(){
		$('.person-banner-mainbox').css({
			'display':'none'
		})
		$('.base-msg-box').css({
			'display':'block'
		})
	})
	/* 正则表达式查询输入内容 */
	$('.email-input').focus(function(){
		$(this).attr('placeholder','请输入你常用的邮箱');
	})
	$('.phone-input').focus(function(){
		$(this).attr('placeholder','请输入你常用的手机');
	})
	$('.email-input').blur(function(){
		var emailStr = $(this).val().toLowerCase();
		if (!emailCheck.test(emailStr)) {
			layer.alert('邮箱格式错误',{
				icon:2,
			})
			$(this).val('');
		}
	})
	$('.phone-input').blur(function(){
		var phoneStr = $(this).val().toLowerCase();
		if (!phoneCheck.test(phoneStr)) {
			layer.alert('手机格式错误',{
				icon:2,
			})
			$(this).val('');
		}
	})
	$('.change-email-btn').click(function(){
		if ($(this).prev('input').val()=='') {
			layer.msg('输入内容不能为空')
		}
		else{
			layer.open({
				type:1,
				title:'绑定邮箱',
				skin:'layerui-layer-rim',	
	            closeBtn: 1,
	            shift: 0,
	            shadeClose: true,
	            resize: false,
				area: ['auto', 'auto'],
            	content: $('.code-box'),
			})
		}
	})
	$('.change-phone-btn').click(function(){
		if ($(this).prev('input').val()=='') {
			layer.msg('输入内容不能为空')
		}
		else{
			layer.open({
				type:1,
				title:'绑定手机',
				skin:'layerui-layer-rim',	
	            closeBtn: 1,
	            shift: 0,
	            shadeClose: true,
	            resize: false,
				area: ['auto', 'auto'],
            	content: $('.code-box'),
			})
		}
	})
	$('.change-password-btn').click(function(){
		layer.open({
				type:1,
				title:'修改密码',
				skin:'layerui-layer-rim',	
	            closeBtn: 1,
	            shift: 0,
	            shadeClose: true,
	            resize: false,
				area: ['auto', 'auto'],
            	content: $('.password-change-box'),
			})
	})
	$('.save-msg-btn').click(function(){
		layer.msg('保存成功')
	})
	$('.binding-btn li a').click(function(){
		$(this).text('✔ 已绑定');
		$(this).addClass('binded-btn');
	})
	$(document).on('mouseover', '.binded-btn', function() {
            $(this).text('✘ 取消绑定');
  			$(this).addClass('cancel-binded');
  			$(this).removeClass('binded-btn');
    })
    $(document).on('mouseout', '.cancel-binded', function() {
            $(this).text('✔ 已绑定');
  			$(this).removeClass('cancel-binded');
  			$(this).addClass('binded-btn');
    })
    $(document).on('click', '.cancel-binded', function() {
            $(this).text('绑定微博 ＞');
            $(this).removeClass('cancel-binded');
  			$(this).removeClass('binded-btn');
    })
    $('.code-input-send').click(function(){
    	 $(this).css({
             display: 'none'
         })
         $('.code-input-send-count').text("重新发送 " + 60);
         $('.code-input-send-count').css({
             display: 'block'
         })
         countTimer = setInterval(function() {
             timeCount();
         }, 1000);
    })
  
    /* 点击验证码出现倒计时 */
    	var countDown = 59;
        var countTimer;

        function timeCount() {
            if (countDown == 0) {
                $('.code-input-send').css({
                    display: 'block'
                })
                $('.code-input-send-count').css({
                    display: 'none'
                })
                clearInterval(countTimer);
                countDown = 59;
            } else {
                $('.code-input-send-count').text("重新发送 " + countDown);
                countDown--;
            }
        }
    /* 修改密码 */
    var passwordCheck = /^[0-9a-zA-Z_]{6,18}$/;
    
    $('.password-change-confirm').click(function(){
    	var newPassword=$('.new-password').val();
    	var beforePassword=$('.password-input').attr('placeholder');
    	var changeBeforePassword=$('.before-pswd').val();
    	if (beforePassword==changeBeforePassword && passwordCheck.test(newPassword)) {
           	layer.msg('修改成功')
        } 
        else{
        	layer.msg('填写有误')
        }
    })
})
