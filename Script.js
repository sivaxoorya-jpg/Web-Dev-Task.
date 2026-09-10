const Input = document.getElementById('username');

Input.addEventListener('keydown',function(e){
    if (e.key === 'Enter'){
        localStorage.setItem('username',Input.value);
        window.location.href="Home.html"
    }
})

window.addEventListener('DOMContentLoaded',function(){
    const saved=localStorage.getItem('username');
    if (saved){
        Input.value=saved;
    }
});

