const html = document.querySelector('html'); 
const trocar = document.querySelector('#trocar');
const btns = document.querySelectorAll('.btn');
const btn = document.querySelector('.btn');


const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const nome = document.querySelector('.nome');
const ConfirmeSenha = document.querySelector('.ConfirmeSenha');
const maxSenha = 8;
const maxNome = 3;

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

nome.addEventListener('blur',()=>{
    if (nome.value.length < maxNome) {
        return nome.classList.add('bordar-erro');
    }
    nome.classList.add('borda-certo');
});

email.addEventListener('blur',()=>{
    if(!/\S+@\S+\.\S+/.test(email.value)){
        return email.classList.add('bordar-erro');
    }
    email.classList.add('borda-certo');
});

const ConfirmarAsSenhas = ()=>{
    if(senha.value == ConfirmeSenha.value && ConfirmeSenha.value != ''){
        ConfirmeSenha.classList.replace('bordar-erro','bordar-certo');
        return ConfirmeSenha.classList.add('borda-certo');
    }

    ConfirmeSenha.classList.replace('borda-certo','bordar-erro');
    ConfirmeSenha.classList.add('bordar-erro');
};

senha.addEventListener('blur',()=>{
    if(senha.value.length < maxSenha){
        senha.classList.replace('borda-certo','bordar-erro');
        senha.classList.add('bordar-erro');
        ConfirmarAsSenhas();
        return 
    }

    senha.classList.replace('bordar-erro','bordar-certo');
    senha.classList.add('borda-certo');

    if(!ConfirmeSenha.value) return
    
    ConfirmarAsSenhas();
});

ConfirmeSenha.addEventListener('blur',()=>{
    ConfirmarAsSenhas();
});

