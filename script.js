const menuBurger = document.getElementById("menuBurger");

const pesanan = document.getElementById("pesanan");

const total = document.getElementById("total");

const pesanButton = document.getElementById("pesanButton");

const pesanText = document.getElementById("pesanText");

const infoText = document.getElementById("infoText");


const burger = [
    {
        nama: "Classic Burger",
        harga: 25000,
        gambar: "🍔"
    },

    {
        nama: "Cheese Burger",
        harga: 30000,
        gambar: "🍔"
    },

    {
        nama: "Chicken Burger",
        harga: 28000,
        gambar: "🍔"
    }
];


/* menu */

burger.forEach(function(item, index) {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <div class="gambar">
            ${item.gambar}
        </div>

        <h3>${item.nama}</h3>

        <p>
            Rp${item.harga.toLocaleString("id-ID")}
        </p>

        <button onclick="pilihBurger(${index})">
            Pilih
        </button>
    `;

    menuBurger.appendChild(card);

});


/* Pesanan */

let burgerDipilih = null;


function pilihBurger(index) {

    burgerDipilih = burger[index];

    pesanan.textContent =
        burgerDipilih.nama;

    total.textContent =
        "Total: Rp" +
        burgerDipilih.harga.toLocaleString("id-ID");

}


pesanButton.addEventListener("click", function() {

    if (burgerDipilih === null) {

        pesanText.textContent =
            "Silakan pilih burger terlebih dahulu.";

        return;
    }

    pesanText.textContent =
        "Pesanan " +
        burgerDipilih.nama +
        " berhasil dibuat!";

});


fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then(function(response) {

        return response.json();

    })

    .then(function(data) {

        infoText.textContent =
            "BurgerKIR siap menemani waktu makanmu!";

    })

    .catch(function(error) {

        infoText.textContent =
            "Informasi tidak dapat dimuat.";

    });