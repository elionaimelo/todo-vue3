<script setup lang="ts">
import ListTodo from "@/components/ListTodo.vue";
import AddTodo from "@/components/AddTodo.vue";
import HeaderTodo from "@/components/HeaderTodo.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="mb-10 text-3xl font-extrabold text-gray-600">
      Todo vue 3, typescript, Pinia and Tailwind
    </h1>
    <div class="container mx-auto">
      <AddTodo />

      <div class="max-w-3xl pt-6 mx-auto bg-white rounded-lg shadow-xl">
        <HeaderTodo />
        <ListTodo />
      </div>
    </div>
  </div>
</template>
