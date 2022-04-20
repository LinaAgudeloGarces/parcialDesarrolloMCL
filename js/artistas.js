artistas = JSON.parse(localStorage.getItem("storageArtistas"));

function mostrarArtistas() {
    let htmlArtistas = '';
    for (let i = 0; i < artistas.length; i++) {
        htmlArtistas += `
        <div class="artist_item">
            <img width="250px" height="250px" src="${artistas[i].img}" alt="">
            <div>
                <h2 class="artist-name">${artistas[i].nombre}</h2>
                <p class="artist-description">${artistas[i].descripcion}</p>
                <a class="btn-spotify" href="${artistas[i].spotify}" target="_blank">Lista en Spotify</a>
             </div>
        </div>
        `
    }
    document.getElementById('artistas').innerHTML = htmlArtistas;
}

mostrarArtistas();