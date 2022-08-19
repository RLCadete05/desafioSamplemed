<script>
export default {
  name: "app",
  data() {
    return {
      articles: [],
      titleBlog: "Bloggin",
    };
  },
  created() {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((json) => {
        this.articles = json.articles;
      });
  },
  /*created(){
    this.loadListArticles();
  },
  methods: {
    loadListArticles() {
      this.$axios
        .$get("/api/articles")
        .then((res) => res.json())
        .then((json) => {
          this.articles = json.articles;
        });
    },
  },*/
};
</script>

<template>
  <div class="lg:flex lg:items-center lg:justify-between">
    <div class="flex-1 min-w-0">
      <span class="sm:ml-3">
        <button
          type="button"
          class="
            inline-flex
            items-center
            px-4
            py-2
            border border-transparent
            rounded-md
            shadow-sm
            text-sm
            font-medium
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Login
        </button>
      </span>
    </div>
  </div>
  <div class="w-1/2 mx-auto my-20">
    <h1 class="text-3xl font-semibold text-red-600">
      {{ titleBlog }}
    </h1>

    <article
      id="articles"
      v-for="article in articles"
      v-bind:key="article.id"
      class="my-20 text-gray-600"
    >
      <h2 class="text-5xl font-semibold mb-5">{{ article.title }}</h2>
      <p class="mb-5">{{ article.summary }}</p>
      <p class="text-red-500">Ler mais</p>
    </article>
  </div>
</template>