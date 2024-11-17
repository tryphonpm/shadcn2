<template>
  <div>
    <h1>Table Simple</h1>
    <h2>DATA</h2>
    <div>{{ data }}</div>
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

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { data } = props;
</script>

<style scoped></style>
