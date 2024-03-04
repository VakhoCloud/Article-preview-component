const profile = document.querySelector('.profile');
const hidden = document.querySelector('.hidden');
const hiddenButton = document.querySelector('.hidden-icon');
const shareButton = document.querySelector('.share-icon');

shareButton.addEventListener('click', (e) => {
    hidden.classList.toggle('active');
})

hiddenButton.addEventListener('click', (e) => {
    hidden.classList.toggle('active');
})