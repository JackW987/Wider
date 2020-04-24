$(function(){
	var E = window.wangEditor
    var editorComment = new E('.editor-menu-container','.editor-container');
    editorComment.customConfig.menus = [
        'bold',
        'italic',  // 斜体
        'foreColor',  // 文字颜色
        'justify',  // 对齐方式
        'emoticon',  // 表情
        'image'
    ]
    editorComment.customConfig.zIndex = 0
    editorComment.create();
    var editorArea=$('.main-editor .w-e-text-container').find('.w-e-text');
    /* 内容处理 */
    editorArea.blur(function(){
    	var afterText=editorComment.txt.html()
    	var activeElement=$('.list-active').find('.article-active');
    	activeElement.find('.article-list-text').html(afterText);
    }) 
    /* 点击菜单高亮显示 */
    $(document).on('click','.main-menu-list li a',function(){
    	$('.main-menu-list li a').removeClass('menu-active');
    	$(this).addClass('menu-active');
    })
    /* 新建图文点击后*/
    $(document).on('click','.new-article-list li a',function(){
    	$('.new-article-list li a').removeClass('article-active');
    	$('.new-article-list li a').find('.article-set').removeClass('article-set-block')
    	$(this).addClass('article-active');
    	$(this).find('.article-set').addClass('article-set-block');
    	$('.editor-title').val($(this).find('.article-list-text-title').text());
    	var currentTxt=$(this).find('.article-list-text').html();
    	editorComment.txt.html(currentTxt);
    	if ($(this).data('beforeText')) {
    		$('.menu-add-tag-btn').removeClass('add-tag-btn-active');
    		$('.menu-selected-tag').addClass('tag-active');
    		$('.tag-active').text($(this).data('beforeText'));
    	}
    	else{
    		$('.menu-add-tag-btn').addClass('add-tag-btn-active');
    		$('.menu-selected-tag').removeClass('tag-active');
    	}
    })
   /* 已发表图文点击后 */
    $(document).on('click','.history-menu-list li a',function(){
    	$('.history-menu-list li a').removeClass('article-active');
    	$('.history-menu-list li a').find('.article-set').removeClass('article-set-block');
    	$(this).addClass('article-active');
    	$(this).find('.article-set').addClass('article-set-block');
    	$('.editor-title').val($(this).find('.article-list-text-title').text());
    	var currentTxt=$(this).find('.article-list-text').html();
    	editorComment.txt.html(currentTxt);
    	$('.menu-add-tag-btn').removeClass('add-tag-btn-active');
    	$('.menu-selected-tag').removeClass('tag-active');
    	$('.histroy-selected-tag').addClass('history-tag-active');
    	$('.histroy-selected-tag').text($(this).data('beforeText'));
    })
    /* 新建图文出现 */
    $('.new-add-btn').click(function(){
    	$('.child-menu ul').removeClass('list-active');
    	$('.new-article-list').addClass('list-active');
    	$('.history-article').removeClass('top-title-active');
    	$('.add-article-btn').addClass('top-title-active');
    	$('.histroy-selected-tag').removeClass('history-tag-active');
    	var afterText=$('.new-article-list').find('.article-active').find('.article-list-text-title').text()
    	$('.editor-title').val(afterText);
    	var currentTxt=$('.new-article-list').find('.article-active').find('.article-list-text').html();
    	editorComment.txt.html(currentTxt);
    	var showElement = $('.new-article-list').find('.article-active');
    	if (showElement.data('beforeText')) {
    	   $('.menu-add-tag-btn').removeClass('add-tag-btn-active');
    	   $('.menu-selected-tag').addClass('tag-active');
    	   $('.tag-active').text(showElement.data('beforeText'));
    	}
    	else{
    	   $('.menu-add-tag-btn').addClass('add-tag-btn-active');
    	   $('.menu-selected-tag').removeClass('tag-active');
    	}

    })
 	/* 已发表图文出现 */
    $('.history-modify-btn').click(function(){
    	$('.child-menu ul').removeClass('list-active');
    	$('.history-menu-list').addClass('list-active');
    	$('.add-article-btn').removeClass('top-title-active');
    	$('.history-article').addClass('top-title-active');
    	var afterText=$('.history-menu-list').find('.article-active').find('.article-list-text-title').text()
    	$('.editor-title').val(afterText);
    	var currentTxt=$('.history-menu-list').find('.article-active').find('.article-list-text').html();
    	editorComment.txt.html(currentTxt);
    	var showElement = $('.history-menu-list').find('.article-active');

    	if (showElement.data('beforeText')) {
    	   $('.menu-add-tag-btn').removeClass('add-tag-btn-active');
    	   $('.menu-selected-tag').addClass('tag-active');
    	   $('.tag-active').text(showElement.data('beforeText'));
    	}
    	else{
    	   $('.menu-add-tag-btn').addClass('add-tag-btn-active');
    	   $('.menu-selected-tag').removeClass('tag-active');
    	}

    })
    $(document).on('click','.add-article-btn',function(){
    	if ($('.new-article-list').find('li').length==0) {
    		$('.new-article-list').prepend('<li><a href="javascript:void(0);" class="article-active"><i class="fa fa-file article-logo"></i><i class="fa fa-cog article-set article-set-block"><ul class="action-bar"><div class="arrow-top"></div><li class="release-img-txt"><i class="fa fa-share"></i>发布图文</li><li class="delete-img-txt"><i class="fa fa-trash-o"></i>删除图文</li></ul></i><span class="article-list-text-title">无标题文章</span><span class="article-list-text"></span></a></li>')
    	}
    	else{
    		$('.new-article-list').prepend('<li><a href="javascript:void(0);" class=""><i class="fa fa-file article-logo"></i><i class="fa fa-cog article-set"><ul class="action-bar"><div class="arrow-top"></div><li class="release-img-txt"><i class="fa fa-share"></i>发布图文</li><li class="delete-img-txt"><i class="fa fa-trash-o"></i>删除图文</li></ul></i><span class="article-list-text-title">无标题文章</span><span class="article-list-text"></span></a></li>')
    	}
    })
	/* 标题动态更新 */ 
 	var editorTitle=$('.list-active').find('.article-active').find('.article-list-text-title').text();
    $('.editor-title').val(editorTitle);
   	$('.editor-title').blur(function(){
   		if ($('.list-active').find('li').length==0) {
   			$('.editor-title').val('');
   		}
   		else{
   			if ($(this).val()=='') {
	   			layer.msg('标题不可为空');
	   			$(this).val('无标题文章')
	   		}
	   		var activeElement=$('.list-active').find('.article-active');
	   		var afterText=$(this).val();
	   		activeElement.find('.article-list-text-title').text(afterText);
   		}	
   	})
   	/* 取消事件冒泡 */
   	$(document).click(function(){
   		$('.article-set').find('.action-bar').removeClass('dropdown-menu-block');
   	})
   	$(document).on('click','.article-set',function(event){
		$('.article-set').find('.action-bar').removeClass('dropdown-menu-block');
   		$(this).find('.action-bar').addClass('dropdown-menu-block');
   		event.stopPropagation(); 
   	})
   	/* 图文操作板块 */
   	/* 新建文章界面删除按钮 */
   	$(document).on('click','.delete-img-txt',function(){
   		var deleteElement=$(this).parents('li:first');
   		var nextElement=$(this).parents('li:first').siblings('li:first').find('a');
   		layer.confirm('是否删除这篇图文', {
		  btn: ['确定','取消'] //按钮
		}, function(){
		  layer.msg('删除成功', {icon: 1});
		  deleteElement.remove();
		  /* 编辑器内容动态获取 */
    	  if (nextElement.length==0) {
		  	editorComment.txt.clear();
		  	$('.editor-title').val('');
		  }
		  else{
		  	nextElement.addClass('article-active');
		  	nextElement.find('.article-set').addClass('article-set-block');
    	  	$('.editor-title').val(nextElement.find('.article-list-text-title').text());
    	  	var currentTxt=nextElement.find('.article-list-text').html();
    	  	editorComment.txt.html(currentTxt);
		  }
    	  if (nextElement.data('beforeText')) {
    		$('.menu-add-tag-btn').removeClass('add-tag-btn-active');
    		$('.menu-selected-tag').addClass('tag-active');
    		$('.tag-active').text(nextElement.data('beforeText'));
    	  }
    	  else{
    		$('.menu-add-tag-btn').addClass('add-tag-btn-active');
    		$('.menu-selected-tag').removeClass('tag-active');
    	  }
		});
   	})
   	/* 历史图文界面删除按钮 */
   	$(document).on('click','.history-delete-img-txt',function(){
   		var deleteElement=$(this).parents('li:first');
   		var nextElement=$(this).parents('li:first').siblings('li:first').find('a');
   		layer.confirm('是否删除这篇图文', {
		  btn: ['确定','取消'] //按钮
		}, function(){
		  layer.msg('删除成功', {icon: 1});
		  deleteElement.remove();
		  /* 编辑器内容动态获取 */
		  if (nextElement.length==0) {
		  	editorComment.txt.clear();
		  	$('.editor-title').val('');
		  }
		  else{
		  	$('.editor-title').val(nextElement.find('.article-list-text-title').text());
    	  	var currentTxt=nextElement.find('.article-list-text').html();
    	  	editorComment.txt.html(currentTxt);
    	  	nextElement.addClass('article-active');
		  	nextElement.find('.article-set').addClass('article-set-block');
		  }
    	  if (nextElement.data('beforeText')) {
    		$('.menu-add-tag-btn').removeClass('add-tag-btn-active');
    		$('.menu-selected-tag').addClass('tag-active');
    		$('.tag-active').text(nextElement.data('beforeText'));
    	  }
    	  else{
    		$('.menu-add-tag-btn').addClass('add-tag-btn-active');
    		$('.menu-selected-tag').removeClass('tag-active');
    	  }
		});
   	})
   	/* 发布按钮 */
   	$(document).on('click','.release-img-txt',function(){
   		var releaseElement=$(this).parents('li:first');
   		var nextElement=$(this).parents('li:first').siblings('li:first').find('a');
   		layer.confirm('是否发布这篇图文', {
		  btn: ['确定','取消'] //按钮
		}, function(){
		  var tagPd = $('.menu-selected-tag');
		  if (editorComment.txt.text()=='' || !tagPd.hasClass('tag-active')) {
		  	layer.msg('标签或文章内容不可为空')
		  }
		  else{
		  	layer.msg('发布成功', {icon: 1});
			  $('.history-menu-list li a').removeClass('article-active');
			  $('.history-menu-list li a').find('.article-set').removeClass('article-set-block')
			  releaseElement.find('.release-img-txt').css({'display':'none'})
			  releaseElement.find('.delete-img-txt').removeClass('delete-img-txt').addClass('history-delete-img-txt');
			  $('.history-menu-list').prepend(releaseElement);

			   /* 编辑器内容动态获取 */
			  if (nextElement.length==0) {
			  	editorComment.txt.clear();
			  	$('.editor-title').val('');
			  }
			  else{
			  	nextElement.addClass('article-active');
			  	nextElement.find('.article-set').addClass('article-set-block');
	    	  	$('.editor-title').val(nextElement.find('.article-list-text-title').text());
	    	  	var currentTxt=nextElement.find('.article-list-text').html();
	    	  	editorComment.txt.html(currentTxt);
			  }
	    	  if (nextElement.data('beforeText')) {
	    		$('.menu-add-tag-btn').removeClass('add-tag-btn-active');
	    		$('.menu-selected-tag').addClass('tag-active');
	    		$('.tag-active').text(nextElement.data('beforeText'));
	    	  }
	    	  else{
	    		$('.menu-add-tag-btn').addClass('add-tag-btn-active');
	    		$('.menu-selected-tag').removeClass('tag-active');
	    	  }
			 }  
		});

   	})
   	var tagBox
   	/* 添加标签 */
   	var confirmTag = $('.click-tag-box');
   	$('.menu-add-tag-btn').click(function(){
	tagBox=	layer.open({
		  type:1,
		  title:'选择标签',
		  skin:'layerui-layer-rim',	
	      closeBtn: 1,
	      shift: 0,
	      shadeClose: true,
	      resize: false,
		  area: ['auto', 'auto'], //宽高
		  content: confirmTag,
		  resize:'none',
		});
   	})
   	var confirmBtn=$('.click-tag-confirm');
   	/* 标签出现样式 */
   	$('.click-tag-confirm').click(function(){
   		$('.menu-add-tag-btn').removeClass('add-tag-btn-active');
   		$('.menu-selected-tag').addClass('tag-active');
   		var afterText=$('.tag-bottom-list option:selected').text();
   		$('.menu-selected-tag').text(afterText);
   		$('.new-article-list').find('.article-active').data('beforeText',afterText);
   		layer.close(tagBox);
   	})
   	/* 标签更换 */
   	$(document).on('mouseover','.tag-active',function(){
   		$(this).text('更换标签');
   	})
   	$(document).on('mouseout','.tag-active',function(){
   		$(this).text($('.article-active').data('beforeText'));
   	})
   	$(document).on('click','.tag-active',function(){
   		tagBox=	layer.open({
		  type:1,
		  title:'选择标签',
		  skin:'layerui-layer-rim',	
	    closeBtn: 1,
	    shift: 0,
	    shadeClose: true,
	    resize: false,
		  area: ['auto', 'auto'], //宽高
		  content: confirmTag,
		  resize:'none',
		});
   	})
})	