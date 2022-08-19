import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      article: Model,
    },

    seeds(server) {
      server.create("article", { title: "O que é Lorem Ipsum?", summary: "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. "})
      server.create("article", { title: "O que é World Wide Web?", summary: "World Wide Web, o famoso WWW, é um sistema de documentos dispostos na Internet que permitem o acesso às informações apresentadas no formato de hipertexto. Para ter acesso a tais informações pode-se usar um programa de computador chamado navegador. " })
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