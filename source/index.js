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
    const cardDef = card(data,0,"slideshow-container");
    cardDef.setAttribute("id", "cardDefault");

    for (let i=0; i < 5; i++) {
        card(data,i,"slideshow-container");
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

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("card");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// } 

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