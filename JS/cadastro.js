const cadastrarBtn = document.getElementById('cadastrarBtn');
const feedbackSpan = document.getElementById('feedback');

cadastrarBtn.addEventListener('click', function() {
  // Aqui você colocaria a lógica real para cadastrar o usuário
  // Por exemplo, enviar dados para um servidor

  // Simulação de sucesso do cadastro:
  feedbackSpan.style.display = 'inline'; // Exibe a mensagem de feedback

  // Opcional: Esconder a mensagem após alguns segundos
  setTimeout(function() {
    feedbackSpan.style.display = 'none';
  }, 3000); // Esconde após 3 segundos
});