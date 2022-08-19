import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      article: Model,
    },

    seeds(server) {
      server.create("article", { title: "O que é Lorem Ipsum?", image: "https://ogimg.infoglobo.com.br/in/13664035-144-725/FT1086A/lorem-ipsum-logo.jpg", summary: "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. "})
      server.create("article", { title: "O que é World Wide Web?", image: "https://img.freepik.com/vetores-gratis/pessoas-segurando-icones-da-world-wide-web_53876-64655.jpg?w=2000", summary: "World Wide Web, o famoso WWW, é um sistema de documentos dispostos na Internet que permitem o acesso às informações apresentadas no formato de hipertexto. Para ter acesso a tais informações pode-se usar um programa de computador chamado navegador. " })
      server.create("article", { title: "O e-mail foi criado antes da internet", image: "https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/05/curiosidades-sobre-tecnologia-16-fatos-sobre-a-historia-da-informatica-2.jpg.webp", summary: "Por mais esquisito que possa parecer, o envio de mensagens eletrônicas surgiu antes da rede mundial de computadores. O sistema de tecnologia de mensagens eletrônicas se chamava Mailbox e só podia ser acessado em uma única máquina. Sendo assim, os usuários deixavam mensagens no computador, mas elas só seriam lidas se o destinatária fizesse login na mesma máquina. " })
      server.create("article", { title: "O mascote do Mozilla Firefox não é uma raposa", image: "https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/05/curiosidades-sobre-tecnologia-16-fatos-sobre-a-historia-da-informatica.jpeg.webp", summary: "Em inglês, a palavra fox quer dizer raposa, mas isso não significa que o nome do navegador foi inspirado no animal. Na verdade, trata-se de um panda vermelho, mamífero com pelos vermelhos por todo o corpo. No entanto, o designer que fez a logo não utilizou referências do animal verdadeiro, o que ajudou a criar a confusão entre espécies. " })
      server.create("article", { title: "O Facebook paga para quem encontra erros no site ou aplicativo", image: "https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/05/curiosidades-sobre-tecnologia-16-fatos-sobre-a-historia-da-informatica-6.jpg.webp", summary: "Essa é uma das curiosidades sobre tecnologia para quem quer lucrar. Caso um usuário descubra problemas de vulnerabilidade nos sistemas do Facebook, pode receber uma gratificação da empresa. Os valores começam a partir de US$ 500 e podem ser ampliados, dependendo do risco e do impacto da falha. No entanto, ele também precisa cumprir alguns acordos, como não explorar a falha descoberta. Além do próprio Facebook, outros serviços da empresa também entram na política, incluindo WhatsApp e Instagram. " })

    },

    routes() {
      this.namespace = "api"

      this.get("/articles", (schema) => {
        return schema.articles.all()
      })
    },
  })

  return server
}