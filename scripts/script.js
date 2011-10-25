(function(){
	$("#item").bind("keypress",function(e){
		if(e.keyCode === 13){
			TODO.createItem(this.value);
			this.value = "";
			e.preventDefault();
		}
	});

	$(".todo-check").live("click",function(){
		if($(this).attr("checked")){
			TODO.done($(this))
		}else{
			TODO.cancel($(this));	
		}
	});
}());