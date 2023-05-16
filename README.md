
# User Repo Login

Este projeto "User Repo Login" é uma aplicação web desenvolvida com React, utilizando Yarn como gerenciador de pacotes. O objetivo dessa aplicação é fornecer um sistema de login para os usuários, permitindo que eles gerenciem seus repositórios salvos em um banco de dados.

## Estrutura do Projeto

O repositório está organizado em duas pastas principais:

### `SisRepo-server`

A pasta `SisRepo-server` contém a parte backend da aplicação. Ela implementa as funcionalidades CRUD (Create, Read, Update, Delete) para usuários e repositórios. Aqui estão alguns destaques dessa parte do projeto:

-   Autenticação: A implementação inclui um sistema de autenticação seguro para os usuários, garantindo que apenas usuários autenticados possam acessar as funcionalidades da aplicação.
-   CRUD de Usuários: Permite criar, ler, atualizar e excluir informações de usuários, como nome, email e senha.
-   CRUD de Repositórios: Permite que os usuários gerenciem seus repositórios salvos, incluindo, pesquisando e excluindo repositórios.

### `SisRepo-app`

A pasta `SisRepo-app` contém a aplicação frontend, desenvolvida com React. Aqui estão algumas características da parte frontend:

-   Tela de Login: Permite que os usuários autentiquem-se com suas credenciais.
-   Listagem de Repositórios: Após o login, os usuários têm acesso a uma página que lista os repositórios salvos no banco de dados. Eles podem visualizar informações detalhadas sobre cada repositório.
-   Opções de Pesquisa: Os usuários podem pesquisar por repositórios específicos usando um recurso de pesquisa integrado.
-   Adicionar e Apagar Repositórios: Os usuários podem adicionar novos repositórios à sua lista de salvos e também têm a opção de remover repositórios existentes.

## Como executar o projeto

Para executar o projeto localmente, siga as etapas abaixo:

1.  Certifique-se de ter o Node.js e o Yarn instalados em seu sistema.
2.  Clone este repositório em seu ambiente local.
3.  Navegue até a pasta `SisRepo-server` e crie um arquivo `.env` baseado no arquivo `.env.example`. No arquivo `.env`, configure a variável `MONGODB_URI` com a URL de conexão fornecida pelo banco de dados MongoDB.
4.  Execute `yarn install` para instalar as dependências.
5.  Inicie o servidor backend com o comando `yarn start`.
6.  Em outra janela do terminal, navegue até a pasta `SisRepo-app` e execute `yarn install` para instalar as dependências.
7.  Inicie a aplicação frontend com o comando `yarn start`.

A aplicação estará disponível em `http://localhost:3000`.

## Como criar um usuário

Para criar um usuário no sistema, você pode utilizar programas como o Postman para realizar uma requisição HTTP POST para `{{url_base}}/users`. A requisição deve incluir um corpo (body) contendo os seguintes dados no formato JSON:

`{
    "email": "exemple@exemple.com",
    "password": "secret"
}` 

Certifique-se de substituir `"exemple@exemple.com"` pelo email desejado e `"secret"` pela senha desejada.

Além disso, é necessário fornecer um cabeçalho de autenticação. Utilize o esquema de autenticação Bearer Token, em que o token de acesso é passado no cabeçalho da requisição. O token deve ser obtido por meio de um processo de autenticação anterior.

Após enviar a requisição, o sistema irá processar as informações fornecidas e criar um novo usuário no banco de dados.

Certifique-se de que a URL base `{{url_base}}` esteja corretamente configurada, refletindo o endereço correto do servidor onde a aplicação está sendo executada.

Por favor, observe que essas são apenas diretrizes gerais para criar um usuário no sistema usando o Postman ou programas semelhantes. As configurações exatas e o processo podem variar dependendo da implementação específica do projeto.




Sinta-se à vontade para explorar e modificar o projeto de acordo com suas necessidades. Qualquer contribuição ou sugestão é bem-vinda!
