$(function(){
	/* 调用 cropper 插件 */
	var beforeSrc=$('.user-box-img').attr('src');
	$('.cut-img-box > img').attr('src',beforeSrc);
	var $image = $('.cut-img-box > img');
	$image.cropper({
	    aspectRatio: '1',
	    autoCropArea:0.8,
	    preview:'.cut-img-box-preview',

	});
  	
var $inputImage = $('.input-image input');
    var URL = window.URL || window.webkitURL;
    var blobURL;

    if (URL) {
        $inputImage.change(function () {
            var files = this.files;
            var file;

            if (files && files.length) {
               file = files[0];

               if (/^image\/\w+$/.test(file.type)) {
                    blobURL = URL.createObjectURL(file);
                    $image.one('built.cropper', function () {
                        // Revoke when load complete
                       URL.revokeObjectURL(blobURL);
                    }).cropper('reset').cropper('replace', blobURL);
                    $inputImage.val('');
                } else {
                    layer.alert('请选择正确的文件格式');
                }
            }

            // Amazi UI 上传文件显示代码
            var fileNames = '';
            $.each(this.files, function() {
                fileNames += '<span class="am-badge">' + this.name + '</span> ';
            });
            $('#file-list').html(fileNames);
        });
    } else {
        $inputImage.prop('disabled', true).parent().addClass('disabled');
    }
    $('.confirm-upload').on('click',function(){
      var img_src=$image.attr("src");
      if(img_src==""){
        layer.alert("没有选择上传的图片");
        return false;
      }
      
      var url=$(this).attr("url");
      var canvas=$("#image").cropper('getCroppedCanvas');
      var data=canvas.toDataURL(); //转成base64
      layer.alert('点击事件');
      
    });

	$('.user-box a').mouseover(function(){
		$(this).stop().animate({
			opacity:1
		},150)
	})
	$('.user-box a').mouseout(function(){
		$(this).stop().animate({
			opacity:0
		},150)
	})
	$('.user-box a').click(function(){
		layer.open({
            type: 1,
            closeBtn: 1,
            shift: 0,
            shadeClose: true,
            resize: false,
            title: '头像更换',
            area: ['auto', 'auto'],
            content: $('.upload-img-box'),
        })
	})

});
