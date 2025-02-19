const questionsData = [
  ['What is the capital of France?', ['Paris', 'London', 'Berlin'], 0],
  ['What is the capital of Germany?', ['Paris', 'London', 'Berlin'], 2],
  ['What is the capital of England?', ['Paris', 'London', 'Berlin'], 1],
  ['What is the capital of Italy?', ['Paris', 'London', 'Rome'], 2],
  ['What is the capital of Spain?', ['Paris', 'Madrid', 'Berlin'], 1],
  ['What is the capital of Portugal?', ['Lisbon', 'Madrid', 'Rome'], 0],
  [
    'What is the capital of Netherlands?',
    ['Amsterdam', 'Brussels', 'Berlin'],
    0,
  ],
  ['What is the capital of Belgium?', ['Paris', 'Brussels', 'Berlin'], 1],
  ['What is the capital of Austria?', ['Vienna', 'Berlin', 'Zurich'], 0],
  ['What is the capital of Switzerland?', ['Bern', 'Zurich', 'Geneva'], 0],
  ['What is the capital of Norway?', ['Oslo', 'Stockholm', 'Copenhagen'], 0],
  ['What is the capital of Sweden?', ['Oslo', 'Stockholm', 'Helsinki'], 1],
  ['What is the capital of Finland?', ['Oslo', 'Stockholm', 'Helsinki'], 2],
  ['What is the capital of Denmark?', ['Copenhagen', 'Oslo', 'Stockholm'], 0],
  ['What is the capital of Poland?', ['Warsaw', 'Krakow', 'Prague'], 0],
  [
    'What is the capital of Czech Republic?',
    ['Vienna', 'Prague', 'Budapest'],
    1,
  ],
  ['What is the capital of Hungary?', ['Budapest', 'Bucharest', 'Sofia'], 0],
  ['What is the capital of Romania?', ['Bucharest', 'Budapest', 'Belgrade'], 0],
  ['What is the capital of Bulgaria?', ['Sofia', 'Belgrade', 'Athens'], 0],
  ['What is the capital of Greece?', ['Athens', 'Rome', 'Istanbul'], 0],
];

class Question {
  #title;
  #answers;
  #correctAnswerIndex;
  constructor(title, answers, correctAnswerIndex) {
    this.#title = title;
    this.#answers = answers;
    this.#correctAnswerIndex = correctAnswerIndex;
  }

  get title() {
    return this.#title;
  }
  get answers() {
    return this.#answers;
  }
  get correctAnswerIndex() {
    return this.#correctAnswerIndex;
  }
}

class Quiz {
  #questions;
  #currentQuestionIndex;
  #score;
  constructor(questions) {
    this.#questions = questions.map(
      (question) => new Question(question[0], question[1], question[2])
    );
    this.#currentQuestionIndex = 0;
    this.#score = 0;
  }

  displayQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    answersElement.innerHTML = '';
    questionElement.textContent =
      this.#questions[this.#currentQuestionIndex].title;

    this.#questions[this.#currentQuestionIndex].answers.forEach(
      (answer, index) => {
        const answerElement = document.createElement('li');
        answerElement.innerHTML = `<label><input type="radio" name="answer" value=${index}> ${answer}</label>`;
        answersElement.appendChild(answerElement);
      }
    );
  }
  displayResult() {
    const resultElement = document.querySelector('#result');
    resultElement.textContent = `Your score is ${this.#score} out of ${
      this.#questions.length
    }`;
  }
  nextQuestion() {
    const selectedAnswer = document.querySelector(
      'input[name="answer"]:checked'
    );
    if (selectedAnswer) {
      console.log(selectedAnswer);
      if (
        this.#questions[this.#currentQuestionIndex].correctAnswerIndex ===
        parseInt(selectedAnswer.value)
      ) {
        this.#score++;
        console.log(this.#score);
      } else {
        console.log('Wrong answer');
      }
      if (this.#currentQuestionIndex < this.#questions.length - 1) {
        this.#currentQuestionIndex++;
        this.displayQuestion();
      } else {
        this.displayResult();
      }
    } else {
      alert('Please select an answer');
    }
  }
}

const quiz = new Quiz(questionsData);
quiz.displayQuestion();
