const form = document.querySelector("form");
const result = document.querySelector(".result");
const showPopup = document.querySelector(".quiz-popup");
const popupClose = document.querySelector(".quiz-popup__close");
const correctAnswers = ["C", "C", "C", "A", "B"];

const getUserAnswers = () => {
  let userAnswers = [];
  correctAnswers.forEach((_, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value;
    userAnswers.push(userAnswer);
  });
  return userAnswers;
};

const getScore = (userAnswers) => {
  const maximumScore = 100 / userAnswers.length
  return userAnswers.reduce((acc, userAnswer, index) => userAnswer === correctAnswers[index] 
    ? acc + maximumScore 
    : acc, 0)
};

const scrollScreen = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const showFinalScore = (score) => {
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
  const score = getScore(userAnswers)
  showFinalScore(score)
});

popupClose.addEventListener("click", () => {
  showPopup.style.display = "none";
  scrollScreen()
  form.reset();
});
