<script setup>
import AdminSidebar from '@/components/AdminSidebar.vue';
import AdminNavbar from '@/components/AdminNavbar.vue';
import navbarStore from '@/stores/navbar';

const navbar = navbarStore();
</script>
<template>
  <div class="d-flex" id="wrapper" :class="{ toggled: navbar.adminSidebar }">
    <AdminSidebar></AdminSidebar>
    <div id="page-content-wrapper">
      <AdminNavbar></AdminNavbar>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#wrapper {
  overflow-x: hidden;
  background-color: #eee;
}

.toggled {
  margin-left: 0;
}

#page-content-wrapper {
  width: 100%;
//   min-width: 100vw;
}

@media (min-width: 768px) {
  // #page-content-wrapper {
  //   min-width: 0;
  //   width: 100%;
  // }

  // .toggled {
  //   margin-left: -15rem;
  // }
}
</style>
