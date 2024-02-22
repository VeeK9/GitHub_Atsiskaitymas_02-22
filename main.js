document.querySelectorAll('#mainBody button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#mainBody').classList.add('hidden');
    const tab = `#${button.textContent.toLowerCase()}`;
    document.querySelector(`${tab}`).classList.add('tabVisible');
  })
});

document.querySelectorAll('.closeIcon').forEach(button => {
  button.addEventListener('click', e => {
    button.parentElement.parentElement.classList.remove('tabVisible');
    document.querySelector('#mainBody').classList.remove('hidden');
  })
});