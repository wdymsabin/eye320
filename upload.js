document.addEventListener('DOMContentLoaded', function() {
    loadPhotos();
});

async function loadPhotos() {
    try {
        const response = await fetch('photos.json');
        const data = await response.json();

        const grid = document.getElementById('grid');

        data.photos.forEach(photo => {
            const link = document.createElement('a');
            link.href = `photo.html?id=${photo.id}`;
            link.className = 'item';

            const img = document.createElement('img');
            img.src = photo.thumbnail;
            img.alt = photo.title;

            const title = document.createElement('div')
            title.textContent = photo.title;
            title.className = 'text'

            link.appendChild(img);
            link.appendChild(title);
            grid.appendChild(link);
        });
    } catch (error) {
        console.error('ahhh fuck! i messed up, lets try again', error)
    }
}