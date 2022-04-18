let images = [
    {
        descripcion: "Imagen 1",
        img: "src/galeria/fest1.jpeg"
    },
    {
        descripcion: "Imagen 2",
        img: "src/galeria/fest2.jpeg"
    },
    {
        descripcion: "Imagen 3",
        img: "src/galeria/fest3.jpeg"
    },
    {
        descripcion: "Imagen 4",
        img: "src/galeria/fest4.jpeg"
    },
    {
        descripcion: "Imagen 5",
        img: "src/galeria/fest5.jpeg"
    },
    {
        descripcion: "Imagen 6",
        img: "src/galeria/fest6.jpeg"
    },
    {
        descripcion: "Imagen 7",
        img: "src/galeria/fest7.jpeg"
    },
    {
        descripcion: "Imagen 8",
        img: "src/galeria/fest8.webp"
    },
    {
        descripcion: "Imagen 9",
        img: "src/galeria/fest9.jpeg"
    }
];

function cargarGaleria(){
    let galeria = document.getElementById("galeria");
    let html = "";
    for(let i = 0; i < images.length; i++){
        html += `
                <div style="background-image: url('${images[i].img}'); background-size: cover;" class="img-container">
                    <p class="img-description">${images[i].descripcion}</p>
                </div>
                `;
    }
    galeria.innerHTML = html;
}

cargarGaleria();