$(function(){
	/* 图片上传功能 */
	var base64_file=[];
	var photoLength=-1;
	var photoTest=/\.(gif|jpg|jpeg|png|gif|jpg|png)$/i;
	$('.file-input').change(function(){
		var uploadfile = $(this).val();
		if (!photoTest.test(uploadfile)) {
			layer.msg('请上传正确的文件');
		}
		else{
			photoLength++;
			var file = this.files[0];
       		var reader = new FileReader(); 
       		reader.readAsDataURL(file); 
	        reader.onload = function(e){ 
	            base64_file[photoLength] = this.result;
	            var image = new Image();
	            image.src = base64_file[photoLength];
	            var width = image.width;
	            var height = image.height
	            $('.upload-photo-btn').parent('li:first').before('<li class="img-item"><img src='+this.result+'><a href="javascript:void(0);" class="li-delete-btn"><i class="fa fa-close" ></i></a></li>')
	        }
		}
	})
	var tagAccount=0;
	$(document).on('click','.tag-item',function(){
		if (tagAccount>=7) {
			layer.msg('最多添加七个标签');
		}
		else{
			$(this).removeClass('tag-item');
			$(this).addClass('tag-item-selected')
			$('.tag-store-box').append($(this));
			tagAccount++;
			$('.label-length-count').text(tagAccount+'/7');
		}
	})
	$(document).on('click','.tag-item-selected',function(){
			$(this).removeClass('tag-item-selected');
			$(this).addClass('tag-item');
			$('.tag-item-list').append($(this));
			tagAccount--;
			$('.label-length-count').text(tagAccount+'/7');
	})
	$(document).on('mouseover','.photo-list li',function(){
		$(this).find('.li-delete-btn').css({
			'display':'block'
		})
	})
	$(document).on('mouseout','.photo-list li',function(){
		$(this).find('.li-delete-btn').css({
			'display':'none'
		})
	})
	$(document).on('click','.li-delete-btn',function(){
		$(this).parent('li:first').remove();
		photoLength--;
	})
	$('.confirm-btn').click(function(){
		var title=$('.input-text-title').val();
		var work=$('.input-text-work').val();
		var tagLength=$('.tag-item-selected').length;
		if (title=='' || work=='' || tagLength==0) {
			layer.msg('标签标题内容不可为空，且图片至少要有一张')
		}
		else{
			layer.msg('发布成功');
			$('.img-item').remove();
			base64_file=[];
			$('.input-text-title').val('');
			$('.input-text-work').val('');
			var tags = $('.tag-store-box').find('.tag-item-selected');
			tags.addClass('tag-item');
			tags.removeClass('tag-item-selected');
			$('.tag-item-list').append(tags);
			tagAccount=0;
			$('.label-length-count').text(tagAccount+'/7');
		}
	})
})