<script setup lang="ts">
import { ref, reactive } from "vue";
import { useTodoStore } from "@/stores/task";
import { PhTrash } from "phosphor-vue";

const todo = reactive({
  title: "",
  description: "",
  completed: false,
});

const isAdding = ref(false);

const todoStore = useTodoStore();

function onToggle() {
  isAdding.value = !isAdding.value;
  reset();
}

function reset() {
  todo.title = "";
  todo.description = "";
  todo.completed = false;
}

function addNewTodo() {
  todoStore.addTask(todo.title, todo.description);
  todo.title = "";
  todo.description = "";
  isAdding.value = false;
}
</script>

<template>
  <div class="flex flex-col max-w-3xl mx-auto">
    <button
      class="self-end max-w-xs px-4 py-2 mb-5 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700"
      @click="onToggle"
      v-if="!isAdding"
    >
      Add
    </button>

    <form
      @submit.prevent="addNewTodo"
      class="relative flex flex-col p-8 pt-12 bg-white rounded-lg shadow-lg mb-9"
      v-if="isAdding"
    >
      <ph-trash
        :size="24"
        class="absolute text-red-700 cursor-pointer right-4 top-3"
        @click="onToggle"
      />
      <input
        placeholder="Name of the task"
        class="p-2 mb-4 border border-gray-200 rounded-lg focus:outline-indigo-700"
        v-model="todo.title"
      />
      <textarea
        placeholder="Description of the task"
        class="p-2 border border-gray-200 rounded-lg focus:outline-indigo-700"
        v-model="todo.description"
      ></textarea>
      <div class="flex items-center justify-end mt-8">
        <button
          type="submit"
          class="self-end max-w-xs px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>
