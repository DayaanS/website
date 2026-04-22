function card(datafull, i, parentId) {
    // Creates an info card for the person
    const data = datafull[i]
    const card = document.createElement("div");
    card.className = "card"
    const cardinfo = document.createElement("div")

    // Portrait
    const img = document.createElement("img");
    img.src = data.portrait;
    card.appendChild(img);

    // Name heading
    const name = document.createElement("h3");
    name.innerText = data.name;
    cardinfo.appendChild(name);

    // Birthdate - Deathdate
    if (data.birthdate != null) {
        const date = document.createElement("p");
        if (data.deathdate == null) {
            date.innerText = `( ${data.birthdate} )`;
        } else {
            date.innerText = `( ${data.birthdate} - ${data.deathdate} )`;
        }
        cardinfo.appendChild(date);
    }
    
    // Short biography section
    const bio = document.createElement("p");
    bio.innerText = data.bio;
    bio.length = 100;
    cardinfo.appendChild(bio);

    // Link to person page
    const link = document.createElement("a");
    link.href = `/pages/${data["id"]}.html`;
    link.innerText = "Подробнее";
    // Link wrapper to position it on the right with CSS
    const linkwr = document.createElement ("p")
    linkwr.className = "link"
    linkwr.appendChild(link)
    cardinfo.appendChild(linkwr);

    card.append(cardinfo)
    document.getElementById(parentId).appendChild(card);
    return card
}

window.card = card;