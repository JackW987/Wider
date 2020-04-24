$(function(){
	/* 图文板块的字数判断*/
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
  /* 关注按钮事件 */
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