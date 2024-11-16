<script setup lang="ts" generic="TData, TValue">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table';
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  getPaginationRowModel,
} from '@tanstack/vue-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { valueUpdater } from '~/lib/utils';
import { computed, ref, watch } from 'vue';

const props = defineProps<{
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}>();
const emit = defineEmits<{
  (e: 'update:selected', value: {}): void;
}>();

const data = computed(() => props.data);

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});

const table = useVueTable({
  data,
  get columns() {
    return props.columns;
  },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
  state: {
    get sorting() {
      return sorting.value;
    },
    get columnFilters() {
      return columnFilters.value;
    },
    get columnVisibility() {
      return columnVisibility.value;
    },
    get rowSelection() {
      return rowSelection.value;
    },
  },
});

watch(rowSelection, (newValue) => {
  console.log(newValue);
  emit('update:selected', newValue);
});
</script>
<template>
  <header>
    <h1 class="text-2lg text-orange-500 font-bold">DATA TABLE</h1>
    <p>description</p>
  </header>
  <main>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead class="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell class="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell class="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </main>
</template>
