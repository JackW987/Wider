$(function(){
	/* 省市区 选择 */
	$("#address").distpicker('destroy'); //（.district为form下第一个div的类名）
  	$('#address').distpicker({
  		province:"—— 所在省 ——",
  		city:"—— 所在市 ——",
		district:"—— 所在区 ——",
		autoSelect: false,
		placeholder: true
	  })
	$("#hometown").distpicker('destroy'); //（.district为form下第一个div的类名）
	$('#hometown').distpicker({
  		province:"—— 所在省 ——",
  		city:"—— 所在市 ——",
		district:"—— 所在区 ——",
		autoSelect: false,
		placeholder: true
	  })
	//   获取option

	$('.save-msg-btn').click(function(){
		$("#province option").each(function(){
			if($(this).is(":selected") && $(this).val()!=''){
				console.log($(this).val());	
			} 
		});
	})
	
})