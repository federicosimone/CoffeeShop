/*axios.get("https://mocki.io/v1/460992d9-227f-49ab-a641-1760425dce09").then( risposta => {
    console.log(risposta.data)
    const prodotti = risposta.data ;*/

  const prodottiStarbucks =   [
  {
    "id": 1,
    "nome": "Caramel Macchiato",
    "prezzo": 4.5,
    "immagine": "https://upload.wikimedia.org/wikipedia/commons/4/45/Caramel_Macchiato.jpg",
    "descrizione": "Espresso, latte caldo e vaniglia con topping al caramello."
  },
  {
    "id": 2,
    "nome": "Java Chip Frappuccino",
    "prezzo": 5.2,
    "immagine": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Starbucks_Java_Chip_Frappuccino.jpg",
    "descrizione": "Frappuccino con scaglie di cioccolato e panna montata."
  },
  {
    "id": 3,
    "nome": "Iced White Chocolate Mocha",
    "prezzo": 4.9,
    "immagine": "https://upload.wikimedia.org/wikipedia/commons/2/25/Iced_White_Chocolate_Mocha.jpg",
    "descrizione": "Caffè freddo con cioccolato bianco e latte."
  },
  {
    "id": 4,
    "nome": "Pumpkin Spice Latte",
    "prezzo": 4.7,
    "immagine": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Pumpkin_Spice_Latte.jpg",
    "descrizione": "Latte speziato alla zucca con cannella."
  },
  {
    "id": 5,
    "nome": "Cold Brew Vanilla Sweet Cream",
    "prezzo": 4.3,
    "immagine": "https://upload.wikimedia.org/wikipedia/commons/8/88/Cold_Brew_Vanilla_Sweet_Cream.jpg",
    "descrizione": "Cold brew dolce con crema alla vaniglia."
  },
  {
    "id": 6,
    "nome": "Chocolate Croissant",
    "prezzo": 2.8,
    "immagine": "https://upload.wikimedia.org/wikipedia/commons/1/11/Chocolate_Croissant.jpg",
    "descrizione": "Croissant ripieno al cioccolato."
  }
] ;

    let cardsContainer = document.getElementById("cards-container") ;

    let html = "" ;

    for (let i = 0; i < prodottiStarbucks.length; i++) {
        const element = prodottiStarbucks[i];

        let img = element.immagine ;
        let nome = element.nome ;
        let prezzo = element.prezzo ;
        let descrizione = element.descrizone ;

        const card = `<div class="col-12 col-md-6">
                    <div class="card">
                        <img src="${img}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${nome}</h5>
                            <p class="card-text">${descrizione}</p>
                            <p class="card-text"> € ${prezzo}</p>
                            <a href="#" class="btn btn-primary">Vedi descrizione</a>
                        </div>
                    </div>
                </div>`
        html += card ;
    }
     cardsContainer.innerHTML= html ;



