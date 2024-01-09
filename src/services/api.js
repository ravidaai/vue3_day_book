const API = {
  baseUrl: "http://localhost:3000",
};

const authApi = {
  login: "auth/login",
  register: "auth",
  change_apssword: "auth/change_password",
  logout: "auth/logout",
  refreshToken:"auth/refresh_token"
};

const companyApi = {
  index: "company",
  create: "company",
  show: "company",
  delete: "company",
  update: "company",
  dropdown: "company/dropdown",
};

const categoryApi = {
  index: "category",
  create: "category",
  show: "category",
  delete: "category",
  update: "category",
  
};

const daybookApi = {
  index: "invoice",
  create: "invoice",
  show: "invoice",
  delete: "invoice",
  update: "invoice",
};

export { authApi, companyApi, categoryApi, daybookApi, API };
