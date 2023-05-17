/**
 * Efetua rolagem da barra para o alvo
 * 
 * @param {*} to local para onde rolar
 */
function scrollTarget(view) {
    document.getElementById(view).scrollIntoView({behaviour: 'smooth'});
}