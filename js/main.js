document.addEventListener("DOMContentLoaded", function(){
    var canvas  = document.createElement('canvas');
    canvas.width=640;
    canvas.height=480;
    var context = canvas.getContext('2d');

    // Create new img element
    var img = new Image();

    img.onload = function( ){
        context.drawImage(img, 0, 0);
        // fetch the base64 string encoded image for the poster
        var dataURL = canvas.toDataURL();
        console.log(dataURL);

    }

    // Set source path
    img.src = 'img/ali.png';


});

