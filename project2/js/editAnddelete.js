const questionForm = document.getElementById('questionForm');
const userQuestion = document.getElementById('userQuestion');
const successButton = document.getElementById('success');
const questionsContainer = document.getElementById('questionsContainer');

// Fetch questions from JSON file
fetch('../project2/json/questions.json')
  .then(response => response.json())
  .then(questions => {
    questions.forEach(question => {
      showQuestion(question);
    });
  })
  .catch(error => console.error('Error fetching questions:', error));

successButton.addEventListener('click', function() {
  const questionText = userQuestion.value.trim();
  
  if (questionText !== '') {
    const newQuestion = { id: Date.now(), text: questionText };
    showQuestion(newQuestion);
    userQuestion.value = '';
  }
});

function showQuestion(question) {
  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question-container');
  questionContainer.setAttribute('data-id', question.id);

  const questionText = document.createElement('div');
  questionText.textContent = question.text;
  questionText.classList.add('question-text');

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function() {
    userQuestion.value = question.text;
    questionsContainer.removeChild(questionContainer);
    displaySuccessMessage('Question edited successfully!');
  });
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    questionsContainer.removeChild(questionContainer);
    displaySuccessMessage('Question deleted successfully!');
  });

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);

  questionContainer.appendChild(questionText);
  questionContainer.appendChild(buttonContainer);

  questionsContainer.appendChild(questionContainer);
}

function displaySuccessMessage(message) {
  const successMessage = document.createElement('div');
  successMessage.textContent = message;
  successMessage.classList.add('success-message');
  questionForm.appendChild(successMessage);

  setTimeout(() => {
    questionForm.removeChild(successMessage);
  }, 2000);
}
