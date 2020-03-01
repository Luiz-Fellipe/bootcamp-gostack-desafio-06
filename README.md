<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 6: Primeiro projeto com React Native
</h3>

<p align="center">“Só deseje as coisas as quais você está disposto a lutar”!</p>



<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Demo">Demo</a>
</p>

## :rocket: Sobre o desafio

Nesse desafio adicionei novas funcionalidades na aplicação que desenvolvemos ao longo desse módulo.

## Funcionalidades

#### 1. Loading de repositórios

Adicionei um indicator de loading utilizando `<ActivityIndicator />` antes de carregar a lista de repositórios favoritados na tela de detalhes do Usuário.

#### 2. Scroll infinito

Adicionei uma funcionalidade de scroll infinito na lista de repositórios favoritados. Assim que o usuário chega nos **20%** do final de lista, o aplicativo busca pelos items na próxima página e adiciona na lista.

#### 3. Pull to Refresh

Adicionei uma funcionalidade para quando o usuário arrastar a listagem de repositórios favoritados pra baixo atualizar a lista resetando o estado, ou seja, voltei o estado da paginação para a página 1 exibindo apenas os 30 primeiros itens.

#### 4. WebView

Criei uma nova página na aplicação que é acessada quando o usuário clicar em um repositório favoritado, O conteúdo da página é uma WebView, ou seja, um browser integrado que exibe o atributo `html_url` presente no objeto do repositório que vem da API do Github.

## Demo

<img src=".github/demo.gif" width="400" height="800">
