# TGD Website

<!--toc:start-->

- [TGD Website](#tgd-website)
  - [📁 Estrutura do projeto](#📁-estrutura-do-projeto)
    - [Components](#components)
    - [database](#database)
    - [domain](#domain)
    - [layouts](#layouts)
    - [main](#main)
    - [pages](#pages)
    - [utils](#utils)
  - [⬇️ Installation](#️-installation)
    - [Antes instale](#antes-instale)
    - [Comandos](#comandos)
  - [💻 Technologies](#💻-technologies)
  <!--toc:end-->

## 📁 Estrutura do projeto

```
src
├── components
│   ├── icons
│   ├── layout
│   │   └── header
│   │       └── menu
│   ├── link
│   ├── sections
│   └── ui
├── database
│   └── games
├── domain
│   └── protocols
├── layouts
├── main
│   └── factories
├── pages
│   └── games
└── utils
```

### Components

Definição: Um componente é um bloco de código reutilizável e independente, que divide a interface do usuário em partes menores.

Aqui definimos blocos de código responsáveis por renderizar algumas partes da interface.

Um exemplo é a pasta "icons", aqui definimos um componente usando o [React](https://react.dev/) ou [Astro](https://astro.build/), para renderizar algum ícone, como o do facebook, por exemplo.

### database

Aqui colocamos os dados que serão exibidos no site.

Um exemplo é o texto de descrição na página inicial.

### domain

Aqui colocamos as interfaces que irão guiar a aplicação.

### layouts

Pasta padrão do [Astro](https://astro.build/).

### main

Pasta usada para definir funcionalidades globais.

### pages

Pasta padrao do [Astro](https://astro.build/). Nela é feito o routeamento das páginas. [Docs](https://docs.astro.build/en/core-concepts/astro-pages/)

### utils

Pequenas funções que serão usada para casos específicos. Por exemplo, realizar conversões de valores.

## ⬇️ Installation

### Antes instale

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/)

### Comandos

```bash
# clone it
$ git clone https://github.com/The-Guardian-Dog-Studio/TGD-Website-Client.git

$ cd TGD-Website-Client

# Install dependencies
$ npm install

# Running scripts
$ npm run dev
```

## 💻 Technologies

- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/)
- [SplideJS](https://splidejs.com/)
