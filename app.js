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
        question: 'How do you say Cat in Spanish ',
        answers: [
          'Gato',
          'Leon',
          'Raton',
          'Perro',
          'Pajaro'
        ],
        correctAnswer: 'Gato',
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
        correctAnswer: 'Library',
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
        correctAnswer: 'Guitar',
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

  function renderWelcomePage() {
    //this function will render the welcome page view
    $('main').html(`<section>
      <h2>Do you want to play a game?</h2>
        <button class="startbutton">Yes!</button>
    </section>`);
  }

  function handleStartGameClick() {
    $('.startbutton').on('click', function() {
      console.log('button was clicked');
      $('main').html(`<section>
      
        <p> Question 1/5</p>
        <p>How do you say cat in Spanish?</p> 
  
        <form action="">
          <label for="correct">Gato</label>
          <input type="radio" id="correct" name="choice" value="gato"> <br>
          <label for="wrong1">Leon</label>
          <input type="radio" id="wrong1" name="choice" value="leon"> <br>
          <label for="wrong2">Raton</label>
          <input type="radio" id="wrong2" name="choice" value="raton"> <br>
          <label for="wrong3">Perro</label>
          <input type="radio" id="wrong3" name="choice" value="perro"> <br>
          <label for="wrong4">Pajaro</label>
          <input type="radio" id="wrong4" name="choice" value="pajaro"> <br>
          <button type="submit">Submit Answer</button>
        
        </form>
  
      </section>`);
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
    renderWelcomePage();
    handleStartGameClick();
  }

  buildQuizGame();


  // 1. The starting screen should have a button that users can click to start the quiz.



});

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