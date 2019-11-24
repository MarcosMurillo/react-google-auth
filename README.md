A solução para o desafio

    Foi apresentado pelo cliente, que aplicação deveria se autenticar usando o segundo fator do aplicativo google authenticator, considerando que o cliente já teria um cadastro digital e uma api que  já forneceria os dados do usuário após o login, apenas por simetria de autenticação, foi utilizado um pacote npm para realizar o login   com uma conta google, após essa etapa foi preciso consumir uma segunda api para a autenticação de segundo fator, onde o usuário com o app do google authenticator irá escanear no QR-Code e informar o PIN para por fim acessar a pagina de informações.

Como o código funciona

    O código apresenta 3 etapas de funcionamento: login, segundo fator e a pagina com as informações do usuário.

    Na etapa de login foi usado o pacote npm react-google-login, que é um serviço para se autenticar com uma conta google, após essa autenticação as informações publicas de retorno do usuário foi armazenado no localStorage.

    Na etapa de autenticação do segundo fator, foi utilizada a authenticatorapi.com, uma forma simples que fornece 2 url’s, uma para criar QR-Code onde o usuário ir escanear com o aplicativo do google authenticator e outra para enviar o PIN que o aplicativo irá fornecer após o usuário informar o código e após confirmar a validade o usuário é redirecionado para a ultima pagina.

    Na pagina de informações do usuário, ele consegue ver as informações da conta de login, fazer logout se desejado, as tecnologias que foram utilizadas para criar toda a aplicação,  e com opção de acessar o código fonte no GitHub.

Link para aplicação:
https://react-google-auth.netlify.com

Link para código no GitHub:
https://github.com/MarcosMurillo/react-google-auth
