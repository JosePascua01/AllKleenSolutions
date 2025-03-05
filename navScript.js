const navButton = document.getElementById('nav-button');
const navBar = document.querySelector('nav');

function showNav(){
    navBar.style.left = '0';
    exitNav()
}

function exitNav(){
    const exitButton = document.getElementById('exit-button');
    const navButtons = document.querySelectorAll('nav ul li a');
    navButtons.forEach((navButton) => {
        navButton.addEventListener('click', ()=>{
            navBar.style.left = '-100vw'
        })
    })
    exitButton.addEventListener('click', ()=>{
        navBar.style.left = '-100vw'
    })
}

navButton.addEventListener('click', showNav);