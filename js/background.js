const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const ChosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${ChosenImage}`;

document.body.appendChild(bgImage);