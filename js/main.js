//Arrow function to be used when the document loads
$(document).ready(() => {

$('#buyBtn1').click('buyBoxers', (e) =>{
  let products  = $('#productInfo');
  buyBoxers(products);
  e.preventDefault();
});
});
function buyBoxers(){
	var div = document.createElement('div');
	var heading = document.createElement('h4');
	var text = document.createTextNode('Our Products');

	var image = document.createElement('img');
	image.setAttribute('src', 'images/products.jpg');

	div.className="container-fluid image-wrapper";
	div.id="productInfo";

	heading.appendChild(text);
	div.appendChild(heading);
	div.appendChild(image);

   //document.getElementById('items').innerHTML = div;
	console.log(buyBoxers);

}
//document.getElementById('buyBtn1').addEventListener('click', buyBoxers, false);
//document.getElementById('buyBtn2').addEventListener('click', buyBoxers, false);
