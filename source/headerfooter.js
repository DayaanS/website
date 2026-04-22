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

const templateFooter = document.createElement('templateHeader');

templateFooter.innerHTML = `
<footer>
    <img src="/assets/images/logo.png" width="100"/>
    <p>Сайт создан как индивидуальный проект по Социальной истории Семеновой Дайааной Алексеевной</p>
    <p>2026</p>
</footer>
`;

document.getElementById("footer").appendChild(templateFooter);
