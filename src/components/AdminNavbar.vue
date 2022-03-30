<script setup>
import navbarStore from '@/stores/navbar';

const navbar = navbarStore();

function toggleSidebar() {
  navbar.adminSidebar = !navbar.adminSidebar;
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent px-4 py-4">
    <div class="d-flex align-items-center">
      <a href="javascript:void(0)" @click="toggleSidebar">
        <i class="bi bi-text-left fs-4 me-3" id="menu-toggle"></i>
        <span class="d-none">hambuger</span>
      </a>
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle Navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item-dropdown">
          <a
            href="#"
            class="nav-link dropdown-toggle fw-bold"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-person me-2"></i>Fred
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#">Profile</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
#menu-toggle {
  cursor: pointer;
  color: #009d63;
}
</style>
