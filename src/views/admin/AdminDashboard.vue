<template>
  <div class="container-fluid px-4">
    <div class="row g-3 my-2">
      <div class="col-md-4">
        <div class="box-info p-3 shadow-sm">
          <i class="bi bi-clipboard-check fs-1 border bg-analysis-blue"></i>
          <span>
            <h3 class="fs-2 fw-bold">1020</h3>
            <p class="fs-5">New Order</p>
          </span>
        </div>
      </div>

      <div class="col-md-4">
        <div class="box-info p-3 shadow-sm">
          <i class="bi bi-person fs-1 border bg-analysis-orange"></i>
          <span>
            <h3 class="fs-2 fw-bold">2834</h3>
            <p class="fs-5">Visitors</p>
          </span>
        </div>
      </div>

      <div class="col-md-4">
        <div class="box-info p-3 shadow-sm">
          <i class="bi bi-coin fs-1 border bg-analysis-yellow"></i>
          <span>
            <h3 class="fs-2 fw-bold">$2543</h3>
            <p class="fs-5">Total Sells</p>
          </span>
        </div>
      </div>
    </div>

    <div class="row my-5">
      <h3 class="fs-4 mb-3">Recent Orders</h3>
      <div class="col">
        <table class="table bg-white rounded shadow-sm table-hover">
          <thead>
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Television</td>
              <td>Jonny</td>
              <td>$1200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
i {
  color: #009d63;
  background-color: #c1efde;
  border-radius: 100%;
}

.bg-analysis-blue {
  background: #cfe8ff;
  color: #3c91e6;
}

.bg-analysis-yellow {
  background: #fff2c6;
  color: #ffce26;
}

.bg-analysis-orange {
  background: #ffe0d3;
  color: #fd7238;
}

.box-info {
  padding: 24px;
  background: #f9f9f9;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 24px;

  i {
    width: 80px;
    height: 80px;
    // border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
