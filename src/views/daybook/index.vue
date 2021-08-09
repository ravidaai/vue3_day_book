<template>
  <div>
    <div class="row">
      <div class="col-md-4">
<h3 class="text-left">Manage Day Book</h3>
      </div>
      <div class="col-md-4">
        
      </div>
      <div class="col-md-4">
         
      </div>
    </div>
   

    <!-- Create / Edit-->
    <div class="row">
      <div class="col-md-12">
        <Form @submit="handleSubmit" :validation-schema="schema">
          
          <div>
              <div class="form-floating">
                <!-- Edit: {{editMode? company.data.company_name : 'test'}} -->
                
                <Field
                  type="text"
                  name="invoice_date"
                  class="form-control"
                  id="add_invoice_date"
                  placeholder="Invoice Date"
                />

                <label
                  :for="
                    editMode == true
                      ? 'edit_invoice_date'
                      : 'add_invoice_date'
                  "
                  v-if="!editMode"
                  >Add invoice date</label
                >
                <label
                  :for="
                    editMode == true
                      ? 'edit_invoice_date'
                      : 'add_invoice_date'
                  "
                  v-if="editMode"
                  >Edit invoicenumber </label
                >
                <ErrorMessage name="invoice_date" class="error-feedback" />
              </div>

              <div class="form-floating">
                
                <Field
                  type="text"
                  name="invoice_number"
                  class="form-control"
                  id="add_invoice_number"
                  placeholder="Invoice number"
                />

                <label
                  :for="
                    editMode == true
                      ? 'edit_invoice_number'
                      : 'add_invoice_number'
                  "
                  v-if="!editMode"
                  >Add invoice number</label
                >
                <label
                  :for="
                    editMode == true
                      ? 'edit_invoice_number'
                      : 'add_invoice_number'
                  "
                  v-if="editMode"
                  >Edit invoice number</label
                >
                <ErrorMessage name="invoice_number" class="error-feedback" />
              </div>

              <div class="form-floating">
                
                <Field
                  type="text"
                  name="customer_name"
                  class="form-control"
                  id="add_customer_name"
                  placeholder="Customer name"
                />

                <label
                  :for="
                    editMode == true
                      ? 'edit_customer_name'
                      : 'add_customer_name'
                  "
                  v-if="!editMode"
                  >Add customer name</label
                >
                <label
                  :for="
                    editMode == true
                      ? 'edit_customer_name'
                      : 'add_customer_name'
                  "
                  v-if="editMode"
                  >Edit customer name</label
                >
                <ErrorMessage name="customer_name" class="error-feedback" />
              </div>

              <div class="form-floating">
                
                <Field
                  type="text"
                  name="particular"
                  class="form-control"
                  id="add_particular"
                  placeholder="Particular"
                />

                <label
                  :for="
                    editMode == true
                      ? 'edit_particular'
                      : 'add_particular'
                  "
                  v-if="!editMode"
                  >Add particular</label
                >
                <label
                  :for="
                    editMode == true
                      ? 'edit_particular'
                      : 'add_particular'
                  "
                  v-if="editMode"
                  >Edit particular</label
                >
                <ErrorMessage name="customer_name" class="error-feedback" />
              </div>

              <div class="form-floating">
                
                <Field
                  type="text"
                  name="cash_in"
                  class="form-control"
                  id="cash_in"
                  placeholder="Cash in"
                />

                <label
                  :for="
                    editMode == true
                      ? 'edit_cash_in'
                      : 'add_cash_in'
                  "
                  v-if="!editMode"
                  >Add cash in</label
                >
                <label
                  :for="
                    editMode == true
                      ? 'edit_cash_in'
                      : 'add_cash_in'
                  "
                  v-if="editMode"
                  >Edit cash in</label
                >
                <ErrorMessage name="cash_in" class="error-feedback" />
              </div>

              <div class="form-floating">
                <Field
                  type="text"
                  name="cash_out"
                  class="form-control"
                  id="cash_out"
                  placeholder="Cash out"
                />

                <label
                  :for="
                    editMode == true
                      ? 'edit_cash_out'
                      : 'add_cash_out'
                  "
                  v-if="!editMode"
                  >Add cash out</label>
                <label
                  :for="
                    editMode == true
                      ? 'edit_cash_out'
                      : 'add_cash_out'
                  "
                  v-if="editMode"
                  >Edit cash out</label>
                <ErrorMessage name="cash_out" class="error-feedback" />
              </div>

              <div class="form-group mt-2 mb-2">
                <div
                  v-if="message"
                  class="alert"
                  :class="successful ? 'alert-success' : 'alert-danger'"
                >
                  {{ message }}
                </div>
              </div>

              <button
                  type="submit"
                  class="btn btn-primary"
                  :disabled="loading"
                >
                  <span
                    v-show="loading"
                    class="spinner-border spinner-border-sm mr-2"
                  ></span>
                  <span v-show="!loading" v-if="!editMode">ADD</span>
                  <span v-show="!loading" v-if="editMode">UPDATE</span>
                </button>
            </div>
        </Form>
      </div>
    </div>

    <hr />

    <table class="table table-bordered border-primary">
      <thead>
        <tr>
          <th>#</th>
          <th>Company Name</th>

          <th>Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(company, index) in companies" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ company.company_name }}</td>
          <td>{{ company.created_at }}</td>
          <td>
            <button
              class="btn btn-danger mr-2 ml-2"
              @click="handleDelete(company._id)"
              title="Delete"
            >
              Del
            </button>
