# DEPLOY
https://kenziehub-weld.vercel.app/

# API
https://gitlab.com/ka-br-out-2020/game-rank-api

# Features necessárias na entrega
1 - O usuário pode se cadastrar
2 - O usuário pode logar em sua conta
3 - O usuário pode cadastrar as tecnologias que ele conhece
4 - O usuário consegue visualizar e deletar as tecnologias que ele conhece

# Regras de negócio
1 - Todos os formulários tem validações, para não enviar nenhum dado errado para a API.

2 - O Token está sendo salvo no localStorage de forma correta e sendo utilizado para verificar se o usuário está logado ou não.

3 - O usuário deslogado não pode acessar a aplicação core

# ROTAS 
1 ('/') - Página de Login
2 ('/cadastrar') - Página para cadastrar usuário
3 ('/home') - Página inicial do usuário logado
4 ('/cadastrar-tecnologia') - Página para cadastrar Tecnologia
5 ('/tecnologias') - Página para exibir ou deletar Tecnologias cadastradas pelo usuário
6 ('* diferente das outras ') - Renderiza uma Página de ERROR 404 