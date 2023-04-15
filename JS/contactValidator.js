const contactForm = document.getElementById('contactForm');

const emailInputValidator = /^[a-z0-9_.+-]+@[a-z-]+\.[a-z0-9-.]+$/;

const onSubmit = (e) => {
  e.preventDefault();
  const message = document.getElementById('response-message');
  const data = new FormData(e.target);
  const email = data.get('email');

  if (!emailInputValidator.test(email)) {
    message.innerHTML = '* Error: The content of the email field has to be in lower case';
    return;
  }

  fetch(e.target.action, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then(() => {
      message.innerHTML = '* Success: Thanks for your submission!';
    });

  contactForm.reset();
};
contactForm.addEventListener('submit', onSubmit);
