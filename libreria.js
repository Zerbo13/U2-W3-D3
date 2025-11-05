const booksContainer = document.getElementById("books-container");

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore nel recupero dei dati");
    }
    return response.json();
  })
  .then((books) => {
    books.forEach((book) => {
      // Creazione colonna
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

      // Creazione card
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${book.img}" class="card-img-top" alt="${book.title}" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text fw-bold text-primary">${book.price} €</p>
            <button class="btn btn-outline-danger mt-auto scarta-btn">Scarta</button>
          </div>
        </div>
      `;

      //Se il pulsante scarta viene cliccato, la card non si visualizza
      col.querySelector(".scarta-btn").addEventListener("click", () => {
        col.remove();
      });

      // Aggiunge la card al container
      booksContainer.appendChild(col);
    });
  })
  .catch((err) => {
    console.error("Errore:", err);
    booksContainer.innerHTML =
      '<div class="alert alert-danger text-center">Errore nel caricamento dei libri</div>';
  });
