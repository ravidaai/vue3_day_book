import CompanyService from "../services/comapny.service";

export const company = {
  namespaced: true,
  state() {
    return {
      companies: [],
      dropdown:[],
      company: {},
    };
  },
  actions: {
    dropdown({ commit }) {
      return CompanyService.dropdown().then(
        (response) => {
          commit("dropdown", response);
          return Promise.resolve(response);
        },
        (error) => {
          commit("indexFailure");
          return Promise.reject(error);
        }
      );
    },
    index({ commit }, payload) {
      return new Promise(function(resolve, reject) {
        return CompanyService.index(payload).then(
          (response) => {
            commit("index", response);

            return resolve(response);
          },
          (error) => {
            commit("indexFailure");
            return reject(error);
          }
        );
      });

      // return CompanyService.index().then(
      //   (companies) => {
      //     commit("index", companies);
      //     return Promise.resolve(companies);
      //   },
      //   (error) => {
      //     commit("indexFailure");
      //     return Promise.reject(error);
      //   }
      // );
    },

    create(context, company) {
      return CompanyService.create(company).then(
        (company) => {
          context.commit("create", company);
          context.dispatch("index");
          return Promise.resolve(company);
        },
        (error) => {
          context.commit("createFailure");
          return Promise.reject(error);
        }
      );
    },

    delete(context, company) {
      return CompanyService.delete(company).then(
        (company) => {
          context.dispatch("index");
          return Promise.resolve(company);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },

    show(context, company) {
      return CompanyService.show(company).then(
        (company) => {
          context.commit("show", company);
          return Promise.resolve(company);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },

    update(context, payload) {
      return CompanyService.update(payload).then(
        (res) => {
          context.dispatch("index");
          return Promise.resolve(res);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    index(state, companies) {
        state.companies = companies.data.data;
    },
    dropdown(state, dropdown) {
      state.dropdown = dropdown.data.data;
  },
    indexFailure(state) {
      state.companies = [];
    },

    create(state, company) {
      state.company = company;
    },
    createFailure(state) {
      state.company = {};
    },
    show(state, company) {
      state.company = company;
    },
  },
  getters: {
    dropdown: (state) => {
      return state.dropdown;
    },
    index: (state) => {
      return state.companies;
    },
    create: (state) => {
      return state.company;
    },
    show: (state) => {
      return state.company.data;
    },
  },
};
