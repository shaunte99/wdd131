const temples = [
    { name: "Salt Lake Temple", location: "Salt Lake City, Utah", dedicated: "1893", size: "253,015", image: "images/SaltLakeTemple.jpg" },
    { name: "San Diego Temple", location: "San Diego, California", dedicated: "1993", size: "72,000", image: "images/SanDiegoTemple.jpg" },
    { name: "Tucson Temple", location: "Tucson, Arizona", dedicated: "2017", size: "38,216", image: "images/TucsonTemple.jpg" },
    { name: "Laie Hawaii Temple", location: "Laie, Hawaii", dedicated: "1919", size: "40,000", image: "images/LaieTemple.jpg" },
    { name: "Rome Italy Temple", location: "Rome, Italy", dedicated: "2019", size: "40,000", image: "images/RomeTemple.jpg" },
    { name: "Provo Temple", location: "Provo, Utah", dedicated: "1972", size: "130,000", image: "images/ProvoTemple.jpg" }
];

const container = document.getElementById("temples-container");


function renderTemples(filter = "All") {
    container.innerHTML = "";
    temples
        .filter(temple => {
            if (filter === "Old") return parseInt(temple.dedicated) < 1950;
            if (filter === "New") return parseInt(temple.dedicated) > 2000;
            if (filter === "Large") return parseInt(temple.size.replace(",", "")) > 100000;
            if (filter === "Small") return parseInt(temple.size.replace(",", "")) <= 40000;
            return true;
        })
        .forEach(temple => {
            const card = `
                <figure class="card">
                    <img src="${temple.image}" alt="${temple.name}" loading="lazy">
                    <figcaption>${temple.name} - ${temple.location}</figcaption>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Size: ${temple.size} sq ft</p>
                </figure>
            `;
            container.innerHTML += card;
        });
}


document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("show");
});


document.querySelectorAll("#menu li a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const filter = event.target.dataset.filter;
        renderTemples(filter);
    });
});


document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


renderTemples();
