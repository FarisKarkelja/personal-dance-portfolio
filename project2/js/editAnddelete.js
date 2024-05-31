const questionForm = document.getElementById('questionForm');
const userQuestion = document.getElementById('userQuestion');
const successButton = document.getElementById('success');

successButton.addEventListener('click', function() {
  const question = userQuestion.value.trim();
  
  if (question !== '') {
    showQuestion(question);
    userQuestion.value = '';
  }
});

function showQuestion(question) {
  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question-container');

  const questionText = document.createElement('div');
  questionText.textContent = question;
  questionText.classList.add('question-text');

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function() {
    userQuestion.value = question;
    questionForm.removeChild(questionContainer);
  });
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    questionForm.removeChild(questionContainer);
  });

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);

  questionContainer.appendChild(questionText);
  questionContainer.appendChild(buttonContainer);

  questionForm.appendChild(questionContainer);
}

