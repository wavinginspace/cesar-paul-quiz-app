/**
 * Example store structure
 */

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





const store = {
  // 5 or more questions are required
  questions: [
    {
      question: ',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  questionNumber: 0,
  score: 0
};

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