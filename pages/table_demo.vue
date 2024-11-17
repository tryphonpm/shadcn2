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

const cData = ref<any>([]);
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
        cData.value = response.data;
        return response.data;
      }
    },
  });
  console.log('getData :', response);
};
</script>

<template>
  <div>
    <h1>cDATA jsonplaceholder</h1>
    <Button @click="getData" class="bg-red-500">getData</Button>
    <!-- <div>{{ cData }}</div> -->
  </div>
  <div>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[100px]">id</TableHead>
          <TableHead>userId</TableHead>
          <TableHead>title</TableHead>
          <TableHead class="text-right">Completed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="data in cData" :key="data.id">
          <TableCell class="font-medium">
            {{ data.id }}
          </TableCell>
          <TableCell>{{ data.userId }}</TableCell>
          <TableCell>{{ data.title }}</TableCell>
          <TableCell class="text-right">
            {{ data.completed }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
