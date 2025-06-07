# 💼 Portfólio Pessoal — Alyson Rafael Reis Arruda de Lima

Bem-vindo ao meu portfólio pessoal! Este projeto foi desenvolvido com o objetivo de apresentar minha trajetória acadêmica, experiências profissionais, projetos desenvolvidos e também um mini game interativo chamado **Jogo da Senha** (baseado em *Bulls and Cows*).

## 🧠 Sobre Mim

Sou um estudante apaixonado por tecnologia, atualmente no 2º período de **Sistemas para Internet** na UNICAP. Tenho interesse em desenvolvimento Full Stack, design de interfaces e soluções inovadoras para o mundo digital.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes ferramentas e tecnologias:

### 🛠️ Frontend
- **Next.js 14+** (App Router)
- **React**
- **Tailwind CSS** — Estilização com foco em preto e vermelho como base
- **JavaScript (ES6+)**

### 📦 Gerenciamento
- **Node.js** & **npm**
- **PostCSS** e **Autoprefixer**

### 🧪 Funcionalidades Incluídas
- Estrutura modular com App Router (pasta `app/`)
- Layout global compartilhado com navegação entre páginas
- Estilo responsivo com Tailwind
- Jogo interativo com validação de tentativas
- Página "Sobre" detalhando o stack usado no projeto
- Lista reversa de tentativas no jogo
- Botão de novo jogo e alerta da senha correta

---

## 📁 Estrutura do Projeto
 meu-portifolio/
├── app/
│ ├── page.js # Página Home
│ ├── layout.js # Layout global com navegação
│ ├── sobre/
│ │ └── page.js # Tecnologias utilizadas
│ ├── academico/
│ │ └── page.js # Experiência Acadêmica
│ ├── profissional/
│ │ └── page.js # Experiência Profissional
│ ├── projetos/
│ │ └── page.js # Projetos realizados
│ ├── jogo/
│ │ └── page.js # Jogo da Senha (Bulls and Cows)
├── public/
│ └── favicon.ico
├── styles/
│ └── globals.css # Estilização global com Tailwind
├── tailwind.config.js # Configuração do Tailwind
├── postcss.config.js # Configuração do PostCSS
├── package.json
├── package-lock.json
├── jsconfig.json # Configuração para caminhos absolutos
└── README.md # Este arquivo

---

## 🎮 Jogo da Senha (Bulls and Cows)

O jogo consiste em descobrir uma senha secreta com 4 dígitos únicos. A cada tentativa, o jogo informa:

- Quantos dígitos estão corretos e na posição correta (**bulls** 🐂)
- Quantos dígitos estão corretos mas na posição errada (**cows** 🐄)

O jogo termina se:
- A senha for adivinhada
- O jogador fizer 10 tentativas sem sucesso

🔄 Possui botão para novo jogo e alerta com a senha correta!

---

## 📬 Contato

📧 Email: [alysonrafael2005@gmail.com](mailto:alysonrafael2005@gmail.com)  
💼 LinkedIn: https://www.linkedin.com/in/alyson-lima-a556522a0/  
📍 Recife - PE
