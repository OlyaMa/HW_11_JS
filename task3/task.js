const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total;
    });
    
    xhr.upload.addEventListener('error', (e) => {
        alert('Ошибка при загрузке');
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);

    e.preventDefault();
});