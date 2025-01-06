const shadowDOM = document.createElement('p');
shadowDOM.setAttribute('judul', 'New Item');
shadowDOM.innerHTML = `Mau masak apa hari ini?`;
document.querySelector('li.pencarian').appendChild(shadowDOM);