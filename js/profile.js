const imgDiv = document.querySelector('.user__photo');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const upload = document.querySelector('#upload');

file.addEventListener('change', function(){
    const choosedFile = this.files[0];
    if (choosedFile) {
        const reader = new FileReader();
        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosedFile);
    }
});