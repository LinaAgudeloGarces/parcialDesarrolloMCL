let artistas = [
    {
        nombre: 'Michael Jackson',
        descripcion: 'Cantante, compositor y bailarín estadounidense. Apodado como el Rey del Pop.',
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXaTIN6XNquoW',
        img: './src/artistas/michael.jpg'
    },
    {
        nombre: 'Dua Lipa',
        descripcion: 'Es una cantante, compositora, modelo y actriz británica de ascendencia albanokosovar.',
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX3fRquEp6m8D',
        img: './src/artistas/dua.jpg'
    },
    {
        nombre: 'Bad Bunny',
        descripcion: 'Artista de la música urbana, reconocido a nivel mundial.',
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX2apWzyECwyZ',
        img: './src/artistas/bad_bunny.jpg'
    },
    {
        nombre: 'Christian Nodal',
        descripcion: 'Es un cantante y compositor mexicano. Su primer sencillo, "Adios amor" lanzado en 2016 fue un éxito.',
        spotify: 'https://open.spotify.com/artist/0XwVARXT135rw8lyw1EeWP',
        img: './src/artistas/nodal.jpeg'
    },
    {
        nombre: 'Jesse & Joy',
        descripcion: 'Dúo de música pop originario de México, formado en 2005 por los hermanos Jesse y Joy Huerta Uecke.',
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO0KDL2w',
        img: './src/artistas/jesse.webp'
    }
];

if (localStorage.getItem("storageArtistas") === null) {
    localStorage.setItem("storageArtistas", JSON.stringify(artistas));
  }