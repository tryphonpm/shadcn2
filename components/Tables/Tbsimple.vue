<template>
  <div>
    <h1>Table Simple</h1>
    <h2>DATA</h2>
    <!-- <div>{{ data }}</div> -->
    <div>
      <Table>
        <TableCaption>Données JSON PLACEHOLDER TODOS.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px]">id</TableHead>
            <TableHead>userId</TableHead>
            <TableHead>title</TableHead>
            <TableHead class="text-right">Completed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="(item, index) in jsonTodosStore.getJsonTodos()"
            :key="index"
            class="text-[10px]"
          >
            <!-- <TableCell class="font-medium">{{ item }}</TableCell> -->
            <TableCell class="font-medium">{{ item.id }}</TableCell>
            <TableCell>{{ item.userId }}</TableCell>
            <TableCell>{{ item.title }}</TableCell>
            <TableCell class="text-right">
              {{ item.completed }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { storeToRefs } from '#build/imports';
import type { IJsonTodo } from '~/types/json';
const jsonTodosStore = useJsonTodosStore();

// const jsonTodos : IJsonTodo[] = jsonTodosStore.jsonTodos

const props = defineProps({
  datatype: {
    type: String,
    required: true,
  },
});
const { datatype } = props;
// console.log('datatype :', datatype);
const data = ref<any[]>([]);
if (datatype == 'jsonTodosType') {
  const { jsonTodos } = storeToRefs(jsonTodosStore);
  const { getJsonTodos } = jsonTodosStore;
  // console.log('getJsonTodos : ', getJsonTodos());
  data.value = getJsonTodos();
} else {
  data.value = [
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
  ];
}
</script>
