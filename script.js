
///////////////////////////////////// script for product page change the image starts /////////////////// ///////////////////////////
function clickme(smallImg) {
    var fullImg = document.getElementById("imagebox");
    fullImg.src = smallImg.src;
    var square = document.getElementsByClassName("zoom");
    square[0].style.backgroundImage = "url(" + smallImg.src + ")";
  }
  
  // show product image zoom in
  function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
    e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
    x = (offsetX / zoomer.offsetWidth) * 100;
    y = (offsetY / zoomer.offsetHeight) * 100;
    zoomer.style.backgroundPosition = x + "% " + y + "%";
  }
  
  ///////////////////////////////////// script for product page change the image ends /////////////////// ///////////////////////////