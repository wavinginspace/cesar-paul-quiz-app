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
        correctAnswer: 'gato',
        questionNumber: 1,
        score: 0
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
        correctAnswer: 'library',
        questionNumber: 2,
        score: 0
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
        correctAnswer: 'guitar',
        questionNumber: 3,
        score: 0
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
        score: 0
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
        score: 0
      }
    ], 
  };

  (function renderWelcomePage() {
  //this function will render the welcome page view
    $('main').html(`<section>
      <h2>Do you want to play a game?</h2>
        <button class="startbutton">Yes!</button>
    </section>`);
  })();

  let score = 0;
  let questionCounter = 0;
  let questionNumber = store.questions[questionCounter].questionNumber;
  let currentQuestion = store.questions[questionCounter];
  let questionHtml = `<section>
      
      <p class="questionNumber"> Question ${questionNumber}/5</p>
      <p class="question">${currentQuestion.question}</p> 

      <form class="questionform">
        <fieldset>
        <label for="correct">
        <input type="radio" id="correct" name="choice" value="gato"> ${currentQuestion.answers[0]}</label>
        <label for="wrong1">
        <input type="radio" id="wrong1" name="choice" value="leon"> Leon</label>
        <label for="wrong2">
        <input type="radio" id="wrong2" name="choice" value="raton"> Raton</label>
        <label for="wrong3">
        <input type="radio" id="wrong3" name="choice" value="perro"> Perro</label>
        <label for="wrong4">
        <input type="radio" id="wrong4" name="choice" value="pajaro"> Pajaro</label>
        <button class="submitanswerbutton" type="submit">Submit Answer</button>
        </fieldset>
      </form>`;

            
  function renderQuestion() {
    $('main').html(questionHtml + '</section>');
  }

  function handleStartGameClick() {
    $('.startbutton').on('click', function() {
      renderQuestion();
      console.log('button was clicked');

      function handleSubmitAnswerButton() {
        $('.questionform').on('submit', function(event) {
          event.preventDefault();
          console.log('I was submitted');
          let selected = $('input[id=correct]');
          console.log(selected);
          if ($('input:checked').val() === store.questions[0].correctAnswer) {
            renderCorrectAnswer();
          }
          else 
            renderIncorrectAnswer();
        });
      }

      function renderCorrectAnswer() {
        // e.preventDefault();
        score++;
        $('main').html(questionHtml + 
    
          `<p class="correctAnswer">You are Correct!</p>
          <p class="correctScore">Score: ${score}</p>
          <button class="nextbutton">Next</button>
    
        </section>`);
        handleNextClick();
      }

      function renderIncorrectAnswer() {
        // e.preventDefault();
        $('main').html(questionHtml + 
    
          `<p class="incorrectAnswer">You are incorrect!</p>
          <p class="incorrectScore">Score: 0</p>
          <button class="nextbutton">next</button>
    
        </section>`);
        handleNextClick();
      }

      function handleNextClick() {
        $('.nextbutton').on('click', function() {
          questionNumber++;
          console.log('next button clicked');
          renderQuestion();
        });
      }

      handleSubmitAnswerButton();
    });
  }

  
  function generateAnswersList(answers) {
  //this function will populate the question template form with values from the
  }
  
  function renderQuestionText() {
  //this function will render the question text, pulling values from the store array
  }

  function testClick() {
    $('.questionform').on('click', '.submitbutton', function(event) {
      event.preventDefault();
      console.log('test');
    });
  }

  function buildQuizGame() {
    handleStartGameClick();
    // handleSubmitAnswerButton();
    testClick();
  }

  buildQuizGame();

});
  

// 1. The starting screen should have a button that users can click to start the quiz.




/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */