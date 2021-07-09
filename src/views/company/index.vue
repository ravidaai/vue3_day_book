<template>
  <div>
    

    <button class="btn btn-primary">Add Company</button>
    <hr>
    <table class="table table-bordered border-primary">
      <thead>
        <tr>
          <th>#</th>
          <th>Company Name</th>
          <th>Received</th>
          <th>Paid</th>
          <th>Balance</th>
          <th>Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#</td>
          <td><router-link to="/fiscal">Company Name</router-link></td>
          <td>Received</td>
          <td>Paid</td>
          <td>Balance</td>
          <td>Created</td>
          <td>Actions</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="text-center" colspan="7"><span>Footer</span></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>

export default {
  name: "companyIndex"
  
};
</script>

<style lang="scss" scoped>
</style>