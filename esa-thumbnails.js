var images = [];

for (var i = 0; i < document.images.length; i++) {
  images.push(document.images[i].src);
}

var uploadImages = images.filter(function(element, index, array) {
  return element.startsWith('https://files.esa.io/uploads/production/attachments/');
});

for (var i = 0; i < uploadImages.length; i++) {
  console.log(uploadImages[i]);
}

// var tocBox = document.getElementsByClassName('toc-box')[0];

var wrapperDiv = document.createElement('div');
wrapperDiv.style.position = 'fixed';
wrapperDiv.style.top = '50px';
wrapperDiv.style.left = '100px';

for (var i = 0; i < uploadImages.length; i++) {
  var img = document.createElement('img');
  img.src = uploadImages[i];
  var thumbnailWidth = '50px';
  img.style.width = thumbnailWidth;
  img.style.opacity = '0.8';
  img.onmouseover = function () {
    this.style.width = '1000px';
    this.style.opacity = '10.0';
  };
  img.onmouseout = function () {
    this.style.width = thumbnailWidth;
    this.style.opacity = '0.8';
  };

  var imageWrapper = document.createElement('div');
  imageWrapper.style.margin = '10px 0 0';
  imageWrapper.appendChild(img);
  wrapperDiv.appendChild(imageWrapper);
}

document.body.appendChild(wrapperDiv);

// chrome.runtime.sendMessage({method:"downloadImages",images:images});
