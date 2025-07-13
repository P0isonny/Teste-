document.getElementById('form-pedido').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const lanche = document.getElementById('lanche').value;
  const quantidade = document.getElementById('quantidade').value;

  const resposta = `Obrigado, ${nome}! Seu pedido de ${quantidade} ${lanche}(s) foi recebido.`;
  document.getElementById('resposta').textContent = resposta;
});
