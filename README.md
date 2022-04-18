# LOLDESIGN ShowMeTheCode Test

Este projeto trata-se de uma aplicação Web para uma empresa telefônica Telzir, onde o cliente pode calcular o valor da ligação.

Após o usuário fazer login com seu nome, é redirecionado para uma tela onde pode escolher os códigos das cidades de origem e destino, o tempo de ligação em minutos e escolher o plano FaleMais.

Após inserir os dados é mostrado o valor da ligação com o plano e sem o plano


## Tecnologias Utilizadas

 <img  height="40" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="REACT" />

  <img  height="40" width="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" alt="Typescript" />

<img  height="40" width="80" src="https://miro.medium.com/max/1200/1*HuEr6-Y7nXOTGJoyZf0Yew.png" alt="CYPRESS"/>

## Executando a aplicação

```bash
docker-compose up -d
```

## Executando os testes

> :warning: Será aberto no seu navegador o Cypress, após aberto selecione o arquivo `Login.spec.ts`, ou `Sign-up.spec.ts` ou `Home.spec.ts`, para testar as páginas individualmente.

```bash
npm test
```
