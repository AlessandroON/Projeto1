const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("ativo");
    });
});

const btnVermais = document.getElementById('vermais');
const section1 = document.getElementById('section1');

btnVermais.addEventListener('click', () => {
    section1.classList.toggle('hidden');

    if (section1.classList.contains('hidden')) {
        btnVermais.textContent = 'Ver mais';
    } else {
        btnVermais.textContent = 'Ver menos';
    }
});

