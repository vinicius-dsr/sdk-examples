# Browser SDK Demo

Este projeto demonstra o uso de um SDK personalizado para acessar várias APIs nativas do navegador, incluindo áudio, vídeo, GPS, notificações, armazenamento local, área de transferência e vibração.

## Funcionalidades

O projeto inclui exemplos de uso para as seguintes APIs:

1. **Áudio**: Gravação de áudio usando o microfone do dispositivo.
2. **Vídeo**: Captura de vídeo usando a câmera do dispositivo.
3. **GPS**: Obtenção da localização atual do usuário.
4. **Notificações**: Exibição de notificações do navegador.
5. **Armazenamento**: Uso do LocalStorage para armazenar e recuperar dados.
6. **Área de Transferência**: Cópia de texto para a área de transferência.
7. **Vibração**: Ativação da vibração do dispositivo (em dispositivos compatíveis).

## Estrutura do Projeto

- `index.html`: Página principal com a interface do usuário.
- `css/styles.css`: Estilos CSS para a página.
- `js/sdk.js`: Implementação do SDK do navegador.
- `js/sdk.min.js`: Versão minificada do SDK do navegador para uso em produção.
- `js/app.js`: Lógica da aplicação e manipulação de eventos.
- `img/notification-icon.png`: Ícone usado para notificações.

## Como Usar

1. Clone o repositório ou faça o download dos arquivos.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Explore as diferentes funcionalidades clicando nos botões correspondentes.

## Requisitos

- Um navegador web moderno com suporte às APIs utilizadas.
- Para algumas funcionalidades (como áudio, vídeo e GPS), você precisará conceder permissões ao navegador.
