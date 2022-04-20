artistas = JSON.parse(localStorage.getItem("storageArtistas"));
galeria = JSON.parse(localStorage.getItem("storageGaleria"));

const pickerArtista = document.getElementById('picker-artista');
const pickerGaleria = document.getElementById('picker-galeria');

function cargarArtistas() {
    for (let i = 0; i < artistas.length; i++) {
        let opt = document.createElement('option');
        opt.value = artistas[i].nombre;
        opt.innerHTML = artistas[i].nombre;
        pickerArtista.appendChild(opt);
    }
}

function cargarGaleria() {
    for(let i = 0; i < galeria.length; i++){
        let opt = document.createElement('option');
        opt.value = galeria[i].descripcion;
        opt.innerHTML = galeria[i].descripcion;
        pickerGaleria.appendChild(opt);
    }
}

cargarArtistas();
cargarGaleria();
function recargarFormulario() {
    const found = artistas.find(element => element.nombre == pickerArtista.options[pickerArtista.selectedIndex].text);
    if(pickerArtista.options[pickerArtista.selectedIndex].text == 'Nuevo Artista'){
        document.getElementById('img-artista').src = 'https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg';
        document.getElementById('nombre-artista').value = '';
        document.getElementById('area-descripcion').value = '';
        document.getElementById('spotify-artista').value = '';
        document.getElementById('link-img').value = '';
    }else {
        document.getElementById('img-artista').src = found.img;
        document.getElementById('nombre-artista').value = found.nombre;
        document.getElementById('area-descripcion').value = found.descripcion;
        document.getElementById('spotify-artista').value = found.spotify;
        document.getElementById('link-img').value = found.img;
    }
}

function recargarFormularioGaleria() {
    const found = galeria.find(element => element.descripcion == pickerGaleria.options[pickerGaleria.selectedIndex].text);
    if(pickerGaleria.options[pickerGaleria.selectedIndex].text == 'Nueva Foto'){
        document.getElementById('img-galeria').src = 'https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg';
        document.getElementById('descripcion-galeria').value = '';
        document.getElementById('link-img-galeria').value = '';
    }else {
        document.getElementById('img-galeria').src = found.img;
        document.getElementById('descripcion-galeria').value = found.descripcion;
        document.getElementById('link-img-galeria').value = found.img;
    }
}

function recargarImagen() {
    let linkImg = document.getElementById('link-img').value;
    document.getElementById('img-artista').src = linkImg;
}

function recargarImagenGaleria() {
    let linkImg = document.getElementById('link-img-galeria').value;
    document.getElementById('img-galeria').src = linkImg;
}

function actualizarArtista() {
    index = artistas.findIndex(element => element.nombre == pickerArtista.options[pickerArtista.selectedIndex].text)
    
    let nombre = document.getElementById('nombre-artista').value;
    let descripcion = document.getElementById('area-descripcion').value;
    let spotify = document.getElementById('spotify-artista').value;
    let linkImg = document.getElementById('link-img').value;

    if(pickerArtista.options[pickerArtista.selectedIndex].text == 'Nuevo Artista'){
        artistas.push({
            nombre: nombre,
            descripcion: descripcion,
            spotify: spotify,
            img: linkImg
        });
    }else{
        artistas[index].nombre = nombre;
        artistas[index].descripcion = descripcion;
        artistas[index].spotify = spotify;
        artistas[index].img = linkImg;
    }

    localStorage.setItem("storageArtistas", JSON.stringify(artistas));
    location.reload();
}

function actualizarGaleria() {
    index = galeria.findIndex(element => element.descripcion == pickerGaleria.options[pickerGaleria.selectedIndex].text)
    
    let descripcion = document.getElementById('descripcion-galeria').value;
    let linkImg = document.getElementById('link-img-galeria').value;

    if(pickerGaleria.options[pickerGaleria.selectedIndex].text == 'Nueva Foto'){
        galeria.push({
            descripcion: descripcion,
            img: linkImg
        });
    }else{
        galeria[index].descripcion = descripcion;
        galeria[index].img = linkImg;
    }

    localStorage.setItem("storageGaleria", JSON.stringify(galeria));
    location.reload();
}

function eliminarArtista() {
    index = artistas.findIndex(element => element.nombre == pickerArtista.options[pickerArtista.selectedIndex].text)
    artistas.splice(index, 1);
    localStorage.setItem("storageArtistas", JSON.stringify(artistas));
    location.reload();
}

function eliminarGaleria() {
    index = galeria.findIndex(element => element.descripcion == pickerGaleria.options[pickerGaleria.selectedIndex].text)
    galeria.splice(index, 1);
    localStorage.setItem("storageGaleria", JSON.stringify(galeria));
    location.reload();
}