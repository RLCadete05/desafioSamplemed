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
};
</script>

<template>
  <div class="w-2/3 mx-auto my-20">
    <h1 class="text-3xl font-semibold text-red-600">
      {{ titleBlog }}
    </h1>

    <article
      id="articles"
      v-for="article in articles"
      v-bind:key="article.id"
      class="my-20 text-gray-600"
    >
      <img class="bg-auto bg-no-repeat bg-center" :src="article.image" >
      <h2 class="text-3xl font-semibold mb-4 mt-6">{{ article.title }}</h2>
      <p class="mb-5 text-left">{{ article.summary }}</p>
    </article>
  </div>
</template>