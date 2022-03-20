const IMAGES_LEN = 9;
let images = [];
for(var i =0;i< IMAGES_LEN;i++){
    images.push(`${i}.jpg`);
}


const ChosenImage = images[Math.floor(Math.random()*IMAGES_LEN)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${ChosenImage}`;
const imageUrl = `img/${ChosenImage}`;

document.body.style.backgroundImage = "url('" + imageUrl + "')";
// document.body.appendChild(bgImage);