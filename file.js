let button = document.getElementById('button');
let st = document.getElementsByClassName('style')[0];
let body = document.getElementsByClassName('all')[0];

button.addEventListener('click', () => {
    st.classList.toggle('style2');
    body.style.display = 'hidden';
});