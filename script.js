const html = document.querySelector('html');
const trocar = document.querySelector('#trocar');
const btns = document.querySelectorAll('.btn');
const btn = document.querySelector('.btn');


const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const max = 8;

trocar.addEventListener('click',()=>{
    if(html.dataset.bsTheme == 'light'){
        html.dataset.bsTheme = 'dark'

        btns.forEach(btn => {
            btn.classList.replace('btn-primary','btn-outline-primary');
        });
        return
    }
        html.dataset.bsTheme ='light'

        btns.forEach(btn => {
            btn.classList.replace('btn-outline-primary','btn-primary');
        });
    
});


email.addEventListener('blur',()=>{
    if(!/\S+@\S+\.\S+/.test(email.value)){
        email.classList.add('bordar-erro');
        return
    }
    return email.classList.replace('bordar-erro','borda-certo');
});

senha.addEventListener('blur',()=>{
    if(senha.value.length < max){
        return senha.classList.add('bordar-erro');
    }

    return senha.classList.replace('bordar-erro','borda-certo');
});