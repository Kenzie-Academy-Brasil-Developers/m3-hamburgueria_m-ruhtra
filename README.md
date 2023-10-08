# PROJETO BURGUER KENZIE

## Kenzie Academy | Turma T19 - M3
## Projeto - Burguer Kenzie
----

### Objetivo:
O objetivo desta entrega é implementar um conjunto de funcionalidades e estilização a projeto existente, 
colocando em prática os conhecimentos aprendidos até aqui.  

Iremos acessar a lista de produto de uma API e simular um carrinho de compras com React.
Além disso, para praticar a estilização, a aplicação está semelhante ao Figma.  


### Realizado:

#### 1. Estilização
- Estilização com SASS e SASS Modules.

#### 2. Trazendo os produtos da API | Busca
- Utilização da biblioteca Axios para realização de requisição HTTP, com o método GET;
- Uilização do useEffect - *onMount* - para carregar os itens da API e armazená-los na lista adequada;
- Criação de lógica de filtro de busca interativo.

#### 3. Gerenciamento do carrinho | Modal
- Lógica para adição e remoção de itens no carrinho de compras;
- Utilização do useEffect - *onUpdate* - para persistir os dados do carrinho no localStorage.

#### 4. Modal
- Abertura e fechamento convencional;
- Utilização do useEffect - *onDismount* - para fechar o modal ao clicar fora e ao clicar na tecla "Esc" do teclado.
