import { defineStore } from '#imports';
import type { IJsonTodo } from '~/types/json';
export const useJsonTodosStore = defineStore({
  id: 'json-store',
  state: () => {
    return {
      jsonTodos: <IJsonTodo[]>[
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
      ],
    };
  },
  actions: {
    editJsonTodos(values: IJsonTodo[]) {
      this.jsonTodos = values;
    },
  },
  getters: {
    getJsonTodos: (state) => {
      return () => state.jsonTodos;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useJsonTodosStore, import.meta.hot));
}
