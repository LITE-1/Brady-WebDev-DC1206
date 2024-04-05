const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilesnames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const imageAltText = {
    'pic1.jpg': 'Description for pic1',
    'pic2.jpg': 'Description for pic2',
    'pic3.jpg': 'Description for pic3',
    'pic4.jpg': 'Description for pic4',
    'pic5.jpg': 'Description for pic5'
  };
/* Looping through images */
imageFilesnames.forEach(fileName => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${fileName}` );
    newImage.setAttribute('alt', imageAltText[fileName]);
    
    thumbBar.appendChild(newImage);
    
    newImage.addEventListener('click',function(){
        displayedImage.src = this.src;
        displayedImage.alt = this.alt;
    });  
});


const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
