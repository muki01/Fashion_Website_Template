const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

var People = [
	{
		user: "berkan03",
		pass: "berkan03"
	},
]
function check(){
 	var username = document.getElementById("user").value;
 	var password = document.getElementById("pass").value;

 	for(i=0;i < People.length; i++)
 	{
 		if(username == People[i].user && password == People[i].pass)
		{
    		window.open("index.html","_self");
			return
  		}
 	}
 	alert("Невалидно потребителско име или парола")
}
