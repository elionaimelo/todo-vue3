<script setup lang="ts">
import { useTodoStore } from "@/stores/task";
const store = useTodoStore();
</script>

<template>
  <header class="px-8 border-b border-b-gray-200">
    <button class="pb-4 font-bold border-b-2 border-b-indigo-700">
      Todo
      <span class="px-2 py-1 bg-gray-200 rounded-full text-slate-600">
        {{ store.tasks.length }}
      </span>
    </button>
  </header>
</template>
