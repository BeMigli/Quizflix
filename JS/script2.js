let perguntaAtual = 1;
let totalAcertos = 0;

const gabarito = {
  1: 'A',   
  2: 'C', 
  3: 'A',
  4: 'B',
  5: 'C',
  6: 'A',
  7: 'C',
  8: 'B',
  9: 'A',
  10: 'B'
};

function pularPergunta() {
  perguntaAtual++;
  if (perguntaAtual <= 10) {
    mudarTela('pergunta' + perguntaAtual);
  } else {
    mostrarResultado();
  }
}

function mudarTela(id) {
  const telas = document.querySelectorAll('.tela');
  telas.forEach(tela => tela.classList.remove('ativa'));

  const novaTela = document.getElementById(id);
  if (novaTela) {
    novaTela.classList.add('ativa');
  } else {
    console.error(`Tela com ID "${id}" não encontrada.`);
  }
}

function responder(opcao) {
  if (opcao === gabarito[perguntaAtual]) {
    totalAcertos++;
  }
  perguntaAtual++;
  if (perguntaAtual <= 10) {
    mudarTela('pergunta' + perguntaAtual);
  } else {
    mostrarResultado();
  }
}



function mostrarResultado() {
  // Troca para a tela de resultado
  mudarTela('tela-resultado');

  // Atualiza o texto de resultado
  const resultadoTexto = document.getElementById('resultado-texto');
  if (resultadoTexto) {
    resultadoTexto.textContent = `Você acertou ${totalAcertos} de 10 perguntas!`;
  }

  // Mostra o botão correto
  const btnAvancar = document.getElementById('btn-avancar');
  const btnTentar = document.getElementById('btn-tentar');
  if (totalAcertos >= 5) {
    if (btnAvancar) btnAvancar.style.display = 'inline-block';
    if (btnTentar) btnTentar.style.display = 'none';
  } else {
    if (btnAvancar) btnAvancar.style.display = 'none';
    if (btnTentar) btnTentar.style.display = 'inline-block';
  }
}

function tentarNovamente() {
  perguntaAtual = 1;
  totalAcertos = 0;

  // Esconde os botões de resultado
  const btnAvancar = document.getElementById('btn-avancar');
  const btnTentar = document.getElementById('btn-tentar');
  if (btnAvancar) btnAvancar.style.display = 'none';
  if (btnTentar) btnTentar.style.display = 'none';

  // Volta para a primeira pergunta
  mudarTela('pergunta1');
}
