const form = document.querySelector('form')
const result = document.querySelector('.result')
const showPopup = document.querySelector('.quiz-popup')
const popupClose = document.querySelector('.quiz-popup__close')
const correctAnswers = ['C', 'C', 'C', 'A', 'B']

form.addEventListener('submit', event => {
    event.preventDefault()
    showPopup.style.display = 'block'
    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
    ]
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 20
        }
    })
    console.log(score)

    let counter = 0

    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }
        result.querySelector('span').textContent = `${counter}%`
        counter++
    }, 10)
})

popupClose.addEventListener('click', () => {
    showPopup.style.display = 'none'
    scrollTo(0, 0)
    form.reset()
})