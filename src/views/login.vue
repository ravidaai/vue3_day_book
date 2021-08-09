<template>
  <div id="app">
    <div class="home mt-5">
      <main class="form-signin">
        <Form @submit="handleLogin" :validation-schema="schema">
          <h4 class="h4 mb-3 text-center fw-normal">Please sign in</h4>
          <div class="form-floating">
            
            <Field
              type="email"
              name="email"
              class="form-control"
              id="floatingEmail"
              placeholder="Email address"
            />
            <label for="floatingEmail">Email address</label>
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-floating">
             
            <Field
              type="password"
              name="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
           <ErrorMessage name="password" class="error-feedback" />
          </div>

          <button
            class="w-100 btn btn-lg btn-primary mt-2 mb-2"
            type="submit"
            :disabled="loading"
          >
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm mr-2"
            ></span>
            <span v-show="!loading">Login</span>
          </button>

          <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>


        </Form>

        <div class="row mt-3">
          <div class="col-md-6 col-12">
            <router-link :to="{name:'Register'}" class="py-3 pr-2"
              >Create Account</router-link
            >
          </div>

          <div class="col-md-6 col-12">
            <router-link :to="{name:'ForgotPassword'}" class="py-3 pr-2"
              >Forgot password?</router-link
            >
          </div>
        </div>

        <p class="mt-5 mb-3 text-center">
          &copy; {{ new Date().getFullYear() }}
        </p>
      </main>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "index",
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push({name:"Dashboard"});
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;      
      this.$store
        .dispatch("auth/login", user)
        .then(
          (data) => {
            this.loading = false;
            this.message=false;
            //console.log(data)
            this.$router.push({name:"Dashboard"});
          },
          (error) => {
            //console.log(error)
            this.loading = false;
            this.message = error.response.data.error.message;

            // this.message =
            // (error.response &&
            //   error.response.data &&
            //   error.response.data.message) ||
            // error.message ||
            // error.toString();
          }
        );



    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
