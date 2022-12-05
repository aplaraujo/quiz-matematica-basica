const form = document.querySelector("form");
const result = document.querySelector(".result");
const showPopup = document.querySelector(".quiz-popup");
const popupClose = document.querySelector(".quiz-popup__close");
const correctAnswers = ["C", "C", "C", "A", "B"];

let score = 0;

const getUserAnswers = () => {
  let userAnswers = [];
  correctAnswers.forEach((_, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value;
    userAnswers.push(userAnswer);
  });
  return userAnswers;
};

const calculateUserScore = (userAnswers) => {
  userAnswers.forEach((answer, index) => {
    const isTheUserAnswerCorrect = answer === correctAnswers[index];
    if (isTheUserAnswerCorrect) {
      score += 20;
      return
    }
  });
};

const scrollScreen = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const animateFinalScore = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    result.querySelector("span").textContent = `${counter}%`;
    counter++;
  }, 10);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showPopup.style.display = "block";
  const userAnswers = getUserAnswers()
  calculateUserScore(userAnswers)
  animateFinalScore()
});

popupClose.addEventListener("click", () => {
  showPopup.style.display = "none";
  scrollScreen()
  form.reset();
});
