<script setup lang="ts">
import { storeToRefs } from '#build/imports';
import type { IJsonTodo } from '~/types/json';
const jsonTodosStore = useJsonTodosStore();
// const jsonTodos : IJsonTodo[] = jsonTodosStore.jsonTodos
const { jsonTodos } = storeToRefs(jsonTodosStore);
const { editJsonTodos } = jsonTodosStore;

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// const cData = ref<any>([]);
// const cData = computed( () => data.value.pageable );
const getData = async () => {
  const {
    data: response,
    pending,
    error,
  } = await useFetch('/api/json', {
    transform(response) {
      const keysLength = Object.keys(response.data).length;
      console.log('keysLength :', keysLength);
      if (keysLength === 0) {
        console.log('getData ELSE : pas de response.');
      } else {
        // cData.value = response.data;
        editJsonTodos(response.data);

        return response.data;
      }
    },
  });
  console.log('getData :', response);
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div>
    <h1>cDATA jsonplaceholder</h1>
    <Button @click="getData" class="bg-red-500">getData</Button>

    <Popover>
      <PopoverTrigger class="bg-red-500 ml-10 rounded-md p-2 text-white text-xs">
        get Data result
      </PopoverTrigger>
      <PopoverContent class="w-[600px] text-xs bg-slate-400">
        jsonTodos
        <br />
        {{ jsonTodos }}
        <!-- {{ cData }} -->
      </PopoverContent>
    </Popover>
  </div>
  <div>
    <TablesTbsimple datatype="jsonTodosType" />
  </div>
</template>
