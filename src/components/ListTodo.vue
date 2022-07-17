<script setup lang="ts">
import { PhCheck, PhTrash } from "phosphor-vue";
import { useTodoStore } from "@/stores/task";
import LoadingSpinner from "./LoadingSpinner.vue";

const store = useTodoStore();

function onComplete(id: number) {
  store.completeTask(id);
}

function onDelete(id: number) {
  store.deleteTask(id);
}
</script>

<template>
  <div class="p-8">
    <div class="flex flex-col" v-if="store.tasks.length > 0 && !store.loading">
      <div
        class="flex items-center justify-between mb-4"
        v-for="item in store.tasks"
        :key="item.id"
      >
        <div class="flex items-center">
          <input type="checkbox" name="todo" />
          <div class="ml-6">
            <h6
              :class="`text-lg font-bold text-gray-700 ${
                item.done ? 'line-through' : ''
              }`"
            >
              {{ item.name }}
            </h6>
            <p :class="`text-slate-400 ${item.done ? 'line-through' : ''}`">
              {{ item.description }}
            </p>
          </div>
        </div>
        <div class="flex">
          <ph-check
            :size="24"
            class="text-green-700 cursor-pointer mr-7"
            @click="onComplete(item.id)"
          />
          <ph-trash
            :size="24"
            class="text-red-700 cursor-pointer"
            @click="onDelete(item.id)"
          />
        </div>
      </div>
    </div>
    <div class="no-result" v-if="!store.tasks.length && !store.loading">
      <h1 class="text-lg text-gray-600">No tasks found 🤨</h1>
    </div>
    <div class="flex flex-col items-center loading" v-else-if="store.loading">
      <LoadingSpinner />
      <span class="mt-3">Loading...</span>
    </div>
  </div>
</template>
