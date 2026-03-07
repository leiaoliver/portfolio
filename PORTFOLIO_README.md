# 🚀 Portfólio Profissional - Leia Oliver

Portfólio moderno e profissional construído com **Next.js 15**, **React 19**, **TypeScript** e **TailwindCSS 4**, focado em IA, Automação e Engenharia de Prompt.

## ✨ Características

- 🎨 **Design Moderno e Minimalista** - Estilo dark mode com gradientes e animações suaves
- ⚡ **Performance Otimizada** - Next.js App Router com Server Components
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- 🎯 **SEO Otimizado** - Metadados completos para melhor visibilidade
- 🌈 **Animações Suaves** - Transições e hover effects profissionais
- 🧩 **Componentizado** - Código limpo e reutilizável

## 🏗️ Estrutura do Projeto

```
my_portfolio/
├── app/
│   ├── components/
│   │   ├── Hero.tsx              # Seção principal com CTA
│   │   ├── About.tsx             # Sobre mim e especialidades
│   │   ├── Skills.tsx            # Habilidades técnicas com progress bars
│   │   ├── Projects.tsx          # Projetos em destaque
│   │   ├── PromptEngineering.tsx # Exemplos de prompts avançados
│   │   ├── Contact.tsx           # Formulário de contato
│   │   └── Navbar.tsx            # Navegação (opcional)
│   ├── globals.css               # Estilos globais
│   ├── layout.tsx                # Layout e metadata
│   └── page.tsx                  # Página principal
├── public/                       # Arquivos estáticos
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🚀 Como Executar

1. **Instalar dependências:**
```bash
npm install
```

2. **Rodar em desenvolvimento:**
```bash
npm run dev
```

3. **Abrir no navegador:**
```
http://localhost:3000
```

## 🎨 Personalização

### 1️⃣ **Dados Pessoais**

Edite os seguintes arquivos para adicionar suas informações:

#### `app/components/Hero.tsx`
```tsx
// Linha 29: Seu nome
<h1>Seu Nome</h1>

// Linha 35: Seu título
<p>Seu Título Profissional</p>
```

#### `app/components/Contact.tsx`
```tsx
// Linha 31-53: Suas informações de contato
const contactInfo = [
  {
    value: "seuemail@email.com",
    href: "mailto:seuemail@email.com",
  },
  // ... atualizar LinkedIn e GitHub
];
```

### 2️⃣ **Sobre Você**

Edite `app/components/About.tsx`:
- Atualize os parágrafos com sua bio
- Ajuste as especialidades conforme sua experiência

### 3️⃣ **Skills**

Edite `app/components/Skills.tsx`:
- Adicione/remova tecnologias
- Ajuste os níveis de proficiência (0-100)
- Modifique as categorias

### 4️⃣ **Projetos**

Edite `app/components/Projects.tsx`:
- Substitua os projetos de exemplo pelos seus
- Adicione descrições reais
- Atualize as tecnologias usadas
- Inclua métricas de impacto reais

### 5️⃣ **Cores e Tema**

Edite `app/globals.css` para ajustar:
```css
:root {
  --background: #ffffff;  /* Cor de fundo modo claro */
  --foreground: #171717;  /* Cor de texto modo claro */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;  /* Cor de fundo modo escuro */
    --foreground: #ededed;  /* Cor de texto modo escuro */
  }
}
```

## 🔧 Melhorias Futuras Sugeridas

### 📊 **Analytics**
Adicionar Google Analytics ou Vercel Analytics:
```bash
npm install @vercel/analytics
```

### 📧 **Formulário Funcional**
Integrar com serviços como:
- **EmailJS** - Envio de emails direto do frontend
- **Resend** - API moderna de envio de emails
- **Formspree** - Serviço de formulários

### 🎭 **Animações Avançadas**
```bash
npm install framer-motion
```

Adicionar animações mais complexas:
- Scroll animations
- Page transitions
- Parallax effects

### 🌐 **Internacionalização**
```bash
npm install next-intl
```

Suportar múltiplos idiomas (PT/EN).

### 🎨 **Tema Customizável**
Adicionar toggle de tema claro/escuro manual.

### 📱 **PWA**
Transformar em Progressive Web App:
```bash
npm install next-pwa
```

### 🤖 **Chatbot Interativo**
Adicionar um mini chatbot na página usando:
- OpenAI API
- Vercel AI SDK

### 📸 **Galeria de Imagens**
Adicionar screenshots dos projetos usando:
```bash
npm install yet-another-react-lightbox
```

## 🎯 SEO e Performance

### Checklist de Deploy:

- ✅ Metadados configurados (`layout.tsx`)
- ✅ Imagens otimizadas com Next.js Image
- ✅ Fontes otimizadas com next/font
- ⬜ Adicionar `robots.txt`
- ⬜ Adicionar `sitemap.xml`
- ⬜ Open Graph images
- ⬜ Analytics configurado

### Criar `public/robots.txt`:
```txt
User-agent: *
Allow: /

Sitemap: https://seusite.com/sitemap.xml
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arraste a pasta .next para o Netlify
```

### Outros
O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- AWS Amplify
- Railway
- Render
- Cloudflare Pages

## 📦 Tecnologias Utilizadas

- **Next.js 16.1** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **TailwindCSS 4** - Estilização
- **Geist Font** - Tipografia moderna

## 💡 Dicas de Conteúdo

### Para Seção "Hero"
- Use uma frase de impacto que mostre valor imediato
- Destaque 2-3 especializações principais
- CTAs claros e diretos

### Para Seção "Sobre"
- Conte sua história de forma concisa
- Mostre sua visão/paixão pela tecnologia
- Inclua resultados concretos quando possível

### Para Seção "Projetos"
- Sempre inclua o IMPACTO (métricas, resultados)
- Explique o PROBLEMA que resolveu
- Liste tecnologias de forma estratégica
- Use verbos de ação (Desenvolveu, Criou, Automatizou)

### Para Seção "Skills"
- Seja honesto nos níveis
- Agrupe por categorias lógicas
- Destaque as mais relevantes para seu objetivo

## 🎨 Paleta de Cores Atual

```css
Violet: #8b5cf6 (Primary)
Cyan: #06b6d4 (Secondary)
Emerald: #10b981 (Accent)
Amber: #f59e0b (Highlight)
```

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

---

**Desenvolvido com ❤️ usando Next.js + TailwindCSS**

Para dúvidas ou sugestões, entre em contato!
