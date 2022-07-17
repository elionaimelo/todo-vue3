import { defineStore } from "pinia";
import type { Task } from "@/models/task.models";

interface TodoState {
  tasks: Task[];
  loading: boolean;
}

export const useTodoStore = defineStore({
  id: "todo",
  state: (): TodoState => ({
    tasks: [],
    loading: false,
  }),
  actions: {
    async addTask(name: string, description: string): Promise<void> {
      this.loading = true;
      this.tasks.push({
        name,
        description,
        done: false,
        id: this.tasks.length + 1,
      });
      setTimeout(() => {
        this.loading = false;
      }, 600);
    },
    async deleteTask(id: number): Promise<void> {
      this.loading = true;
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
      setTimeout(() => {
        this.loading = false;
      }, 600);
    },
    async completeTask(id: number): Promise<void> {
      this.loading = true;
      this.tasks = this.tasks.map((t) => {
        if (t.id === id) {
          t.done = !t.done;
        }
        return t;
      });
      setTimeout(() => {
        this.loading = false;
      }, 600);
    },
  },
});
