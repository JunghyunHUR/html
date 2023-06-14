const btn = document.querySelector('.btn');
btn.addEventListener('click', changefunction);
function changefunction(){
    btn.classList.toggle("change");
}