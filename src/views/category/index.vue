<template>
  <div>
    <div class="row">
      <div class="col-md-4">
<h3 class="text-left">Invoice Category</h3>
      </div>
      <div class="col-md-4">
        
      </div>
      <div class="col-md-4">
         <button type="button" class="btn btn-primary" @click="addCategory">
      Add Category
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
                  name="category"
                  class="form-control"
                  id="floatingAddCategory"
                  placeholder="Add category"
                  v-model="category_model"
                />

                <label
                  :for="
                    editMode == true
                      ? 'floatingEditCategory'
                      : 'floatingAddCategory'
                  "
                  v-if="!editMode"
                  >Add category</label
                >
                <label
                  :for="
                    editMode == true
                      ? 'floatingEditCategory'
                      : 'floatingAddCategory'
                  "
                  v-if="editMode"
                  >Edit category</label
                >
                <ErrorMessage name="category" class="error-feedback" />
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
          <th>Category</th>

          <th>Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in categories" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            {{ data.category }}
            
            </td>
          <td>{{ data.created_at }}</td>
          <td>
            <button
              class="btn btn-danger mr-2 ml-2"
              @click="handleDelete(data._id)"
              title="Delete"
            >
              Del
            </button>
&nbsp;
            <button
              class="btn btn-success mr-2 ml-2"
              @click="handleShow(data._id)"
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
import axios from 'axios';
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
  name: "categoryIndex",
  components: { Form, Field, ErrorMessage },
  // data: () => ({
  //   modal: null,
  //   modal_new: null,
  // }),
  data() {
    const schema = yup.object().shape({
      category: yup.string().required("Category is required!"),
    });

    return {
      modal: null,
      loading: false,
      message: "",
      schema,
      successful: false,
      editMode: false,
      category_model:''
    };
  },

  computed: {
    ...mapGetters({
      categories: "category/index",
      category: "category/show",
    }),
  },
  methods: {
    ...mapActions({ categoryIndex: "category/index" }),

    handleSubmit(req) {
      this.loading = true;
this.message=""
      //ON EDIT
      if (this.editMode) {
        this.$store
          .dispatch('category/update', { id: this.category.data._id, category: req })
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
        this.$store.dispatch('category/create', req).then(
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
      this.$store.dispatch("category/delete", req).then(
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
      this.category_model=""
      this.$store.dispatch("category/show", req).then(
        (response) => {
          this.category_model = this.category.data.category
          this.editMode = true;
          this.modal.show();
        },
        (error) => {
          console.log("Error: ", error);
        }
      );
    },

    addCategory() {
      this.message=""
      this.editMode = false;
      this.modal.show();
      this.category_model=""
    },
  },
  mounted() {
    
    this.modal = new Modal(this.$refs.exampleModal);
    this.categoryIndex()

  },

};
</script>

<style lang="scss" scoped>
</style>