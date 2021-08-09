<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <h3 class="text-left">My Company lists</h3>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <button type="button" class="btn btn-primary" @click="addCompany">
          Add Company
        </button>
      </div>
    </div>

    <!-- Create / Edit-->
    <div class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <Form @submit="handleSubmit" :validation-schema="schema">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                @click="modal.hide()"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="form-floating">
                <!-- Edit: {{editMode? company.data.company_name : 'test'}} -->

                <Field
                  type="text"
                  name="company_name"
                  class="form-control"
                  id="floatingAddCompany"
                  placeholder="Add your company"
                  v-model="company_name_model"
                />

                <label
                  :for="
                    editMode == true
                      ? 'floatingEditCompany'
                      : 'floatingAddCompany'
                  "
                  v-if="!editMode"
                  >Add your company</label
                >
                <label
                  :for="
                    editMode == true
                      ? 'floatingEditCompany'
                      : 'floatingAddCompany'
                  "
                  v-if="editMode"
                  >Edit your company</label
                >
                <ErrorMessage name="company" class="error-feedback" />
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

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="modal.hide()"
                >
                  Close
                </button>
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
            </div>
          </div>
        </Form>
      </div>
    </div>

    <hr />

    <table class="table table-bordered" id="companyTable">
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
          <td>
            {{ company.company_name }}
            <!-- <router-link :to="{name:'InvoiceList', params: { company_id: company._id }}">
              
            </router-link> -->
          </td>
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

    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" @click="previousPage">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" @click="nextPage">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

//Pagination: https://softwareontheroad.com/pagination-in-nodejs-mongo/
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
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import swal from "sweetalert";
import axios from "axios";
// import $ from 'jquery';
// import  'datatables.net-dt'

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
      company_name_model: "",
      limit: 10,
      skip: 0,
    };
  },

  computed: {
    ...mapGetters({
      companies: "company/index",
      company: "company/show",
    }),
  },
  methods: {
    ...mapActions({
      companyIndex: "company/index",
    }),

    async nextPage() {
      if ((await this.companies.length) > 0) {
        this.skip += this.limit; // For the next page you just increment 'skip' for the page size 'limit'
        await this.companyIndex({
          limit: this.limit,
          skip: this.skip,
        });
      }

      if ((await this.companies.length) == 0) {
        await this.companyIndex({
          limit: this.limit,
          skip: (this.skip -= this.limit),
        });
      }

    },
    async previousPage() {
      if (this.skip > 0) {
        this.skip -= this.limit; // For the previous page, you just increment 'skip' for the page size 'limit'
        await this.companyIndex({ limit: this.limit, skip: this.skip });
      }
    },

    handleSubmit(req) {
      this.loading = true;
      this.message = "";
      //ON EDIT
      if (this.editMode) {
        this.$store
          .dispatch("company/update", {
            id: this.company.data._id,
            company: req,
          })
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
        this.$store.dispatch("company/create", req).then(
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
      this.message = "";
      this.company_name_model = "";
      this.$store.dispatch("company/show", req).then(
        (response) => {
          this.company_name_model = this.company.data.company_name;
          this.editMode = true;
          this.modal.show();
        },
        (error) => {
          console.log("Error: ", error);
        }
      );
    },

    addCompany() {
      this.message = "";
      this.editMode = false;
      this.modal.show();
      this.company_name_model = "";
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.exampleModal);
    this.companyIndex({ limit: this.limit, skip: this.skip });
    // axios.get('http://localhost/Connitylimited/genesis-wordpress/wp-json/api/v1/classroom/chapter_details/introduction-to-bitcoin').then((response)=>{
    //   console.log(response);
    // })
  },
  //   created: function () {
  //   axios.interceptors.response.use(undefined, function (err) {
  //     return new Promise(function (resolve, reject) {
  //       if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
  //       // if you ever get an unauthorized, logout the user
  //         //this.$store.dispatch(AUTH_LOGOUT)
  //       // you can also redirect to /login if needed !
  //       console.log(err.status)
  //       }
  //       throw err;
  //     });
  //   });
  // }
};
</script>

<style lang="scss" scoped>
</style>