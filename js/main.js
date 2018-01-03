//creating a function to create  list of students of a classroom with their images
function boxersShow() {
  $("display").click(function(){
    $("this").hide();
});
function boxersList(image, size, color, cost){
this.image = image
this.size = size
this.color = color
this.cost = cost
};
//Empty array to push list of all the students
var boxerArr = [];
//list of objects with their properties
var boxer1 = new boxersList("images/image1.jpg", "US-small", "any", "$49-$59");
var boxer2 = new boxersList("images/image2.jpg", "US-medium", "any", "$29-$39");
var boxer3 = new boxersList("images/image3.jpg", "US-large", "any", "$49-$59");
var boxer4 = new boxersList("images/image4.jpg", "US-XL/XXL", "any", "$49-$59");
var boxer5 = new boxersList("images/image5.jpg", "US-XS", "any", "$49-$59");


boxerArr.push(boxer1,boxer2,boxer3,boxer4,boxer5);
//creating a for loop to loop through the list of boxers)
for(i= 0; i < boxerArr.length; i++){
	//parent element to target and display the new student list in HTMl
	var parent = document.getElementById("items")
	//creating elements to display the property of students /to send to parent
	var newDiv = document.createElement('div')

	var image = document.createElement("img")
//image.setAttribute("src", "img/image1.jpg");
//image.setAttribute("height", "100");
//image.setAttribute("width", "100");
//image.setAttribute("alt", "Iphone");
	var  size = document.createElement("p")
	var color = document.createElement("p")
	var cost = document.createElement("P")
	var btn = document.createElement('button')

	image.className = "img-responsive"
	btn.type = "button";
	btn.textContent = "Buy Now";
	btn.className = "btn btn-lg btn-primary"
	btn.id ="buybtn";

	 image.src = boxerArr[i].image
	//creating textnodes for the elements

	var sizeText = document.createTextNode("Size: "+boxerArr[i].size);
	var colorText = document.createTextNode("color: "+boxerArr[i].color);
	var costText = document.createTextNode("Cost: "+ boxerArr[i].cost);
	//sending these created items to the newly created div

    size.appendChild(sizeText);
    color.appendChild(colorText);
    cost.appendChild(costText);
    //sending the new elementds to the div
    newDiv.appendChild(image);
    newDiv.appendChild(size);
    newDiv.appendChild(color);
    newDiv.appendChild(cost);
    newDiv.appendChild(btn);
    //sending the div to the parent element in the html page
    parent.appendChild(newDiv)

    btn.addEventListener('click', disappear, false);
}
 function disappear() {
 	alert("Sorry not for Sale!");
	 	console.log('this function ran!!');
	 };

	};

//console.log the  array
//console.log(iphoneArr);
