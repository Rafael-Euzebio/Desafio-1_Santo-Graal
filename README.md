# 📌 Descrição do Projeto
 
Este pull request apresenta diversas melhorias importantes no projeto, incluindo a integração do Tailwind CSS para estilização, a adição do React Router para navegação e a implementação de um novo layout com navbar responsiva, footer e uma página inicial no estilo "Holy Grail". Também foram atualizadas dependências e feitas melhorias nos arquivos HTML e de configuração para suportar essas funcionalidades.
 
---
 
## 🎨 Estilização e Interface
 
- Foi adicionado o **Tailwind CSS** ao projeto, incluindo configuração no `vite.config.ts`, importação no `src/index.css` e substituição do CSS anterior no `src/main.tsx`. Isso permite o uso de estilização baseada em utilitários em toda a aplicação.
- O `index.html` foi atualizado para utilizar a fonte **Roboto** do Google Fonts, além de melhorias como:
  - Definição do idioma para PT-BR
  - Atualização do favicon
  - Melhorias no título da página
 
---
 
## 🔀 Roteamento e Estrutura
 
- Integração do **React Router** com adição do `react-router-dom` e refatoração do `App.tsx` para usar um layout baseado em rotas com:
  - Navbar
  - Footer
  - Área principal de conteúdo
- Criação de um componente `Navbar` responsivo com links de navegação
- Criação de um componente `Footer` com redes sociais, contato e navegação
 
---
 
## 🏠 Implementação de Página
 
- Implementação da página `Home` utilizando o layout **"Holy Grail"**, com sidebars responsivas e conteúdo central, totalmente estilizado com Tailwind CSS
 
---
 
## 📦 Dependências
 
- Adição de bibliotecas de ícones:
  - `@phosphor-icons/react`
  - `lucide-react`
- Integração do Tailwind:
  - `@tailwindcss/vite`
  - `tailwindcss`
 
---
 
## 💻 Demonstração - Desktop
 

https://github.com/user-attachments/assets/db972e22-ba6f-4392-b0b3-93782146eebd


---
 
## 📱 Demonstração - Mobile
 

 

https://github.com/user-attachments/assets/49990dda-d486-463d-a520-ddf8204285f9

