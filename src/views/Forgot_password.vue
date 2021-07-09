<template>
  <div class="home mt-5">
    <main class="form-signin">
      <form>
        <h4 class="h4 mb-3 text-center fw-normal">Forgot password?</h4>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        

        <button class="w-100 btn btn-lg btn-primary mt-2" type="submit">
          Reset Password
        </button>
      </form>

      <div class="row mt-3">
        <div class="col-md-6 col-12">
          <router-link to="/create_account" class="py-3 pr-2">Create Account</router-link>
          
        </div>

        <div class="col-md-6 col-12">
          <router-link to="/" class="py-3 pr-2">Sign in</router-link>
        </div>
      </div>

      <p class="mt-5 mb-3 text-center">&copy; {{new Date().getFullYear()}}</p>
    </main>
  </div>
</template>

<script>
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
