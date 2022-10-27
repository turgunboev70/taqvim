const choosenLocation = document.querySelector(".mintaqa__city");
const date = document.querySelector(".time__day");
const time = document.querySelector(".time__hour");
const container = document.querySelector(".container");

(() => {
    fetch("https://islomapi.uz/api/present/day?region=Toshkent")
        .then(response => response.json())
        .then(data => render(data),)
})()

function render(data) {
    choosenLocation.innerHTML = data.region
    date.innerHTML = data.date
    time.innerHTML = data.weekday

    for (const info in data) {
        if (typeof data[info] == 'object') {
            Object.entries(data[info]).forEach(name => {
                console.log(name);
                const div = document.createElement("div")
                div.className = "box"
                
                const h2 = document.createElement("h2")
                h2.innerHTML = name[0]

                const imgEl = document.createElement("img")
                imgEl.setAttribute("src", "./images/saharlik.svg")

                const time = document.createElement('strong')
                time.innerHTML = name[1]

                div.append(h2, imgEl, time)
                container.append(div)
            })
        }
    }
}




