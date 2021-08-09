<template>
  <div class="CreateAccount mt-5">
    <main class="form-signin">
      <Form @submit="handleRegister" :validation-schema="schema">
        <h4 class="h4 mb-3 text-center fw-normal">Please create account</h4>
        <div class="form-floating">
          <Field
            name="name"
            type="text"
            class="form-control"
            id="floatingInputName"
            placeholder="Full Name"
          />
          <label for="floatingInputName">Full Name</label>
          <ErrorMessage name="name" class="error-feedback" />
        </div>

        <div class="form-floating">
          <Field
            name="email"
            type="email"
            class="form-control"
            id="floatingInputEmail"
            placeholder="name@example.com"
          />
          <label for="floatingInputEmail">Email</label>
          <ErrorMessage name="email" class="error-feedback" />
        </div>

        <div class="form-floating">
          <Field
            name="password"
            type="password"
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
          <span v-show="!loading">Register</span>
        </button>

        <div class="form-group">
          <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>



         
        </div>
      </Form>

      <div class="row mt-3">
        <div class="col-md-6 col-12">
          <router-link to="/" class="py-3 pr-2">Sign</router-link>
        </div>

        <div class="col-md-6 col-12">
          <router-link to="/forgot_password" class="py-3 pr-2"
            >Forgot password?</router-link
          >
        </div>
      </div>

      <p class="mt-5 mb-3 text-center">&copy; {{ new Date().getFullYear() }}</p>
    </main>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "CreateAccount",
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
      name: yup.string().required("Name is required!"),
      email: yup.string().required("Email is required!").email("Email is invalid!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push({name:"Company"});
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.msg;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          //console.log(error)
          this.successful = false;
          this.loading = false;
          this.message = error.response.data.error.message;
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
