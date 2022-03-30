<template>
  <!-- Sidebar Start -->
  <div class="bg-white" id="sidebar-wrapper">
    <div class="sidebar-heading py-4 fs-4 text-uppercase border-bottom">
      <i class="bi bi-incognito me-2"></i>PHCY
    </div>

    <div class="list-group list-group-flush my-3">
      <router-link class="list-group-item list-group-item-action active" to="/admin">
        <i class="bi bi-speedometer2 me-2"></i>Dashboard
      </router-link>
      <router-link class="list-group-item list-group-item-action" to="/admin">
        <i class="bi bi-file-earmark-text me-2"></i>Orders
      </router-link>
      <router-link class="list-group-item list-group-item-action" to="/admin/products">
        <i class="bi bi-archive me-2"></i>Products
      </router-link>
      <router-link class="list-group-item list-group-item-action" to="/admin/test">
        <i class="bi bi-ticket-perforated me-2"></i>Coupon
      </router-link>
      <router-link class="list-group-item list-group-item-action" to="/admin">
        <i class="bi bi-gear me-2"></i>Settings
      </router-link>
      <router-link class="list-group-item list-group-item-action text-danger" to="/login">
        <i class="bi bi-door-closed me-2"></i>Logout
      </router-link>
    </div>
  </div>
  <!-- Sidebar End -->
</template>

<style lang="scss" scoped>
#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;

  .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
    text-align: center;
    color: #009d63;
    font-weight: 700;
  }

  .list-group {
    width: 15rem;
  }
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

.list-group-item {
  border: none;
  padding: 20px 30px;
  font-weight: 700;
}

.list-group-item.active {
  background-color: transparent;
  color: #009d63;
  font-weight: bold;
  border: none;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>
