var myNav = document.querySelector('.myNav');
var yesilBtn = document.getElementById('yesilBtn');
window.onscroll = ()=> {
    if(window.scrollY > 300) {
        myNav.classList.add('nav-active');
        yesilBtn.classList.add('greenBtn');

    }else {
        myNav.classList.remove('nav-active');
        yesilBtn.classList.remove('greenBtn');
    }
}