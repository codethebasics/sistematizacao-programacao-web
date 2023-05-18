/**
 * Efetua rolagem da barra para o alvo
 * 
 * @param {*} to local para onde rolar
 */
function scrollTarget(view) {
    document.getElementById(view).scrollIntoView({behaviour: 'smooth'});
}

/**
 * Consulta os dados de um CEP
 * 
 * @param {*} cep cep a ser consultado
 */
function consultarCEP(cep) {
    if (cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then(response => response.json())
            .then(data => {
                const inputLogradouro = document.getElementById('logradouro');
                const inputComplemento = document.getElementById('complemento');
                const inputBairro = document.getElementById('bairro');
                const inputUF = document.getElementById('estado');

                inputLogradouro.value = data.logradouro;
                inputComplemento.value = data.complemento;
                inputBairro.value = data.bairro;
                inputUF.value = data.uf;
            });
    }
}

/**
 * Fecha overlay
 */
function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('estado').value = '';
}

/**
 * Função auto-invocada para desabilitar submit padrão do formulário
 */
(() => {
    document.getElementById("form-inscricao").addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const cep = document.getElementById('cep').value;
        const logradouro = document.getElementById('logradouro').value;
        const complemento = document.getElementById('complemento').value;
        const bairro = document.getElementById('bairro').value;
        const estado = document.getElementById('estado').value;

        console.log('nome', nome);
        console.log('email', email);
        console.log('cep', cep);
        console.log('complemento', complemento);
        console.log('bairro', bairro);
        console.log('estado', estado);

        const outputNome = document.getElementById('outputNome');
        const outputEmail = document.getElementById('outputEmail');
        const outputCep = document.getElementById('outputCep');
        const outputLogradouro = document.getElementById('outputLogradouro');
        const outputComplemento = document.getElementById('outputComplemento');
        const outputBairro = document.getElementById('outputBairro');
        const outputUf = document.getElementById('outputUf');

        outputNome.innerHTML = nome;
        outputEmail.innerHTML = email;
        outputCep.innerHTML = cep;
        outputLogradouro.innerHTML = logradouro;
        outputComplemento.innerHTML = complemento;
        outputBairro.innerHTML = bairro;
        outputUf.innerHTML = estado;

        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
    })
})();

/**
 * Função auto-invocada para adicionar evento ao campo CEP
 */
(() => {
    const cep = document.getElementById("cep");

    cep.addEventListener('blur', () => {
        consultarCEP(cep.value);
    })
})()