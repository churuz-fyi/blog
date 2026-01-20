<script setup lang="ts">
      import { RouterLink } from 'vue-router'
</script>
<template>
      <div class="px-4 border-2 border-white">
            <RouterLink to="/"><p>Home</p></RouterLink>
            <RouterLink to="/blog"><p>Blog</p></RouterLink>
            <a href="https://github.com/churuz-fyi/" target="_blank"><p>GitHub</p></a>
            <a><p>Projects</p></a>
            <a href="https://link.ruz.fyi/" target="_blank"><p>Links</p></a>
            <a><p>Resume</p></a>
            <a><p>Computer</p></a>
            <a><p>Studies</p></a>
      </div>
</template>

<style scoped>
@reference "../style.css";
p {
      @apply my-3 text-lg hover:underline;
}
</style>
