const getData = async() => {
    let div = document.querySelector('.demo');
    let html = ``;
    const response = await fetch('https://hp-api.herokuapp.com/api/characters');
    const data = await response.json();
    data.forEach(el => {
        html += `<div class="character_box">
                 <img src="${el.image}">
                 <p>${el.name}</p>
                 <p>${el.house}</p>
                 <p>${el.dateOfBirth}</p>
        </div>`;
    });
    div.innerHTML = html;
}
getData()