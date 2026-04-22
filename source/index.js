const jsonPath = "source/people.json";
let slideIndex = 1;
// Async function to load JSON  
async function loadJsonFile(path) {  
    try {  
    // Fetch the JSON file (relative path)  
    const response = await fetch(path);  
    // Check if the request was successful  
    if (!response.ok) {  
        throw new Error(`HTTP error! Status: ${response.status}`);  
    }  
    // Parse the JSON response into a JavaScript object  
    const jsonData = await response.json();  

    // Use the data (log to console for testing)  
    console.log('Loaded JSON data:', jsonData);  
    carousel(jsonData)


    return jsonData; // Return for use elsewhere  
    } catch (error) {  
    console.error('Error loading JSON file:', error);  
    }  
}  

function carousel(data) {
    // const cardDef = card(data,0,"slideshow-container");
    // cardDef.setAttribute("id", "cardDefault");
    let min = 0;
    let max = data.length - 1;
    let count = 3; 
    let random = [];

    for (let i = 0; i < count; i++) {
        let n = Math.floor(Math.random() * (max - min + 1)) + min;
        random.push(n);
    }

    for (let i=0; i < random.length; i++) {
        cardN = card(data,random[i],"slideshow-container");
        // cardN.setAttribute("id",`card${i}`)
    }
    
    showSlides();

}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  document.getElementById("cardDefault").display = none;
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("card");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "grid";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
} 

loadJsonFile(jsonPath)