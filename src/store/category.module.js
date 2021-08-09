import CategoryService from "../services/category.service";

export const category = {
  namespaced: true,
  state() {
    return {
      categories: [],
      category: {},
    };
  },
  actions: {
    index({ commit }) {
      return new Promise(function(resolve, reject) {
        return CategoryService.index().then(
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

    create(context, category) {
      return CategoryService.create(category).then(
        (response) => {
          context.commit("create", response);
          context.dispatch("index");
          return Promise.resolve(response);
        },
        (error) => {
          context.commit("createFailure");
          return Promise.reject(error);
        }
      );
    },

    delete(context, category) {
      return CategoryService.delete(category).then(
        (response) => {
          context.dispatch("index");
          return Promise.resolve(response);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },

    show(context, category) {
      return CategoryService.show(category).then(
        (response) => {
          context.commit("show", response);
          return Promise.resolve(response);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },

    update(context, payload) {
      return CategoryService.update(payload).then(
        (response) => {
          context.dispatch("index");
          return Promise.resolve(response);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    index(state, categories) {
      state.categories = categories.data.data;
    },
    indexFailure(state) {
      state.categories = [];
    },

    create(state, category) {
      state.category = category;
    },
    createFailure(state) {
      state.category = {};
    },
    show(state, category) {
      state.category = category;
    },
  },
  getters: {
    index: (state) => {
      return state.categories;
    },
    create: (state) => {
      return state.category;
    },
    show: (state) => {
      return state.category.data;
    },
  },
};
