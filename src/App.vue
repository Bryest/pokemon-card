<template>
  <h1>Pokemon-Cards</h1>
  <pv-toolbar>
    <template #start>
      <i class="pi pi-bars p-toolbar-separator mr-2" />
      <pv-button label="Add Pokemon" icon="pi pi-plus" class="mr-2" />
    </template>

    <template #end>
      <pv-button icon="pi pi-search" class="mr-2" />
    </template>
  </pv-toolbar>
</template>
<script>
export default {};
</script>
<style>
h1 {
  text-align: center;
}
</style>
