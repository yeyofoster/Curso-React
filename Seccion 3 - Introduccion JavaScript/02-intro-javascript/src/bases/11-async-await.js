const getImagen = async () => {
    try {
        const API_KEY = 'QeNHc3AWnN79Y7dKvyjCZPvRiA2iJqmW';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Manejo del error
        console.error(error);
    }
};

getImagen();