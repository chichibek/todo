var TODO = (function(){
	var createItem = function(item){
		var li      = document.createElement("li"),
			div     = document.createElement("div"),
			chk     = document.createElement("input"),
			content = document.createElement("div"),
			tar     = document.querySelector("#todo-collection ul");

		chk.setAttribute("type","checkbox");
		chk.setAttribute("class","todo-check");

		content.setAttribute("class","todo-content");
		content.innerHTML = item;

		div.appendChild(chk);
		div.appendChild(content);

		li.appendChild(div);

		tar.appendChild(li);

		//children not well soported fix
		document.getElementById("number").innerHTML = tar.children.length;

		document.getElementById("word").innerHTML = (tar.children.length === 1) 
		? "item" : "items"; 

		//todo-toolbar just show once fix
		document.getElementById("todo-toolbar").style.display = "block";
	};

	var done = function(elem){
		console.dir(elem.next().css({
			textDecoration:"line-through"
		}));
	};

	var cancel = function(elem){
		console.dir(elem.next().css({
			textDecoration:"none"
		}));
	};

	var deleteItem = function(){
		
	};	

	return{
		createItem:createItem,
		done:done,
		cancel:cancel,
		deleteItem:deleteItem
	}
}());