![cover](.github/cover.png?style=flat)

## 💻 Projeto
Desafio Front-end mobile aplicado pela Coderock.


## ✨ Tecnologias

- [React Native](https://reactnative.dev/) : É a linguagem mobile na qual estou mais focado atualmente.

- [TypeScript](https://www.typescriptlang.org/) : Usado para ter mais fidelidade no código, ajuda demais em momentos de fazer refatorações e manutenções do código, como também auxiliando rapidamente a encontrar erros no código.

- [Expo](https://expo.io/) : Para ter um ganho na produtividade na construção do app, foi utilizado com bare workflow, possibilitando facilmente a utilização de códigos nos quais o expo ainda não dê suporte(caso você precise).

- [React Hook Form](https://react-hook-form.com/) : Ajuda na performance de formulários, como também em validações dos mesmos junto ao Yup.

- [Yup](https://github.com/jquense/yup) : Ajuda demais nas validações de formulários.

- [Axios](https://axios-http.com/ptbr/docs/intro) : Usado para obter os Posts via api vinda do heroku.

- [Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/) : Usado para fazer a instalação de fontes personalizadas, como a Rubik e Roboto usadas nesse projeto.

- [React Navigation](https://reactnavigation.org/) : Utilizado para fazer a navegação entre telas dentro do app, nesse projeto foi utilizado apenas a Stack navigation, considerei utilizar também a Bottom Tabs, já que o projeto possui visualmente uma tab bottom, contudo, o comportamento(funcionamento) de ambos são diferentes, por conta disso optei por fazer essa 'tab bottom' do zero, mais adequado ao projeto.

- [Styled Components](https://styled-components.com/) : Utilizado na estilização CSS da aplicação, escolhi apenas por estar bastante acostumado com ele, mas poderia facilmente ter sido feito com stylesheet ou qualquer outro.

- [React Native uuid](https://github.com/eugenehp/react-native-uuid#readme) : Utilizado apenas para criar um id com uuid para os novos Posts que possam vir a serem criados.


## :hammer_and_wrench: Executando o projeto

Antes de qualquer coisa, será necessário instalar o Expo CLI, caso não tenha em sua máquina. Para isso clique [nesse link](https://docs.expo.dev/get-started/installation/), que conterá todas as instruções para a instalação do mesmo, irá lhe instruir a instalar o Node.js, Git, etc.

Após a instalação do expo e ter puxado o projeto, utilize o **yarn** ou **npm install** para instalar as dependências do projeto.
Com a conclusão da instalação das dependências do projeto, inicie o projeto.<br/>

```cl
expo start
```

Você conseguirá visualizar em seu próprio celular, só precisa ter o aplicativo Expo Go instalado nele, ai é só ler o código de barras gerado no terminal e pronto. Também consegue visualizar pelo emulador android por exemplo, basta instalar o expo go nele também e executar a partir do emulador, fica à seu critério.

**Observações**: 
Caso queira enviar um e-mail para um endereço de e-mail real, vá ao **index.tsx** do componente **Tabbar**, na função **handleSendEmailContact** e insira um e-mail real na variável **url**, se quiser enviar uma cópia também para um e-mail real, coloque o mesmo no **cc** dentro da variável **query**.

---

Feito por Rafael Quartaroli 🤘.

<br />
