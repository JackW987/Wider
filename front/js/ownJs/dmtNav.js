$(function() {
    /* 移入鼠标改变样式按钮  */
    $('.nav-btn1 img').mousemove(function() {
        if ($(this).attr('src') != 'images/nav/home-active.png') {
            $(this).attr('src', 'images/nav/home-active.png');
        }
    })
    $('.nav-btn2 img').mousemove(function() {
        if ($(this).attr('src') != 'images/nav/all-active.png') {
            $(this).attr('src', 'images/nav/all-active.png');
        }
    })
    $('.nav-btn3 img').mousemove(function() {
        if ($(this).attr('src') != 'images/nav/trust-active.png') {
            $(this).attr('src', 'images/nav/trust-active.png');
        }
    })
    $('.nav-btn4 img').mousemove(function() {
        if ($(this).attr('src') != 'images/nav/user-active.png') {
            $(this).attr('src', 'images/nav/user-active.png');
        }
    })
    $('.nav-btn5 img').mousemove(function() {
        if ($(this).attr('src') != 'images/nav/search-active.png') {
            $(this).attr('src', 'images/nav/search-active.png');
        }
    })
    /* 注销样式 */
    $('.nav-user-portrait').mouseover(function() {
        $(this).find('div').css({
            display: 'block'
        })
    })
    $('.nav-user-portrait').mouseout(function() {
        $(this).find('div').css({
            display: 'none'
        })
    })
    /* 弹窗样式 */
    $('.nav-btn4').click(function() {
        $('.box').addClass('box-display');
        $('.mask').addClass('box-display');
        $('.box').addClass('fass');
        $('.mask').addClass('carbuda');
        $('body').addClass('scroll-disabled');
    })
    $('.nav-response-user').click(function() {
        $('.box').addClass('box-display');
        $('.mask').addClass('box-display');
        $('.box').addClass('fass');
        $('.mask').addClass('carbuda');
        $('body').addClass('scroll-disabled');
    })
    $('.mask').click(function() {
        $('.box').removeClass('box-display');
        $('.mask').removeClass('box-display');
        $('.box').removeClass('fass');
        $('.mask').removeClass('carbuda');
        $('body').removeClass('scroll-disabled');
        $('.register-move-box').css({
            left: '-400px'
        })
        $('.login-move-box').css({
            right: '-400px'
        })
        $('.user-banner').animate({
            right: -300,
            opacity: 0
        }, 300)
    })
    $('.box-close-btn').click(function() {
        $('.box').removeClass('box-display');
        $('.mask').removeClass('box-display');
        $('.box').removeClass('fass');
        $('.mask').removeClass('carbuda');
        $('body').removeClass('scroll-disabled');
        $('.register-move-box').css({
            left: '-400px'
        })
        $('.login-move-box').css({
            right: '-400px'
        })
    })
    $('.register-btn').click(function() {
        $('.register-move-box').animate({
            left: '0px'
        })
    })
    $('.login-btn').click(function() {
        $('.login-move-box').animate({
            right: '0px'
        })
    })
    $('.register-btn img').mousemove(function() {
        if ($(this).attr('src') != 'images/nav/register-active.png') {
            $(this).attr('src', 'images/nav/register-active.png');
        }
    })
    $('.register-btn img').mouseout(function() {
        $(this).attr('src', 'images/nav/register.png');
    })
    $('.login-btn img').mousemove(function() {
        if ($(this).attr('src') != 'images/nav/logIn-active.png') {
            $(this).attr('src', 'images/nav/logIn-active.png');
        }
    })
    $('.login-btn img').mouseout(function() {
        $(this).attr('src', 'images/nav/logIn.png');
    })
    $('.nav-response-user').mouseover(function() {
        $(this).attr('src', 'images/nav/personal-active.png');
    })
    $('.nav-response-user').mouseout(function() {
        $(this).attr('src', 'images/nav/personal.png');
    })
    /* 用户中心迷你版 */
    $('.small-user-banner-btn').click(function() {
        $('.user-banner').animate({
            right: 0,
            opacity: 1
        }, 300)
        $('.mask').addClass('box-display');
        $('.mask').addClass('carbuda');
        $('body').addClass('scroll-disabled');
    })
    $('.mini-user-center-btn2').click(function() {
        $('.user-banner').animate({
            right: 0,
            opacity: 1
        }, 300)
        $('.mask').addClass('box-display');
        $('.mask').addClass('carbuda');
        $('body').addClass('scroll-disabled');
    })
    $('.mini-information-btn').click(function() {
        $('.user-banner').animate({
            right: 0,
            opacity: 1
        }, 300)
        $('.mask').addClass('box-display');
        $('.mask').addClass('carbuda');
        $('body').addClass('scroll-disabled');
    })
    $('.user-banner-close').click(function() {
        $('.user-banner').animate({
            right: -300,
            opacity: 0
        })
        $('.mask').removeClass('.box-display');
        $('.mask').removeClass('carbuda');
        $('body').removeClass('scroll-disabled');
    })

    /* 用户中心迷你版 分页代码 */
    $('.user-banner-paging div a').click(function() {
        $('.user-banner-paging div a').removeClass('paging-active');
        $(this).addClass('paging-active');
    })
    $('.user-banner-paging div a').eq(0).click(function() {
        $('.user-banner-bottom').css({
            display: 'none'
        })
        $('.user-banner-bottom').removeClass('delete-active');
        $('.user-banner-letter').css({
            display: 'block'
        }).addClass('delete-active');
    })
    $('.user-banner-paging div a').eq(1).click(function() {
        $('.user-banner-bottom').css({
            display: 'none'
        })
        $('.user-banner-bottom').removeClass('delete-active');
        $('.user-banner-comment').css({
            display: 'block'
        }).addClass('delete-active');
    })
    $('.user-banner-paging div a').eq(2).click(function() {
        $('.user-banner-bottom').css({
            display: 'none'
        })
        $('.user-banner-bottom').removeClass('delete-active');
        $('.user-banner-notice').css({
            display: 'block'
        }).addClass('delete-active');
    })
    var userBottomHeight = $('.user-banner').height() - 110;
    $('.user-banner-bottom').height(userBottomHeight);
    /* 注册登录功能样式 */
    $('.register-box-move-left').click(function() {
        $('.register-move-box').animate({
            left: '-400'
        })
    })
    $('.login-move-box-right').click(function() {
        $('.login-move-box').animate({
            right: '-400'
        })
    })
    var registerPd = true;
    $('.change-register-way a').click(function() {
        $('.register-move-box input').val('');
        if (registerPd == true) {
            $(this).text('邮箱注册');
            $('#wider-email').remove();
            $('.register-fix-1').append('<input type="text" placeholder="手机账号" id="wider-phone" class="register-change-input" maxlength="11"> ');
            registerPd = false;
        } else {
            $(this).text('手机注册');
            $('#wider-phone').remove();
            $('.register-fix-1').append('<input type="text" placeholder="邮箱账号" id="wider-email" class="register-change-input" maxlength="18"> ');
            registerPd = true;
        }
    })
    /* 判定输入框输入的账号手机号是否正确 */
    /* 邮箱验证的正则 */
    var emailCheck = /^[a-zA-Z0-9_-]+((@(yeah)+(\.(net)))|(@(163|126|qq|sina)+(\.(cn|com)+)))+$/
    $(document).on('focus', '#wider-email', function() {
        $('.register-remind-box').css({
            display: 'none',
        })
        $('.register-remind-box').text('');
        $('.register-remind-box').removeClass('animated');
        $('.register-remind-box').removeClass('.fadeInDown');
    })
    $(document).on('blur', '#wider-email', function() {
        var emailStr = $('.register-change-input').val().toLowerCase();
        if (emailCheck.test(emailStr)) {
            $('.register-remind-box').css({
                display: 'block',
                color: 'green'
            })
            $('.register-remind-box').text('邮箱格式正确');
            $('.register-remind-box').addClass('animated');
            $('.register-remind-box').addClass('fadeInDown');
            useraccount = true;
        } else {
            $('.register-remind-box').css({
                display: 'block',
                color: 'red'
            })
            $('.register-remind-box').text('邮箱格式错误');
            $('.register-remind-box').addClass('animated');
            $('.register-remind-box').addClass('fadeInDown');
        }
    })
    /* 手机账号验证的正则 */
    var phoneCheck = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    $(document).on('focus', '#wider-phone', function() {
        $('.register-remind-box').css({
            display: 'none',
        })
        $('.register-remind-box').text('');
        $('.register-remind-box').removeClass('animated');
        $('.register-remind-box').removeClass('.fadeInDown');
    })
    $(document).on('blur', '#wider-phone', function() {
        var phoneStr = $('.register-change-input').val();
        if (phoneCheck.test(phoneStr)) {
            $('.register-remind-box').css({
                display: 'block',
                color: 'green'
            })
            $('.register-remind-box').text('手机格式正确');
            $('.register-remind-box').addClass('animated');
            $('.register-remind-box').addClass('fadeInDown');
            useraccount = true;
        } else {
            $('.register-remind-box').css({
                display: 'block',
                color: 'red'
            })
            $('.register-remind-box').text('手机格式错误');
            $('.register-remind-box').addClass('animated');
            $('.register-remind-box').addClass('fadeInDown');
        }
    })
    /* 判定密码是否可用 */
    var passwordCheck = /^[0-9a-zA-Z_]{6,18}$/;
    $('.register-password-text').focus(function() {
        $('.register-password-remind-box').css({
            display: 'none',
        })
        $('.register-password-remind-box').text('');
        $('.register-password-remind-box').removeClass('animated');
        $('.register-password-remind-box').removeClass('.fadeInDown');
    })
    $('.register-password-text').blur(function() {
        var pswdStr = $('.register-password-text').val().toLowerCase();
        if (passwordCheck.test(pswdStr)) {
            $('.register-password-remind-box').css({
                display: 'block',
                color: 'green'
            })
            $('.register-password-remind-box').text('密码格式正确');
            $('.register-password-remind-box').addClass('animated');
            $('.register-password-remind-box').addClass('fadeInDown');
        } else {
            $('.register-password-remind-box').css({
                display: 'block',
                color: 'red'
            })
            $('.register-password-remind-box').text('密码格式错误');
            $('.register-password-remind-box').addClass('animated');
            $('.register-password-remind-box').addClass('fadeInDown');
        }
    })
    /* 登录功能账号实现输入框 */
    $('.login-username').focus(function() {
        $('.login-remind-username-box').css({
            display: 'none',
        })
        $('.login-remind-username-box').text('');
        $('.login-remind-username-box').removeClass('animated');
        $('.login-remind-username-box').removeClass('.fadeInDown');
    })
    $('.login-username').blur(function() {
        var str = $('.login-username').val();
        if (str == "") {
            $('.login-remind-username-box').css({
                display: 'block',
                color: 'red'
            })
            $('.login-remind-username-box').text('账号不可为空');
            $('.login-remind-username-box').addClass('animated');
            $('.login-remind-username-box').addClass('fadeInDown');
        }
    })
    /* 登录功能密码实现输入框 */
    $('.login-password').focus(function() {
        $('.login-remind-password-box').css({
            display: 'none',
        })
        $('.login-remind-password-box').text('');
        $('.login-remind-password-box').removeClass('animated');
        $('.login-remind-password-box').removeClass('.fadeInDown');
    })
    $('.login-password').blur(function() {
        var str = $('.login-password').val();
        if (str == "") {
            $('.login-remind-password-box').css({
                display: 'block',
                color: 'red'
            })
            $('.login-remind-password-box').text('密码不可为空');
            $('.login-remind-password-box').addClass('animated');
            $('.login-remind-password-box').addClass('fadeInDown');
        }
    })
    /* 密码可见功能实现 */
    var passwordPd = true;
    $('.password-decoration').click(function() {
        if (passwordPd == true) {
            $('.register-password-text').attr('type', 'text');
            $('.password-decoration img').attr('src', 'images/nav/password-visible.png');
            passwordPd = false;
        } else {
            $('.register-password-text').attr('type', 'password');
            $('.password-decoration img').attr('src', 'images/nav/password-hidden.png');
            passwordPd = true;
        }
    })
    /* 手机正则 */
    $('.change-register-way a').click(function() {
        $('.register-password-remind-box').css({
            display: 'none',
        })
        $('.register-password-remind-box').text('');
        $('.register-password-remind-box').removeClass('animated');
        $('.register-password-remind-box').removeClass('.fadeInDown');
        $('.register-remind-box').css({
            display: 'none',
        })
        $('.register-remind-box').text('');
        $('.register-remind-box').removeClass('animated');
        $('.register-remind-box').removeClass('.fadeInDown');
    })
    /* 发送验证码出现倒计时功能 */
    var countDown = 59;
    var countTimer;

    function timeCount() {
        if (countDown == 0) {
            $('.verification').css({
                display: 'block'
            })
            $('.verification-count').css({
                display: 'none'
            })
            clearInterval(countTimer);
            countDown = 59;
        } else {
            $('.verification-count').text("重新发送 " + countDown);
            countDown--;
        }
    }
    /* 发送验证码弹框 */
    $('.verification').click(function() {
        var phoneStr = $('.register-change-input').val();
        var emailStr = $('.register-change-input').val().toLowerCase();
        var useraccount = phoneCheck.test(phoneStr) || emailCheck.test(emailStr)
        if (useraccount == false) {
            layer.alert('账号格式错误', {
                icon: 5,
                skin: 'layer-ext-moon'
            })
        }
        if (useraccount == true) {
            $(this).css({
                display: 'none'
            })
            $('.verification-count').text("重新发送 " + 60);
            $('.verification-count').css({
                display: 'block'
            })
            countTimer = setInterval(function() {
                timeCount();
            }, 1000);
        }
    })
    /* 响应按钮事件 */
    var navBoolean = true;
    $('.nav-response-menu').click(function() {
        if (navBoolean == true) {
            $('.nav-response-box').stop().animate({
                height: '300px'
            })
            navBoolean = false;
        } else if (navBoolean == false) {
            $('.nav-response-box').stop().animate({
                height: '0px'
            })
            navBoolean = true;
        }
    })
    /* 搜索框功能 */
    var searchBoolean = true;
    $('.search-btn').click(function(event) {
        event.stopPropagation();
        if (searchBoolean) {
            $('.nav-search-box input').stop().animate({
                width: 120
            });
            searchBoolean = false;
        } else {
            $('.nav-search-box input').stop().animate({
                width: 0
            });
            searchBoolean = true;
        }
    })
    $('.nav-search-box input').click(function(event) {
        4
        event.stopPropagation();
    })
    $(document).click(function(event) {
        event.stopPropagation();
        $('.nav-search-box input').stop().animate({
            width: 0
        });
        searchBoolean = true;
    })
    /* 迷你用户中心的字数判断 */
    $('.comment-article-other-text').each(function() {
        var max_width = 40;
        if ($(this).text().length > max_width) {
            $(this).text($(this).text().substring(0, max_width));
            $(this).html($(this).html() + '...');
        }
    })
    $('.comment-article-myself-text').each(function() {
        var max_width = 40;
        if ($(this).text().length > max_width) {
            $(this).text($(this).text().substring(0, max_width));
            $(this).html($(this).html() + '...');
        }
    })
    $('.notice-myself-comment').each(function() {
        var max_width = 96;
        if ($(this).text().length > max_width) {
            $(this).text($(this).text().substring(0, max_width));
            $(this).html($(this).html() + '...');
        }
    })
    /*  注册按钮判断 */
    $('.register-finish-btn').click(function() {
        layer.alert('注册成功', {
            icon: 1,
            skin: 'layer-ext-moon'
        })
    })

    /* 在线聊天*/
    var E = window.wangEditor
    var editor = new E('#online-chat-input-text')
    // 或者 var editor = new E( document.getElementById('#editor') )
    editor.customConfig.menus = [
        'bold',
        'emoticon',  // 表情
    ]
    editor.create();
    /* 发送功能 */
    $('.send-msg-btn').click(function(){
        var editorTxt = editor.txt.html();
        var editorTxtPd=editor.txt.text();
        if (editorTxtPd=='') {
            layer.msg('发送内容不能为空');
        }
        else{
          $('.online-chat-text ul').append('<li class="online-chat-text-myArticle clearfix"><a href="javascript:void(0);"><img src="images/nav/admin.jpg" /><i></i></a><div class="clearfix">'+editorTxt+'</div></li>');
            editor.txt.clear()  
        }
    })
    /* 评论区功能 */
    $('.user-banner-comment a').click(function() {
        layer.open({
            type: 1,
            closeBtn: 1,
            shift: 0,
            shadeClose: true,
            resize: false,
            title: '评论',
            area: ['700px', '654px'],
            content: $('.alert-area-comment'),
        })
    })
    $('.user-banner-letter a').click(function() {
        layer.open({
            type: 1,
            closeBtn: 1,
            shift: 0,
            shadeClose: true,
            resize: false,
            title: '评论',
            area: ['auto', 'auto'],
            content: $('.online-chat'),
        })
    })
    $('.user-banner-notice a').click(function() {
        layer.open({
            type: 1,
            closeBtn: 1,
            shift: 0,
            shadeClose: true,
            resize: false,
            title: '通知',
            area: ['700px', '640px'],
            content: $('.alert-area-notice'),
        })
    })
    /* 红点修饰方法 */
    if ($('.small-user-banner-btn-decoration').text().length > 2) {
        $('.small-user-banner-btn-decoration').text('99+')
    }
    var alertCommentBoolean = true;
    /* 爱心点击事件 */
    $(document).on('click','.love-homepage-btn',function() {
        if ($(this).hasClass('liked')) {
            $(this).removeClass('liked');
            $(this).parent('a').next('span').css({
                color: 'black'
            })
            var spanDeText = parseInt($(this).parent('a').next('span').text()) - 1;
            $(this).parent('a').next('span').text(spanDeText);
        } else {
            $(this).addClass('liked');
            $(this).parent('a').next('span').css({
                color: 'red'
            })
            var spanInText = parseInt($(this).parent('a').next('span').text()) + 1;
            $(this).parent('a').next('span').text(spanInText);
        }
    });
    var loveCommentBoolean = true;
    $(document).on('click','.love-comment-btn',function() {
        if ($(this).hasClass('liked')) {
            $(this).removeClass('liked');
            $(this).parent('a').next('span').css({
                color: '#0c73c2'
            })
            var spanDeText = parseInt($(this).parent('a').next('span').text()) - 1;
            $(this).parent('a').next('span').text(spanDeText);
        } else {
            $(this).addClass('liked');
            $(this).parent('a').next('span').css({
                color: 'red'
            })
            var spanInText = parseInt($(this).parent('a').next('span').text()) + 1;
            $(this).parent('a').next('span').text(spanInText);
        }
    });
    /* 登录功能 */

    $('.login-finish-btn').click(function() {
        $('.box').removeClass('box-display');
        $('.mask').removeClass('box-display');
        $('.box').removeClass('fass');
        $('.mask').removeClass('carbuda');
        $('body').removeClass('scroll-disabled');
        $('.register-move-box').css({
            left: '-400px'
        })
        $('.login-move-box').css({
            right: '-400px'
        })
        $('.user-banner').animate({
            right: -300,
            opacity: 0
        }, 300)
        layer.msg('登录成功');
        $('.nav-login-btn-box').css({
            'display':'none'
        })
        $('.after-login-user ').css({
            'display':'block'
        })

    })
    /* 退出登录 */
    $('.login-user-cancel').click(function(){
        layer.confirm('是否退出登录状态？', {
          btn: ['确定','取消'] //按钮
        }, function(){
          $('.after-login-user').css({
            'display':'none'
          })
          $('.nav-box-logo').css({
            'display':'block'
          })
          layer.msg('退出成功');
        });
    })

    /* 删除li 标签 */
    $(document).on('mouseover','.user-banner-letter a',function () {
        $(this).find('i').css({
            display:'block'
        })
    });
    $(document).on('mouseout','.user-banner-letter a',function () {
        $(this).find('i').css({
            display:'none'
        })
    });
    $(document).on('mouseover','.user-banner-comment a',function () {
        $(this).find('i').css({
            display:'block'
        })
    });
    $(document).on('mouseout','.user-banner-comment a',function () {
        $(this).find('i').css({
            display:'none'
        })
    });
    $(document).on('mouseover','.user-banner-notice a',function () {
        $(this).find('i').css({
            display:'block'
        })
    });
    $(document).on('mouseout','.user-banner-notice a',function () {
        $(this).find('i').css({
            display:'none'
        })
    });
    /* 分享功能 */
    $(document).on('click','.icon-share-fix',function() {
        layer.open({
            type: 1,
            closeBtn: 1,
            shift: 0,
            shadeClose: true,
            resize: false,
            title: '分享到第三方平台',
            scrollbar: false,
            area: ['300px', '150px'],
            content: $('.alert-area-share'),
        })
    });
    /* 搜索框事件 */
     $(".nav-search-box input").keydown(function (e) {
        if (e.keyCode == 13) {
            $(window).attr('location','searchBrowse.html');
        }
    });
    /* 评论功能 */
    $('.comment-reply-btn').click(function() {
        if (alertCommentBoolean) {
            $(this).parents('.alert-comment-hot').find('.alert-area-comment-myself-textarea').css({
                display: 'block'
            })
            alertCommentBoolean = false;
        } else {
            $(this).parents('.alert-comment-hot').find('.alert-area-comment-myself-textarea div textarea').val("");
            $(this).parents('.alert-comment-hot').find('.alert-area-comment-myself-textarea').css({
                display: 'none'
            })
            alertCommentBoolean = true;
        }
    })
    $('.add-alert-area-comment-textarea a').click(function() {
        if ($(this).parents('.alert-area-comment-textarea').find('textarea').val() == "") {
            layer.msg('内容不可为空')
        } else {
            layer.msg('评论成功');
            $(this).parents('.alert-area-comment-textarea').find('textarea').val("");
        }
    })
    $('.alert-area-comment-myself-textarea div a').click(function() {
        if ($(this).parents('.alert-comment-hot').find('.alert-area-comment-myself-textarea div textarea').val() == "") {
            layer.msg('内容不可为空')
        } else {
            layer.msg('评论成功');
            $(this).parents('.alert-comment-hot').find('.alert-area-comment-myself-textarea div textarea').val("")
            $(this).parents('.alert-area-comment-myself-textarea').css({
                display: 'none'
            })
            alertCommentBoolean = true;
        }
    })
    $('.sina-share-btn').click(function() {
        shareSina();
    })
    $('.douban-share-btn').click(function(){
        shareDouban();
    })
    $('.qq-share-btn').click(function(){
        shareQzone();
    })

})
$(window).resize(function() {
    var userBottomHeight = $('.user-banner').height() - 110;
    $('.user-banner-bottom').height(userBottomHeight);
})

