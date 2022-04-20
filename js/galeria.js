galeria = JSON.parse(localStorage.getItem("storageGaleria"));

function cargarGaleria(){
    let galeriaDiv = document.getElementById("galeria");
    let html = "";
    for(let i = 0; i < galeria.length; i++){
        html += `
                <div style="background-image: url('${galeria[i].img}'); background-size: cover;" class="img-container">
                    <p class="img-description">${galeria[i].descripcion}</p>
                </div>
                `;
    }
    galeriaDiv.innerHTML = html;
}

cargarGaleria();