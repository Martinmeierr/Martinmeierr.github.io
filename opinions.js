document.addEventListener("DOMContentLoaded", function() {
    const reviewsContainer = document.getElementById("reviews-container");

    const username = 'tu_usuario';
    const password = 'tu_contraseña';
    const propertyId = '1234567890'; // Reemplaza con el ID de la propiedad real
    const fromDate = '2023-01-01';
    const limit = 10;

    const url = `https://supply-xml.booking.com/review-api/properties/${propertyId}/reviews?from_date=${fromDate}&limit=${limit}`;
    const headers = new Headers({
        'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    });

    fetch(url, { headers: headers })
        .then(response => response.json())
        .then(data => {
            const reviews = data.data.reviews;
            reviews.forEach((review, index) => {
                const carouselItem = document.createElement("div");
                carouselItem.className = `carousel-item${index === 0 ? ' active' : ''}`;

                const card = `
                    <div class="card" style="width: 18rem; margin: 0 auto;">
                        <div class="card-body">
                            <h5 class="card-title">${review.content.headline || "Reseña"}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Puntaje: ${review.scoring.review_score}</h6>
                            <p class="card-text">${review.content.positive || "Sin comentarios positivos."}</p>
                            <p class="card-text text-danger">${review.content.negative || "Sin comentarios negativos."}</p>
                        </div>
                    </div>
                `;

                carouselItem.innerHTML = card;
                reviewsContainer.appendChild(carouselItem);
            });
        })
        .catch(error => {
            console.error("Error al obtener reseñas:", error);
            reviewsContainer.textContent = "No se pudieron cargar las reseñas.";
        });
});