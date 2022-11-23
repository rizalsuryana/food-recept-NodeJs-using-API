const daftarMakanan = document.querySelector('#meal');

function tampilkanMakanan() {
    let teksPencarian = document.querySelector('#find-input').value;
    console.log()
    const GET_Food = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${teksPencarian}`);
            const dataJSON = await response.json();
            console.log(response);
            console.log(dataJSON);

            if (dataJSON.meals != null) {
                renderFood(dataJSON.meals);
            } else {
                renderError();
            }

        } catch (message) {
            errorMessage(message);
        }
    }
    const errorMessage = (message) => {
        alert(message);
    }
    const renderError = () => {
        let detailMakanan = ` 
        <p>Maaf, Hasil pencarian untuk makanan "${teksPencarian}"
        tidak di temukan!
        Coba cari makanan lain</p>
        `;
        daftarMakanan.classList.add('makananTidakDitemukan');
        daftarMakanan.innerHTML += detailMakanan
    }

    const renderFood = (food) => {
        let detailMakanan = `
        <style>
        h3{
            background-color: #1C6758;
            text-align: center;
            border-radius: 6px;
            width: 450px;
            margin-left: auto;
            margin-right: auto;
            color:white;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
        </style>
        <h3 clas"tampilanHasil">Hasil Pencarian untuk "${teksPencarian}"</h3>
        `;
        console.log(food);

        food.forEach(meal => {
            detailMakanan += `
                    <div class="meal-item" data-id="${meal.idMeal}">
                    <div class="meal-name">
                    <h2>${meal.strMeal}</h2>
                    </div>
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="makanan">
                    </div>
                    <div class ="kategoriNegara">
                    <p>Kategori : ${meal.strCategory}
                    </br>
                    Negara Asal : ${meal.strArea}</p>
                    </div>
                    <div class="resep">
                    <h2> Resep Makanan </h2>
                    <p> ${meal.strInstructions}</p>
                    </br>
                </div>
                </div>
                `;
        });
        daftarMakanan.classList.remove('makananTidakDitemukan');

        daftarMakanan.innerHTML = detailMakanan;
    }
    GET_Food();
};

export default tampilkanMakanan;