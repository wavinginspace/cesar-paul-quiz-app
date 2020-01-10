'use strict';

/*

1. The starting screen should have a button that users can click to start the quiz.
2. Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
3. Users should be asked questions 1 after the other.
4. Users should only be prompted with 1 question at a time.
5. Users should not be able to skip questions.
6. Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
7. Upon submitting an answer, users should:
         receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
         be moved onto the next question (or interact with an element to move on).
8. Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
9. Users should be able to start a new quiz. */


$(document).ready(function() {


  const store = {
  // 5 or more questions are required
    questions: [
      {
        question: 'How do you say "cat" in Spanish?',
        answers: [
          'Gato',
          'Leon',
          'Raton',
          'Perro',
          'Pajaro'
        ],
        correctAnswer: 'Gato',
        questionNumber: 1,
      },
      {
        question: 'What is a Biblioteca?',
        answers: [
          'Gas Station',
          'Hardware Store',
          'Library',
          'Police Station',
          'School'
        ],
        correctAnswer: 'Library',
        questionNumber: 2,
      },
      {
        question: 'Pablo toca la guitara. What instrument does Pablo play?',
        answers: [
          'Piano',
          'Trumpet',
          'Drums',
          'Bass',
          'Guitar'
        ],
        correctAnswer: 'Guitar',
        questionNumber: 3,
      },
      {
        question: 'What is the capital of Mexico?',
        answers: [
          'Mexico City',
          'Cancun',
          'Monterrey',
          'Puebla',
          'Tijuana'
        ],
        correctAnswer: 'Mexico City',
        questionNumber: 4,
      },
      {
        question: 'When is Mexican Independence Day?',
        answers: [
          'May 5th',
          'September 16th',
          'July 4th',
          'Febuary 12th',
          'June 6th'
        ],
        correctAnswer: 'September 16th',
        questionNumber: 5,
        
      }
    ],
    score: 0,
    questionCounter: 0,
    quizStarted: false,
    lastQuestionIncorrect: null
  };

  function render() {
    if (store.quizStarted === false) {
      $('main').html(`<section>
      <h2>Do you want to play a game?</h2>
        <button class="startbutton">Yes!</button>
    </section>`);
    } else if (store.quizStarted === true) {
      $('main').html(generateQuestionHtml());
    }

    if (store.lastQuestionIncorrect === false) {
      let correctAnswerHtml = generateQuestionHtml();
      $('main').html(correctAnswerHtml + 
    
          `<p>You are correct!</p>
          <p>Score: ${store.score}</p>
          <button class="nextbutton">next</button>
    
        </section>`);
    } else if (store.lastQuestionIncorrect === true) {
      let correctAnswerHtml = generateQuestionHtml();

      $('main').html(correctAnswerHtml + 
    
          `<p>You are incorrect!</p>
          <p>Score: ${store.score}</p>
          <button class="nextbutton">next</button>
    
        </section>`);
    }
  }

  function handleNextClick() {
    $('body').on('click', '.nextbutton', function(event) {
      // debugger;
      store.lastQuestionIncorrect = null;
      store.questionCounter += 1;

      event.preventDefault();
      console.log('next button clicked');
      // generateQuestionHtml();
      render();

    });
  }

  // function renderWelcomePage() {
  // //this function will render the welcome page view
    
  // }

  // let score = 0;
  // let questionCounter = 0;

  // let questionHtml = `<section>
      
  //     <p> Question ${questionNumber}/5</p>
  //     <p class="question">${currentQuestion.question}</p> 

  //     <form class="questionform">
  //       <fieldset>
  //       <label for="correct">
  //       <input type="radio" id="correct" name="choice" value="gato" tabindex="0" required>${currentQuestion.answers[0]}</label>
  //       <label for="wrong1">
  //       <input type="radio" id="wrong1" name="choice" value="" tabindex="1" required>${currentQuestion.answers[1]}</label>
  //       <label for="wrong2">
  //       <input type="radio" id="wrong2" name="choice" value="raton" tabindex="2" required>${currentQuestion.answers[2]}</label>
  //       <label for="wrong3">
  //       <input type="radio" id="wrong3" name="choice" value="perro" tabindex="3" required>${currentQuestion.answers[3]}</label>
  //       <label for="wrong4">
  //       <input type="radio" id="wrong4" name="choice" value="pajaro" tabindex="4" required>${currentQuestion.answers[4]}</label>
  //       <button class="submitanswerbutton" type="submit">Submit Answer</button>
  //       </fieldset>
  //     </form>`;

  function generateQuestionHtml() {
    let questionNumber = store.questions[store.questionCounter].questionNumber;
    let currentQuestion = store.questions[store.questionCounter];
    let questionHtml = `<section>
      
    <p> Question ${questionNumber}/5</p>
    <p class="question">${currentQuestion.question}</p> 

    <form class="questionform">
      <fieldset>
      <label for="correct">
      <input type="radio" id="correct" name="choice" value="${currentQuestion.answers[0]}" tabindex="0" required>${currentQuestion.answers[0]}</label>
      <label for="wrong1">
      <input type="radio" id="wrong1" name="choice" value="${currentQuestion.answers[1]}" tabindex="1" required>${currentQuestion.answers[1]}</label>
      <label for="wrong2">
      <input type="radio" id="wrong2" name="choice" value="${currentQuestion.answers[2]}" tabindex="2" required>${currentQuestion.answers[2]}</label>
      <label for="wrong3">
      <input type="radio" id="wrong3" name="choice" value="${currentQuestion.answers[3]}" tabindex="3" required>${currentQuestion.answers[3]}</label>
      <label for="wrong4">
      <input type="radio" id="wrong4" name="choice" value="${currentQuestion.answers[4]}" tabindex="4" required>${currentQuestion.answers[4]}</label>
      <button class="submitanswerbutton" type="submit">Submit Answer</button>
      </fieldset>
    </form>`;
    return questionHtml;
  }

  function handleStartGameClick() {
    $('main').on('click', '.startbutton', function() {
      store.quizStarted = true;
      render();
      // renderQuestion();
      console.log('button was clicked');
    });
  }

  function handleSubmitAnswerButton() {
    // let questionNumber = 1;
    $('main').on('submit', '.questionform', function(event) {
      // debugger;

      event.preventDefault();
      console.log('I was submitted');
      let selected = $('input[id=correct]');
      console.log(selected);
      console.log($('input:checked').val(), store.questions[store.questionCounter].correctAnswer);
      if ($('input:checked').val() === store.questions[store.questionCounter].correctAnswer) {
        console.log('correct');
        store.score++;
        store.lastQuestionIncorrect = false;
        // renderCorrectAnswer();
      } else {
        console.log('incorrect');

        store.lastQuestionIncorrect = true;
        // renderIncorrectAnswer();
      }
      render();

      // function renderQuestion() {
      //   let questionHtml = generateQuestionHtml();
      //   $('main').html(questionHtml + '</section>');
      // }

      // function renderCorrectAnswer() {
      //   // e.preventDefault();
      //   let correctAnswerHtml = generateQuestionHtml();

      //   $('main').html(correctAnswerHtml + 
    
      //     `<p>You are correct!</p>
      //     <p>Score: ${score}</p>
      //     <button class="nextbutton">next</button>
    
      //   </section>`);
      //   handleNextClick();
      // }

      // function renderIncorrectAnswer() {
      //   // e.preventDefault();
      //   let incorrectAnswerHtml = generateQuestionHtml();
      //   $('main').html(incorrectAnswerHtml + 
    
      //     `<p>You are incorrect!</p>
      //     <p>Score: ${score}</p>
      //     <button class="nextbutton">next</button>
    
      //   </section>`);
      //   handleNextClick();
      // }

      // // handles next button click
      
      
    });
  }
  
  function generateAnswersList(answers) {
  //this function will populate the question template form with values from the
  // store array. 
  }
  
  function renderQuestionText() {
  //this function will render the question text, pulling values from the store array
  }

  function buildQuizGame() {
    render();
    handleStartGameClick();
    handleSubmitAnswerButton();
    handleNextClick();

    // handleSubmitAnswerButton();
  }

  $(buildQuizGame);

});
  

// 1. The starting screen should have a button that users can click to start the quiz.


