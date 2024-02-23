const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
//Use back ticks for the picture names so that it will show up
const imageFilenames = [`pic1.jpg`, `pic2.jpg`, `pic3.jpg`, `pic4.jpg`,`pic5.jpg`];
/* Declaring the alternative text for each image file */
const imageAltText = new Object()
imageAltText.name1 = "Human blue eye";
imageAltText.name2 = "A Painting";
imageAltText.name3 = "Flowers";
imageAltText.name4 = "Egyptian drawing on a wall";
imageAltText.name5 = "Brown butterfly";


/* Looping through images */
for (const image of imageFilenames) {
const newImage = document.createElement('img');
//here the image src of the images is shown here for every image (${image} will keep changing for all)
newImage.setAttribute('src',`images/${image}` );
//gets the alt text for all the images using the image as its index
newImage.setAttribute('alt', imageAltText[image]);
thumbBar.appendChild(newImage);
//this changes the image to the other images when you click on them. Makes use of the source and alt of the images
newImage.addEventListener("click", e =>{
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
})
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", ()=>{
    const classOfBtn = btn.getAttribute("class");
    if(classOfBtn === "dark"){
        btn.setAttribute("class","light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    }else if (classOfBtn === "light"){
        btn.setAttribute("class","dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0,0,0,0)";
    
}});