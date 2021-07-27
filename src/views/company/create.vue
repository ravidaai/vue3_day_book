<template>
  <div>
    <button type="button" class="btn btn-primary" @click="modal.show()">
      Add Company
    </button>

    <div class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              @click="modal.hide()"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="formGroupExampleInput"
                  >Company Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Example input"
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2">Fiscal Year</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Another input"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="modal.hide()"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <hr />
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
          <td>
            <router-link :to="{ name: 'Fiscal', params: { company_id: 2 } }"
              >Company Name</router-link
            >
          </td>
          <td>Received</td>
          <td>Paid</td>
          <td>Balance</td>
          <td>Created</td>
          <td>
            <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
          </td>
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
/**
 * 
 * Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
 */
import { Modal } from "bootstrap";
export default {
  name: "companyIndex",
  components: {},
  data: () => ({
    modal: null,
    modal_new: null,
  }),
  mounted() {
    this.modal = new Modal(this.$refs.exampleModal);
  },
 
};
</script>

<style lang="scss" scoped>
</style>