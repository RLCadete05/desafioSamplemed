<script>
import Bloggin from './views/Bloggin.vue'
import Login from './views/Login.vue'

const routes = {
  '/': Bloggin,
  '/login': Login
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] 
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <a href="#/">Bloggin</a> |
  <a href="#/login">Login</a> |
  <component :is="currentView" />
</template>