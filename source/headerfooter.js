// Insert Header

const templateHeader = document.createElement('templateHeader');
templateHeader.innerHTML = `
<header>
    <div id="logo">
        <img src="/assets/images/logo.png" width="100"/>
    </div>
    <nav>
        <ul>
            <li><a href="/catalog.html">Персоналии</a></li>
            <li><a href="/index.html">Home</a></li>      
        </ul>
    </nav>
</header>
`;

document.getElementById("header").appendChild(templateHeader);

// Insert footer
const templateFooter = document.createElement('templateHeader');

templateFooter.innerHTML = `
<footer>
    <img src="/assets/images/logo.png" width="100"/>
    <p>Сайт создан как индивидуальный проект по Социальной истории Семеновой Дайааной Алексеевной</p>
    <p>2026</p>
</footer>
`;
document.getElementById("footer").appendChild(templateFooter);


// function searchListLinks(data) {
//     const ul = document.createElement("ul");
//     ul.className = "pageLinksList";
//     for (i=0; i < data.length; i++) {
//         const li = document.createElement("li");
//         li.innerHTML = `<a href="/pages/${data[i]["id"]}.html">${data[i]["name"]}</a>`;
//         li.className = "pageLink";
//         ul.appendChild(li);
//         console.log(data[i]["name"]);
//     }
//     document.getElementById("header").appendChild(ul);
// }

// async function loadJsonFile(path) {  
//     try {  
//     // Fetch the JSON file (relative path)  
//     const response = await fetch(path);  
//     // Check if the request was successful  
//     if (!response.ok) {  
//         throw new Error(`HTTP error! Status: ${response.status}`);  
//     }  
//     // Parse the JSON response into a JavaScript object  
//     const jsonData = await response.json();  

//     // Use the data
//     searchListLinks(jsonData)


//     return jsonData; // Return for use elsewhere  
//     } catch (error) {  
//     console.error('Error loading JSON file:', error);  
//     }  
// }  


// // Search functions


// loadJsonFile(jsonPath)