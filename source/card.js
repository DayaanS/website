// var selectedPersonId = 0

// function openPersonInfo(datafull,i){
//     selectedPersonId = i
//     content(datafull,i,"catalog")
// }

//function to create an info card for the person
function card(datafull, i, parentId) {
    const data = datafull[i]
    const img = document.createElement("img");
    img.src = data.portrait;
    const name = document.createElement("h3");
    name.innerText = data.name;
    const date = document.createElement("p");
    if (data.deathdate == null) {
        date.innerText = `( ${data.birthdate} )`;
    } else {
        date.innerText = `( ${data.birthdate} - ${data.deathdate} )`;
    }
    const bio = document.createElement("p");
    bio.innerText = data.bio;
    bio.length = 100;

    const link = document.createElement("a");
    link.href = `/pages/${data["id"]}.html`;
    link.innerText = "Подробнее";
    const linkwr = document.createElement ("p")
    linkwr.className = "link"
    linkwr.appendChild(link)
    // link.onclick = function() {openPersonInfo(datafull,i);};
    
    const card = document.createElement("div");
    const cardinfo = document.createElement("div")
    card.appendChild(img);
    cardinfo.appendChild(name);
    cardinfo.appendChild(date);
    cardinfo.appendChild(bio);
    cardinfo.appendChild(linkwr);
    card.append(cardinfo)
    card.className = "card"
    // card.onclick = function() {openPersonInfo(datafull,i);};
    document.getElementById(parentId).appendChild(card);
    return card
}

// function tableRow(parent,name,data,key) {
//     const tr = document.createElement("tr");
//     const th = document.createElement("th");
//     const td = document.createElement("td");
//     th.innerText = name + ":";
//     td.innerText = data[key];
//     tr.append(th,td)
//     parent.appendChild(tr)
// }

// function content(datafull, i, parentId){
//     const parent = document.getElementById(parentId)
//     parent.innerHTML = ''
//     const data = datafull[i];
//     const divCard = document.createElement("div");
//     parent.appendChild(divCard)

//     const img = document.createElement("img");
//     img.src = data.portrait;
//     img.setAttribute("parentId","portrait")
//     divCard.appendChild(img);

//     const divCardInf = document.createElement("div");
//     divCard.appendChild(divCardInf)

//     const h = document.createElement("h1");
//     h.innerText = data.name;
//     divCardInf.appendChild(h);

//     const table = document.createElement("table");
//     tableRow(table,"Дата рождения", data, "birthdate");
//     tableRow(table,"Дата смерти", data, "deathdate");
//     tableRow(table,"Ученая степень", data, "uch_st");
//     tableRow(table,"Ученое звание", data, "uch_zv");
//     tableRow(table,"Факультет", data, "faculty");
//     tableRow(table,"Специальность", data, "spec");
//     divCardInf.append(table)

//     const bio = contentSection("Биография",parentId);
//     for (let i=0; i <data.bio.length; i++) {
//         const p = document.createElement("p")
//         p.innerText = data.bio[i]
//         bio.appendChild(p)
//     }

//     const prizes = contentSection("Награды",parentId);
//     const ulP = document.createElement("ul")
//     for (let i=0; i <data.prizes.length; i++) {
//         const li = document.createElement("li")
//         li.innerText = data.prizes[i]
//         ulP.appendChild(li)
//     }
//     prizes.appendChild(ulP)
    
//     const works = contentSection("Труды",parentId);
//     wP = document.createElement("p")
//     wP.innerText = data.works[0]
//     works.appendChild(wP)
//     ulW = document.createElement("ul")
//     for (let i=0; i <data.works[1].length; i++) {
//         const li = document.createElement("li")
//         li.innerText = data.works[1][i]
//         ulW.appendChild(li)
//     }
//     works.appendChild(ulW)

//     gallery = contentSection("Галерея", parentId);
//     for (let i=0; i < data.gallery.length; i++) {
//         const img = document.createElement("img");
//         img.src = data.gallery[i][0];
//         gallery.appendChild(img);
//         const p = document.createElement("p");
//         p.innerText = data.gallery[i][1];
//         gallery.appendChild(p)
//     }
//     gallery.setAttribute("parentId","gallery")

//     sources = contentSection("Источники",parentId);
//     ulS = document.createElement("ul")
//     for (let i=0; i <data.sources.length; i++) {
//         const li = document.createElement("li");
//         const a = document.createElement("a");
//         a.innerText = data.sources[i][0];
//         a.href = data.sources[i][1];
//         console.log(data.sources[i])
//         li.appendChild(a)
//         ulS.appendChild(li);
        
//     }
//     sources.appendChild(ulS)
    
// }

// function contentSection(name,parentId) {
//     const section = document.createElement("div");
//     const sectionH = document.createElement("h2");
//     sectionH.innerText = name;
//     section.appendChild(sectionH);
//     // const ul = document.createElement("ul");
//     // for (let i=0; i < contentArr.lenght; i++) {
//     //     const li = document.createElement("li");
//     //     li.innerText = contentArr[i]
//     //     ul.appendChild(li)
        
//     // }
//     // section.appendChild(ul)
//     document.getElementById(parentId).appendChild(section);
//     return section
// }


window.card = card;