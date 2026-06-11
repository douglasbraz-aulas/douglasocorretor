// contato.js - Lógica do formulário de contato com envio para o WhatsApp

export function initContato() {
  const form = document.querySelector('#form-contato');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Impede o envio tradicional do formulário
      
      // Captura os dados preenchidos pelo usuário
      const nome = document.querySelector('#user-name').value.trim();
      const telefone = document.querySelector('#user-phone').value.trim();
      const imovel = document.querySelector('#user-interest').value;
      const mensagem = document.querySelector('#user-message').value.trim();
      
      // Validação básica de segurança
      if (!nome || !telefone || !imovel) {
        alert('Por favor, preencha todos os campos obrigatórios (Nome, Telefone e Imóvel de Interesse).');
        return;
      }
      
      // Número de telefone do WhatsApp do Douglas (pode ser alterado para o real)
      const numeroWhats = '5511999999999'; 
      
      // Formata a mensagem com quebras de linha amigáveis e emojis
      const textoMensagem = 
        `Olá Douglas! Gostaria de receber mais informações pelo site:\n\n` +
        `👤 *Nome:* ${nome}\n` +
        `📞 *Telefone:* ${telefone}\n` +
        `🏢 *Imóvel de Interesse:* ${imovel}\n` +
        `💬 *Mensagem:* ${mensagem || 'Sem mensagem adicional.'}`;
      
      // Converte a mensagem formatada para formato de URL segura (URI)
      const textoEncoded = encodeURIComponent(textoMensagem);
      
      // Cria a URL da API do WhatsApp
      const urlWhats = `https://wa.me/${numeroWhats}?text=${textoEncoded}`;
      
      // Abre a conversa em uma nova aba do navegador
      window.open(urlWhats, '_blank');
      
      // Opcional: limpa o formulário após enviar
      form.reset();
    });
  }
}