function shareDouban() {
    var d = document,
        e = encodeURIComponent,
        s1 = window.getSelection,
        s2 = d.getSelection,
        s3 = d.selection,
        s = s1 ? s1() : s2 ? s2() : s3 ? s3.createRange().text : '',
        r = 'https://www.douban.com/recommend/?url=' + e(d.location.href) + '&title=' + e(d.title) + '&sel=' + e(s) + '&v=1',
        w = 600,
        h = 400,
        x = function() {
            if (!window.open(r, 'douban', 'toolbar=0,resizable=1,scrollbars=yes,status=1,width=' + w + ',height=' + h + ',left=' + (screen.width - w) / 2 + ',top=' + (screen.height - h) / 2)) location.href = r + '&r=1'
        };
    if (/Firefox/.test(navigator.userAgent)) {
        setTimeout(x, 0)
    } else {
        x()
    }
}

function shareSina() {
    var _url = 'file%3A%2F%2F%2FC%3A%2FUsers%2FAdministrator%2FDesktop%2F%25E5%25A4%259A%25E5%25AA%2592%25E4%25BD%2593%25E5%25A4%25A7%25E8%25B5%259B%2Fhomepage.html'
    var _type = 'icon';
    var _ralateUid = 3782945823;
    var _language = 'zh_cn';
    var _appkey = 2405277947;
    var _pic = 'http%3A%2F%2Fonxrsxn3l.bkt.clouddn.com%2Fimage%2Favatar%2Fdefault.png';
    var _searchPic = true;
    var _style = 'simple#_loginLayer_1499650148831'
    var _shareUrl = 'http://service.weibo.com/share/share.php?';
    _shareUrl += 'url=' + _url;
    _shareUrl += '&type=' + _type;
    _shareUrl += '&ralateUid=' + _ralateUid;
    _shareUrl += '&language=' + _language;
    _shareUrl += '&appkey=' + _appkey;
    _shareUrl += '&pic=' + _pic;
    _shareUrl += '&searchPic=' + _searchPic;
    _shareUrl += '&style=' + _style;
    var _width = 600 + 'px';
    var _height = 400 + 'px';
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    window.open(_shareUrl, '_blank', 'width=' + _width + ',height=' + _height + ',top=' + (screenHeight - _height) / 2 + ',left=' + (screenWidth - _width) / 2 + ',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
}
function shareQzone(){
    var _url = 'www.upheart.cn';
    var _showcount = '0'
    var _desc = '我正在wider观看热门话题';
    var _summary = '大家可以一起来看看';
    var _title = '测试内容';
    var _site = 'wider美丽乡村';
    var _pic = '';
    var _width= '800px';
    var _height= '500px';

    var _shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
    _shareUrl += 'url=' + encodeURIComponent(_url||document.location);   //参数url设置分享的内容链接|默认当前页location
    _shareUrl += '&showcount=' + _showcount||0;      //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
    _shareUrl += '&desc=' + encodeURIComponent(_desc||'分享的描述');    //参数desc设置分享的描述，可选参数
    _shareUrl += '&summary=' + encodeURIComponent(_summary||'分享摘要');    //参数summary设置分享摘要，可选参数
    _shareUrl += '&title=' + encodeURIComponent(_title||document.title);    //参数title设置分享标题，可选参数
    _shareUrl += '&site=' + encodeURIComponent(_site||'');   //参数site设置分享来源，可选参数
    _shareUrl += '&pics=' + encodeURIComponent(_pic||'');   //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
    window.open(_shareUrl,'_blank','width='+_width+',height='+_height+',top='+(screen.height-_height)/2+',left='+(screen.width-_width)/2+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
}


