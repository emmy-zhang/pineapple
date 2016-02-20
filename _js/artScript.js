function prepareEventHandlers() {
  	var myImage = document.getElementById("mainImage");

  	var imgArray = ["_images/chickadee.jpg","_images/easternbluebird.jpg",
  	"_images/emilyandkiwi.png","_images/face.jpg",
  	"_images/kirby.png"];

  	var imageIndex = 0;

  mainImage.onclick = function() {
  	if(imageIndex >= imgArray.length-1) {
  		imageIndex = -1;
  	}
  		imageIndex++;
  		mainImage.setAttribute("src", imgArray[imageIndex]);
  };

}

window.onload = function() {
	//prepare anything we need before running script
	prepareEventHandlers();
}
