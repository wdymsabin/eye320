document.addEventListener('DOMContentLoaded', function() {
    loadPhotoDetail();
});

async function loadPhotoDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const photoIdText = urlParams.get('id');
    const photoId = parseInt(photoIdText);

    try {
        const response = await fetch('photos.json');
        const data = await response.json();

        const photo = data.photos.find(p => p.id === photoId);

        if (photo) {
            const container = document.getElementById('photo-i');
            
            container.innerHTML = `
            <img src="${photo.fullSize}" alt="${photo.title}">
            <h1>${photo.title}</h1>
            <p class="date">${photo.date}</p>
            <p class="talk">${photo.talk}</p>
            `;
            
        } else {
            const container = document.getElementById('photo-i');
            container.innerHTML = '<p>sorry boss ive messed up... the photo isNaN</p>'
        }
    } catch (error) {
        console.error('ahhh fuck! i messed up, lets try again', error);
    }
}