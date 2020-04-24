$(function(){
	var mySwiper = new Swiper('.swiper-container',{
		autoplay : 5000,//可选选项，自动滑动
		loop : true,//可选选项，开启循环
		simulateTouch : false,//禁用鼠标拖动功能
		effect : 'fade',
		fade: {
		  crossFade: true,
		}
	})
	$('.img-txt-main-txt').each(function(){
    var max_width=140;
    if ($(this).text().length>max_width) {
      $(this).text($(this).text().substring(0,max_width));
      $(this).html($(this).html()+'...');
    }
  })
  /* 爱心点击事件 */
  $('.like').click(function() {
        if ($(this).hasClass('liked')) {
            $(this).removeClass('liked');
            var spanDeText = parseInt($(this).find('span').text()) - 1;
            $(this).find('span').text(spanDeText);
        } else {
            $(this).addClass('liked');
            var spanInText = parseInt($(this).find('span').text()) +  1;
            $(this).find('span').text(spanInText);
        }
    })
  /* 关注事件 */
  $('.follow').click(function(){
    $(this).removeClass('follow');
    $(this).addClass('followed');
    $(this).text('✔ 已关注');
  })
  $(document).on('mouseover', '.followed', function() {
    $(this).addClass('followed-cancel');
    $(this).text('✘ 取消关注');
  })
  $(document).on('mouseout', '.followed', function() {
    $(this).removeClass('followed-cancel');
    $(this).text('✔ 已关注');
  })
  $(document).on('click', '.followed-cancel', function() {
    $(this).removeClass('followed');
    $(this).removeClass('followed-cancel');
    $(this).addClass('follow');
    $(this).text('+关注')
  })
})