&nbsp;
            <button
              class="btn btn-success mr-2 ml-2"
              @click="handleShow(company._id)"
              title="Show"
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
      
    </table>
  </div>
</template>

<script>
/* eslint-disable */

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";


import { mapGetters, mapActions, mapMutations } from "vuex";

/**
 * inject() can only be used inside setup() or functional components
 * import { mapGetters, useStore } from "vuex";
export default defineComponent({
  name: "vuex",
  setup(props, context) {
    const store = useStore();
    //  ok
    console.log('userInfo',store.getters.userInfo);
   
   //how to use the mapGetters

    return {
      store,
    };
  },
});
 */

import { Modal } from "bootstrap";
export default {
  name: "companyIndex",
  components: { Form, Field, ErrorMessage },
  // data: () => ({
  //   modal: null,
  //   modal_new: null,
  // }),
  data() {
    const schema = yup.object().shape({
      company_name: yup.string().required("Company is required!"),
    });

    return {
      modal: null,
      loading: false,
      message: "",
      schema,
      successful: false,
      editMode: false,
    };
  },

  computed: {
    ...mapGetters({
      companies: "company/index",
      company: "company/show",
    }),
  },
  methods: {
    ...mapActions({ companyIndex: "company/index" }),

    handleSubmit(req) {
      this.loading = true;
this.message=""
      //ON EDIT
      if (this.editMode) {
        this.$store
          .dispatch('company/update', { id: this.company.data._id, company: req })
          .then(
            (response) => {
              this.loading = false;
              this.successful = true;
              this.message = response.data.msg;
              
            },
            (error) => {
              this.successful = false;
              this.loading = false;
              this.message = error.response.data.error.message;
            }
          );
      }

//ON ADD
      if (!this.editMode) {
        this.$store.dispatch('company/create', req).then(
          (response) => {
            //console.log(data)
            this.loading = false;
            this.successful = true;
            this.message = response.data.msg;
          },
          (error) => {
            this.successful = false;
            this.loading = false;
            this.message = error.response.data.error.message;
          }
        );
      }
    },

    handleDelete(req) {
      this.$store.dispatch("company/delete", req).then(
        (response) => {
          //console.log(response);
        },
        (error) => {
          console.log("Error: ", error);
        }
      );
    },

    handleShow(req) {
      this.message=""
      this.company_name_model=""
      this.$store.dispatch("company/show", req).then(
        (response) => {
          this.company_name_model = this.company.data.company_name
          this.editMode = true;
          this.modal.show();
        },
        (error) => {
          console.log("Error: ", error);
        }
      );
    },

    addCompany() {
      this.message=""
      this.editMode = false;
      this.modal.show();
      this.company_name_model=""
    },
  },
  mounted() {

    this.companyIndex();
  },
};
</script>

<style lang="scss" scoped>
.text-left{
  text-align: left;
}
</style>