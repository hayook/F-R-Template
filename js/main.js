let upButton = document.querySelector('.up');

window.onscroll = _ => this.scrollY >= 800 ? upButton.classList.add('show') 
: upButton.classList.remove('show'); // console.log(this.scrollY);    

upButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behaviour: 'smooth',
    });
}
