const jsonPath = "source/people.json";

var isSortAZ = true;
var isSortName = true;

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
    createButtons(jsonData); 
    cardList(jsonData)

    return jsonData; // Return for use elsewhere  
    } catch (error) {  
    console.error('Error loading JSON file:', error);  
    }  
}  

function cardList(data) {
    const cards = document.createElement("div");
    cards.setAttribute("id", "cards")
    document.getElementById("catalog").appendChild(cards)

    for (let i=0; i < data.length; i++) {
        card(data,i,"cards");
    }
}

function createButtons(data) {
    const buttonSortName = document.createElement("button");
    buttonSortName.innerText = "По алфавиту"
    buttonSortName.onclick = function() {sortName(data)};
    const buttonSortDate = document.createElement("button");
    buttonSortDate.innerText = "По дате рождения"
    buttonSortDate.onclick = function() {sortDate(data)};
    const buttonSortAZ = document.createElement("button");
    buttonSortAZ.innerText = "A-Z"
    buttonSortAZ.onclick = function() {sortAZ(data)};
    const buttonSortZA = document.createElement("button");
    buttonSortZA.innerText = "Z-A"
    buttonSortZA.onclick = function() {sortZA(data)};
    const content = document.getElementById("catalog");
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "center";
    content.appendChild(buttonsDiv)
    const hSort = document.createElement("h2");
    hSort.innerText = "Сортировать"
    buttonsDiv.appendChild(hSort)
    buttonsDiv.appendChild(buttonSortName);
    buttonsDiv.appendChild(buttonSortDate);
    buttonsDiv.appendChild(buttonSortAZ);
    buttonsDiv.appendChild(buttonSortZA);
}

function sortName(data) {
    isSortName = true;
    const arrName = [];
    for (let i=0; i < data.length; i++) {
        arrName.push(data[i].name);
    }
    
    arrNameSorted = arrName.sort();
    if (isSortAZ == false) {
        arrNameSorted.reverse();
    }
    document.getElementById("cards").innerHTML = '';

    for (let i=0; i < arrNameSorted.length; i++) {
        for (let j=0; j < data.length; j++) {
            if (arrNameSorted[i] == data[j].name) {
                card(data,j,"cards");

            }
        }
    }
    
}
function sortDate(data) {
    isSortName = false;
    const arrDate = [];
    for (let i=0; i < data.length; i++) {
        arrDate.push(data[i].birthdate);
    }
    
    arrDateSorted = arrDate.sort();
    console.log(arrDateSorted)

    if (isSortAZ == false) {
        arrDateSorted.reverse();
    }
    document.getElementById("cards").innerHTML = '';

    for (let i=0; i < arrDateSorted.length; i++) {
        for (let j=0; j < data.length; j++) {
            if (arrDateSorted[i] == data[j].birthdate) {
                card(data,j,"cards");

            }
        }
    }

}

function sortAZ(data) {
    isSortAZ = true;
    if (isSortName == true) {
        sortName(data)
    } else {
        sortDate(data)
    }
}

function sortZA(data) {
    isSortAZ = false;
    if (isSortName == true) {
        sortName(data)
    } else {
        sortDate(data)
    }

}

loadJsonFile(jsonPath);
