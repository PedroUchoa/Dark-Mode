const button = document.getElementById('button-dark')
const container = document.querySelector('.container')

button.addEventListener('click', ()=>{
    container.classList.toggle('darkMode')
    if (container.className.includes("darkMode")) {
        button.classList.replace("dark-mode", "light-mode")
        button.innerHTML = 'Light Mode'
        container.firstElementChild.firstElementChild.innerHTML = 'Dark Mode'
    } else {
        button.classList.replace("light-mode", "dark-mode")
        button.innerHTML = 'Dark Mode'
        container.firstElementChild.firstElementChild.innerHTML = 'Light Mode'
    }
})
