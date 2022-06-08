const ranks = document.querySelectorAll('.rank');
const submitBtn = document.querySelector('.submit-btn')
const ratingCard = document.querySelector('.rating-card')
const userRating = document.querySelector('.user-rating')

let value = undefined;

ranks.forEach(btn => {
    btn.addEventListener('click', () => {
        value = btn.value;
    })
})

submitBtn.addEventListener('click', () => {
    if (value !== undefined) {
        ratingCard.classList.add('hide')
    }
    userRating.textContent = value;
})