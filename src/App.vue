<template>
  <nav>
    <img
      id="logo-img"
      src="https://images.unsplash.com/photo-1643725173053-ed68676f1878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt=""
    />
    <h1 class="align-text">Pokemon Cards</h1>
    <i class="pi pi-bars p-toolbar-separator mr-2" />
  </nav>
  <pv-toolbar>
    <template #start>
      <pv-button label="Add Pokemon" icon="pi pi-plus" class="mr-2" />
    </template>
    <template #end>
      <pv-button icon="pi pi-search" class="mr-2" />
    </template>
  </pv-toolbar>
  <router-view></router-view>
</template>

<script>
export default {};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 20px;
}
h1 {
  text-align: center;
  font-size: 50px;
}
img#logo-img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
}
</style>
