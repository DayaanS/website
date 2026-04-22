const jsonPath = "/source/people.json";

function getPageName() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var pageName = page.replace(".html","");
    var personIndex = Number(pageName); // index is less than person ID by 1, because arrays start from 0
    console.log(personIndex)
    return personIndex - 1
}


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

    // Use the data
    personIndex = getPageName()
    console.log(personIndex)
    content(jsonData, personIndex,"content")

    return jsonData; // Return for use elsewhere  
    } catch (error) {  
    console.error('Error loading JSON file:', error);  
    }  
}  

function content(datafull, i, parentId){
    const parent = document.getElementById(parentId)
    const data = datafull[i];

    // Change title to person's name
    document.title = data.name;

    // Section with portrait and basic info
    const divCard = document.createElement("div");
    divCard.className = "personCard";
    // Portrait
    const img = document.createElement("img");
    img.src = data.portrait;
    img.setAttribute("id","portrait")
    divCard.appendChild(img);
    // Basic info
    const divCardInf = document.createElement("div");
    // Name
    const h = document.createElement("h1");
    h.innerText = data.name;
    divCardInf.appendChild(h);
    // Info table
    const table = document.createElement("table");
    if (data.birthdate !=null) {
        tableRow(table,"Дата рождения", data, "birthdate");
    }
    if (data.deathdate !=null) {
        tableRow(table,"Дата смерти", data, "deathdate");
    }
    tableRow(table,"Ученая степень", data, "uch_st");
    tableRow(table,"Ученое звание", data, "uch_zv");
    tableRow(table,"Факультет", data, "faculty");
    if (data.specialty != null) {
        tableRow(table,"Специальность", data, "spec");
    } 
    divCardInf.append(table)
    divCard.appendChild(divCardInf)
    parent.appendChild(divCard)

    // Biography
    const bio = contentSection("Биография",parentId);
    for (let i=0; i <data.bio.length; i++) {
        const p = document.createElement("p")
        p.innerText = data.bio[i]
        bio.appendChild(p)
    }

    // Prizes
    const prizes = contentSection("Награды",parentId);
    const ulP = document.createElement("ul")
    for (let i=0; i <data.prizes.length; i++) {
        const li = document.createElement("li")
        li.innerText = data.prizes[i]
        ulP.appendChild(li)
    }
    prizes.appendChild(ulP)

    // Works
    const works = contentSection("Труды",parentId);
    wP = document.createElement("p")
    wP.innerText = data.works[0]
    works.appendChild(wP)
    ulW = document.createElement("ul")
    for (let i=0; i <data.works[1].length; i++) {
        const li = document.createElement("li")
        li.innerText = data.works[1][i]
        ulW.appendChild(li)
    }
    works.appendChild(ulW)

    // Gallery
    if (data.gallery != null) {
        gallery = contentSection("Галерея", parentId);
        for (let i=0; i < data.gallery.length; i++) {
            const img = document.createElement("img");
            img.src = data.gallery[i][0];
            gallery.appendChild(img);
            const p = document.createElement("p");
            p.innerText = data.gallery[i][1];
            gallery.appendChild(p)
        }
        gallery.setAttribute("id","gallery")
    }

    //Sources
    sources = contentSection("Источники",parentId);
    ulS = document.createElement("ul")
    for (let i=0; i <data.sources.length; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerText = data.sources[i][0];
        a.href = data.sources[i][1];
        console.log(data.sources[i])
        li.appendChild(a)
        ulS.appendChild(li);
        
    }
    sources.appendChild(ulS)
}

function tableRow(parent,name,data,key) {
    // creates a table row element and appends it to parent
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td = document.createElement("td");
    th.innerText = name + ":";
    td.innerText = data[key];
    tr.append(th,td)
    parent.appendChild(tr)
}

function contentSection(name,parentId) {
    // creates a div with a heading, returns the div
    const section = document.createElement("div");
    const sectionH = document.createElement("h2");
    sectionH.innerText = name;
    section.appendChild(sectionH);
    document.getElementById(parentId).appendChild(section);
    return section
}

loadJsonFile(jsonPath)