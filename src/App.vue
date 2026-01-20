<script setup lang="ts">
      import { RouterView } from 'vue-router'
      import Side from './components/Side.vue'
</script>

<template>
      <div class="grid grid-cols-5 p-8">
            <Side class="col-span-1 h-fit"/>
            <RouterView class="col-span-4"/>
      </div>
</template>
