import '../src/style/style.css';
import './custom/judul.js';
import '../src/custom/bagian-atas.js';
import tampilkanMakanan from '../src/script/API.js';

document.addEventListener('DOMContentLoaded', () => {
    const tombolPencarian = document.querySelector('#find-button');
    tombolPencarian.addEventListener('click', () => {tampilkanMakanan();});
})
