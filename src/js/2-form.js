let formData = {
  email: '',
  message: '',
};

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  formData = savedData;
  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}

document
  .querySelectorAll('.feedback-form input, .feedback-form textarea')
  .forEach(input => {
    input.addEventListener('input', event => {
      formData[event.target.name] = event.target.value.trim();
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });
  });

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  }
});
