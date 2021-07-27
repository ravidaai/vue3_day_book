<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Two way data binding</h1>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="password"
            />
            <div v-if="passwordError">{{passwordError}}</div>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">select Rolw</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              v-model="role"
            >
              <option value="developer">Web developer</option>
              <option value="designer">web designer</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Skills</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Skill"
              v-model="tempSkill"
              @keyup.ctrl="addSkill"
            />
            <div v-for="skill in skills" :key="skill" class="pill">
              <span @click="deleteSkill(skill)"> {{ skill }}</span>
            </div>
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              required
              v-model="terms"
            />
            <label class="form-check-label" for="exampleCheck1">Terms</label>
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              value="Ravi"
              v-model="names"
            />
            <label class="form-check-label" for="exampleCheck1">Ravi</label>
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              value="Sital"
              v-model="names"
            />
            <label class="form-check-label" for="exampleCheck1">Sital</label>
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              value="Ruchi"
              v-model="names"
            />
            <label class="form-check-label" for="exampleCheck1">Ruchi</label>
          </div>
          <div class="submit">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
        <p>Email: {{ email }}</p>
        <p>Password: {{ password }}</p>
        <p>Role: {{ role }}</p>
        <p>Terms: {{ terms }}</p>
        <p>Names: {{ names }}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "form",
  components: {},
  data() {
    return {
      email: "mario@gmail.com",
      password: "",
      role: "designer",
      terms: false,
      names: [],
      tempSkill: "",
      skills: [],
      passwordError:''
    };
  },
  methods: {
    addSkill(e) {
      console.log(e);
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
          //this.skills.push(this.tempSkill.trim().replace(",", ""))
        }

        this.templSkill = "";
      }
    },
    deleteSkill(skill) {
      console.log('Delete skill');
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    handleSubmit(){
      console.log('Form submitted');
      //validate password
      this.passwordError=this.password.length > 5 ? '':'Password must 5 chars long'
      if(!this.passwordError){
        
      }
    }
  },
};
</script>

<style>
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
</style>