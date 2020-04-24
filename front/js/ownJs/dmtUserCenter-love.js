$(function(){
	/* 图文板块的字数判断*/
  $('.img-txt-main-txt').each(function(){
    var max_width=140;
    if ($(this).text().length>max_width) {
      $(this).text($(this).text().substring(0,max_width));
      $(this).html($(this).html()+'...');
    }
  })
  /* 图集瀑布流 */
  $('.item-container').masonry({
        //options
        "itemSelector":'.item',
        "isFitWidth": true
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
  /* 按钮样式 */ 
  var mainBoxHeight=$('.img-txt-atlas').height()+100;
  $('.hot-banner-main-box').height(mainBoxHeight)
  $('.hot-banner-small-nav div a').click(function(){
  	$('.hot-banner-small-nav div a').removeClass('nav-btn-active');
  	$(this).addClass('nav-btn-active');
  })
  /* 鼠标移动样式 */
  $('.photo-atlas-img-mask').mouseover(function(){
  	$(this).stop().animate({
  		opacity:1
  	},300)
  })
  $('.photo-atlas-img-mask').mouseout(function(){
  	$(this).stop().animate({
  		opacity:0
  	},300)
  })
  /* 点击淡入淡出样式 */
  $('.hot-photo-btn').click(function(){
  	var mainBoxHeight=$('.photo-atlas').height()+100;
  	$('.hot-banner-main-box').height(mainBoxHeight);
	$('.img-txt-atlas').removeClass('fadeInLeft')
  	$('.img-txt-atlas').addClass('fadeOutLeft');
  	$('.photo-atlas').removeClass('fadeOutRight');
  	$('.photo-atlas').addClass('fadeInRight');
  })
  $('.hot-imgTxt-btn').click(function(){
  	var mainBoxHeight=$('.img-txt-atlas').height()+100;
  	$('.hot-banner-main-box').height(mainBoxHeight);

  	$('.img-txt-atlas').removeClass('fadeOutLeft');
  	$('.img-txt-atlas').addClass('fadeInLeft');
  	$('.photo-atlas').removeClass('fadeInRight');
  	$('.photo-atlas').addClass('fadeOutRight');
  })
  	/* 雷达图 */
  	var myChart = echarts.init(document.getElementById('Radar-map'));
	  	option = {
	    title: {
	        text: ''
	    },
	    tooltip: {},
	    radar: {
	        // shape: 'circle',
	        name: {
	        	textStyle:{
	        		color:'white'
	        	}
	        },
	        indicator: [
	           { name: '风景名胜', max: 100},
	           { name: '吃货', max: 100},
	           { name: '探究古地', max: 100},
	           { name: '夏日饮品', max: 100},
	           { name: '朋友', max: 100},
	           { name: '疯狂一场', max: 100}
	        ]
	    },
	    series: [{
	        name: '预算 vs 开销',
	        type: 'radar',
	        // areaStyle: {normal: {}},
	        itemStyle: {normal: {
	        	color:'pink',
	        	areaStyle: {
	        		type: 'normal',
	        		color:'#fe4f86'
	        	},
	        	lineStyle:{
	        		color:'#fe4f86'
	        	}
	        }},
	        data : [
	            {
	                value : [20, 30, 70, 60, 40, 50],
	                name : '近期热门标签',
	            },
	        ]
	    }]
	};
	myChart.setOption(option);

})