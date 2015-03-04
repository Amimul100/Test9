
var module = require('com.techwithyou.ocrSpa');

var win = Ti.UI.createWindow({
    height:"100%",
    width:"100%",
    backgroundColor:"white"
});

var img = Ti.UI.createImageView({
    image:"http://www.techwithyou.com/card.png"
});

var btnOCR = Ti.UI.createButton({
    title:"Do OCR",
    bottom:"100dp",
    color:"black",
    borderColor:"black",
    borderWidth:"1dp",
    borderRadius:"5dp",
    backgroundColor:"white"
    
});

btnOCR.addEventListener('click',doOCR);

function doOCR() {
    module.doOCR({
       image:img.toBlob(), //Pass the image to be Scanned as a blob
       didFinish:gotResult //This callback will be triggered once the image scanning is done
    });
}



function gotResult(e){
    alert(e.text);
}

win.add(btnOCR);
win.add(img);
win.open();