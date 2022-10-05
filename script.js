const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-low-fill');
    if(this.classList.toggle('bi-brightness-high')){
        body.style.background = 'white';
        body.style.transition = '1s';
        body.style.color = 'black';
    }else{
        body.style.background = 'black';
        body.style.transition = '1s';
        body.style.color = 'white';
    }
})