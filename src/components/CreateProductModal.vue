<script setup>
import productStore from '@/stores/product';
import * as Yup from 'yup';

const product = productStore();

const schema = Yup.object({
  title: Yup.string().required(),
  category: Yup.string().required(),
  unit: Yup.string().required(),
  oringinPrice: Yup.string().required(),
  price: Yup.string().required(),
});

function CloseModal() {
  // product.showModal = true;
}

function AddProduct() {
  product.updateProduct();
}
// onMounted(() => {});
</script>

<template>
  <div
    class="modal fade"
    id="addProductModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="addProductModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="addProductModal">Add Product</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <VeeForm autocomplete="off" :validation-schema="schema">
                  <div class="mb-3">
                    <label for="imageUrl" class="form-label fw-bold">Product image</label>
                    <VeeField
                      id="imageUrl"
                      name="imageUrl"
                      type="text"
                      class="form-control"
                      placeholder="Enter your image url"
                      v-model="product.tempItem.imageUrl"
                    />
                    <img :src="product.tempItem.imageUrl" alt="" class="img-fluid" />
                  </div>
                  <button type="button" class="btn btn-primary">Add Image</button>
                </VeeForm>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <VeeForm autocomplete="off" :validation-schema="schema">
                  <div class="mb-3">
                    <label for="title" class="form-label fw-bold">Title</label>
                    <VeeField
                      id="title"
                      name="title"
                      type="text"
                      class="form-control"
                      placeholder="Enter your title"
                      v-model="product.tempItem.title"
                    />
                  </div>
                  <VeeErrorMessage name="title" class="fw-bold text-danger"></VeeErrorMessage>

                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="category" class="form-label fw-bold">Category</label>
                      <VeeField
                        id="category"
                        name="category"
                        type="text"
                        class="form-control mb-3"
                        placeholder="Enter your category"
                        v-model="product.tempItem.category"
                      />
                      <VeeErrorMessage
                        name="category"
                        class="fw-bold text-danger"
                      ></VeeErrorMessage>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="unit" class="form-label fw-bold">Unit</label>
                      <VeeField
                        id="unit"
                        name="unit"
                        type="text"
                        class="form-control mb-3"
                        placeholder="Enter your unit"
                        v-model="product.tempItem.unit"
                      />
                      <VeeErrorMessage name="unit" class="fw-bold text-danger"></VeeErrorMessage>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="oringinPrice" class="form-label fw-bold">Origin Price</label>
                      <VeeField
                        id="oringinPrice"
                        name="oringinPrice"
                        type="number"
                        min="0"
                        class="form-control mb-3"
                        placeholder="Enter your oringin price"
                        v-model.number="product.tempItem.origin_price"
                      />
                      <VeeErrorMessage
                        name="oringinPrice"
                        class="fw-bold text-danger"
                      ></VeeErrorMessage>
                    </div>

                    <div class="col-md-6 mb-3">
                      <label for="price" class="form-label fw-bold">Price</label>
                      <VeeField
                        id="price"
                        name="price"
                        type="number"
                        min="0"
                        class="form-control mb-3"
                        placeholder="Enter your price"
                        v-model.number="product.tempItem.price"
                      />
                      <VeeErrorMessage name="price" class="fw-bold text-danger"></VeeErrorMessage>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <label for="num" class="form-label fw-bold">Number</label>
                      <VeeField
                        id="num"
                        name="num"
                        type="number"
                        min="0"
                        class="form-control mb-3"
                        placeholder="Enter your number"
                        v-model.number="product.tempItem.num"
                      />
                    </div>
                  </div>

                  <hr />

                  <div class="mb-3">
                    <label for="description" class="form-label fw-bold">Description</label>
                    <textarea
                      id="description"
                      type="text"
                      class="form-control"
                      placeholder="Enter your description"
                      v-model="product.tempItem.description"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="content" class="form-label fw-bold">Content</label>
                    <textarea
                      id="content"
                      type="text"
                      class="form-control"
                      placeholder="Enter your content"
                      v-model="product.tempItem.content"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        id="is_enabled"
                        class="form-check-input"
                        type="checkbox"
                        :true-value="1"
                        :false-value="0"
                        v-model="product.tempItem.is_enabled"
                      />
                      <label class="form-check-label fw-bold" for="is_enabled">Is Enabled</label>
                    </div>
                  </div>
                </VeeForm>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="CloseModal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="AddProduct">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>
