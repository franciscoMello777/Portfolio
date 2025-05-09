function mostrarDetalhes(botao) {
  const detalhes = botao.nextElementSibling;
  const estaAtivo = detalhes.classList.contains('ativo');

  detalhes.classList.toggle('ativo');
  botao.textContent = estaAtivo ? 'Ver mais' : 'Ver menos';
}