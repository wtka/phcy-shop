import { defineStore } from 'pinia';
import axios from 'axios';

const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}`;

export default defineStore('Product', {
  state: () => ({
    list: [],
    linenList: [],
    cottonLinenList: [],
    item: [],
    tempItem: {},
    showModal: false,
  }),
  getters: {},
  actions: {
    // 取得產品列表
    async getAllProducts(path) {
      await axios
        .get(path)
        .then((res) => {
          this.list = res.data.products;
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    // 取得指定分類產品
    async getProducts(path, category) {
      await axios
        .get(`${path}?category=${category}`)
        .then((res) => {
          if (category === 'LINEN') {
            this.linenList = res.data.products;
          } else if (category === 'COTTON-LINEN') {
            this.cottonLinenList = res.data.products;
          }
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    // 更新產品
    async updateProduct() {
      await axios
        .post(`${url}/admin/product`, { data: this.tempItem })
        .then((res) => {
          console.log(res);
          this.getAllProducts();
          this.showModal = false;
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
});
