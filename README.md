### Documentação do Projeto Frontend do E-commerce

Este documento serve como guia para o desenvolvimento e manutenção do frontend do projeto de e-commerce que vende sementes de cannabis.

---

#### Sumário
1. [Estrutura do Projeto](#estrutura-do-projeto)
2. [Dependências](#dependências)
3. [Configuração do Ambiente](#configuração-do-ambiente)
4. [Scripts Disponíveis](#scripts-disponíveis)
5. [Componentes](#componentes)
6. [Estado Global](#estado-global)
7. [Roteamento](#roteamento)
8. [Contribuição](#contribuição)

---

### Estrutura do Projeto

A estrutura do diretório do frontend é a seguinte:

```
ecommerce-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── about/
│   │   ├── bannerDiscount/
│   │   ├── blog/
│   │   ├── blogDetails/
│   │   ├── buttons/
│   │   ├── doubleBanner/
│   │   ├── feature/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── productCard/
│   │   ├── productDetail/
│   │   ├── shoppingCart/
│   │   ├── smallBanners/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   │   ├── Login/
│   │   ├── Register/
│   ├── App.js
│   ├── index.js
├── package.json
├── .gitignore
└── README.md
```

### Dependências

As principais dependências do projeto incluem:

- React
- React Router DOM
- Context API para gerenciamento de estado

### Configuração do Ambiente

Siga as etapas abaixo para configurar o ambiente de desenvolvimento:

1. **Clonar o Repositório:**
   ```sh
   git clone https://github.com/SEU_USUARIO/ecommerce-frontend.git
   cd ecommerce-frontend
   ```

2. **Instalar Dependências:**
   ```sh
   npm install
   ```

3. **Iniciar o Servidor de Desenvolvimento:**
   ```sh
   npm start
   ```

### Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm build`: Cria a aplicação para produção na pasta `build`.

### Componentes

Os componentes estão localizados na pasta `src/components`. Aqui estão os principais componentes e suas responsabilidades:

- **about**: Componente que exibe informações sobre a empresa.
- **bannerDiscount**: Componente para exibir banners de desconto.
- **blog**: Componente para listar artigos do blog.
- **blogDetails**: Componente para exibir detalhes de um artigo do blog.
- **buttons**: Componentes reutilizáveis de botões.
- **doubleBanner**: Componente para exibir banners duplos.
- **feature**: Componente para exibir características do produto.
- **footer**: Componente do rodapé.
- **header**: Componente do cabeçalho.
- **hero**: Componente para exibição principal.
- **productCard**: Componente de cartão de produto.
- **productDetail**: Componente de detalhes do produto.
- **shoppingCart**: Componente do carrinho de compras.
- **smallBanners**: Componentes para exibição de banners menores.

### Estado Global

O estado global é gerenciado utilizando a Context API do React. A configuração do contexto e os provedores de estado estão localizados em `src/context`.

### Roteamento

O roteamento é gerenciado pelo React Router DOM. As principais rotas do projeto incluem:

- `/home`: Página inicial.
- `/shopping`: Página de compras.
- `/about`: Página sobre a empresa.
- `/contact`: Página de contato.
- `/blog`: Página do blog.
- `/cart`: Página do carrinho de compras.
- `/login`: Página de login.
- `/register`: Página de registro.

A configuração do roteamento está localizada em `src/App.js`.

### Contribuição

Para contribuir com o projeto, siga as etapas abaixo:

1. **Fork o Repositório:**
   Clique no botão "Fork" no repositório GitHub.

2. **Clone o Seu Fork:**
   ```sh
   git clone https://github.com/SEU_USUARIO/ecommerce-frontend.git
   cd ecommerce-frontend
   ```

3. **Crie um Branch para Sua Feature:**
   ```sh
   git checkout -b minha-feature
   ```

4. **Commit suas Alterações:**
   ```sh
   git commit -m "Adiciona minha feature"
   ```

5. **Envie para o Repositório Remoto:**
   ```sh
   git push origin minha-feature
   ```

6. **Crie um Pull Request:**
   Abra um Pull Request no repositório original.

Se precisar de mais detalhes ou ajuda em alguma parte específica, sinta-se à vontade para perguntar!