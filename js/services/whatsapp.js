export function acaoZap() {
const telefone = '5511981683775';
const texto = 'Olá, Zar Soluções! Vim pelo site e preciso de suporte.';
const msgFormatada = encodeURIComponent(texto);
const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
window.open(url, '_blank')
}

export function enviarWats(event) {
event.preventDefault();
const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const telefone = '5511981683775';
const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
const msgFormatada = encodeURIComponent(texto);
const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
window.open(url, '_blank');
}