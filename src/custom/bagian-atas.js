class topItem extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML=`
        <div class="meal-find-box">
        <input type="text" class="find-area"
        placeholder="Masukan nama makanan, cnth : Rice/Beef/egg"
        id="find-input">
        <button type="submit" class="find-button button"
        id="find-button">
        Cari
        </button>
        `;
        
    }
}

customElements.define('bagian-atas', topItem);