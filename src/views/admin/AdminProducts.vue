<script setup>
import {
  ref, watch, computed, onMounted,
} from 'vue';
import { Modal } from 'bootstrap';
import productStore from '@/stores/product';
import createModal from '@/components/CreateProductModal.vue';

const product = productStore();
const modalObj = ref();
const isShowModal = computed(() => product.showModal);
const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`;

function shoModal() {
  product.tempItem = {};
  modalObj.value.show();
  product.showModal = true;
}

watch(isShowModal, (val) => {
  if (!val) {
    modalObj.value.hide();
  }
});

onMounted(() => {
  product.getAllProducts(url);
  const element = document.getElementById('addProductModal');
  modalObj.value = new Modal(element);
});
</script>

<template>
  <div class="container-fluid px-4">
    <a href="javascript:void(0)" class="add-product" @click="shoModal">
      <i class="bi bi-archive"></i>
      <span>Add Product</span>
    </a>
    <div class="row my-5">
      <div class="col">
        <div class="board">
          <table width="100%">
            <thead>
              <tr>
                <th scope="col">Product Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Number</th>
                <th scope="col">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in product.list" :key="item.id">
                <td>
                  <div
                    :style="{ backgroundImage: `url(${item.imageUrl}` }"
                    style="height: 150px; background-size: cover; background-position: center"
                  ></div>
                </td>
                <td>{{ item.title }}</td>
                <td>${{ item.origin_price }}</td>
                <td>{{ item.num }}</td>
                <td class="status">
                  <div v-if="item.is_enabled">
                    <p :class="[item.is_enabled ? 'bg-enabled' : 'bg-disabled']">Eabled</p>
                  </div>
                  <div v-else>
                    <p :class="[item.is_enabled ? 'bg-enabled' : 'bg-disabled']">Disabled</p>
                  </div>
                </td>
                <td>
                  <div class="btn-group btn-group-sm">
                    <button class="btn btn-outline-secondary" type="button">More</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <createModal></createModal>
</template>

<style lang="scss">
.add-product {
  width: 170px;
  height: 36px;
  padding: 0 16px;
  border-radius: 36px;
  background: #3c91e6;
  color: #f9f9f9;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}

.board {
  width: 100%;
  overflow: auto;
  background: #fff;
  border-radius: 8px;
}

tr {
  border-bottom: 1px solid #eef0f3;
}

thead {
  background: #f9fafb;
}

th,
td {
  padding: 10px 15px;
  text-align: center;
}

.bg-enabled {
  background: #bcecc0;
}

.bg-disabled {
  background: #ffb05c;
}

.status p {
  font-size: 10px;
  padding: 3px 10px;
  display: inline-block;
  border-radius: 40px;
  margin-top: 1rem;
}
</style>
