function mostrarDetalhes(botao) {
  const detalhes = botao.nextElementSibling;
  const aberto = detalhes.style.display === 'block';
  detalhes.style.display = aberto ? 'none' : 'block';
  botao.textContent = aberto ? 'Ver mais' : 'Ver menos';
}