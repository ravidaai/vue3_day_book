<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Pettry Cash Book</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link active">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'Company'}" class="nav-link active"> Company</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{name: 'Category'}" class="nav-link active"> Category</router-link>
            </li>

              <li class="nav-item">
              <router-link :to="{name: 'Daybook'}" class="nav-link active"> Daybook</router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link active" href="#">Change Password</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="logOut">Logout</a>
             
            </li>

            <li class="nav-item">
              <!-- <a class="nav-link" href="#">{{currentUser.data.user_name}}</a> -->
              <a class="nav-link" href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container mt-5">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: "UserLayout",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push({name:"Login"});
    }
  }
};
</script>

<style >
body {
  min-height: 75rem !important;
  padding-top: 4.5rem !important;
}
</style>

