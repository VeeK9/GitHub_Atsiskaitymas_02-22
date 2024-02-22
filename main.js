document.querySelectorAll('#mainBody button').forEach(button => {
  button.addEventListener('click', e => {
    document.querySelector('#mainBody').style.display = 'none';
    const tab = `#${button.textContent.toLowerCase()}`
    console.log(button.textContent.toLowerCase())
    document.querySelector(`${tab}`).classList.remove('tabHidden')
    document.querySelector(`${tab}`).classList.add('tabVisible')
})
})