import InvoiceService from "../services/daybook.service";

export const daybook = {
  namespaced: true,
  state() {
    return {
      invoices: [],
      invoice: {},
    };
  },
  actions: {
    index({ commit }) {
      return new Promise(function(resolve, reject) {
        return InvoiceService.index().then(
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

    create(context, invoice) {
      return InvoiceService.create(invoice).then(
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

    delete(context, invoice) {
      return InvoiceService.delete(invoice).then(
        (response) => {
          context.dispatch("index");
          return Promise.resolve(response);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },

    show(context, invoice) {
      return InvoiceService.show(invoice).then(
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
      return InvoiceService.update(payload).then(
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
    index(state, invoices) {
      state.invoices = invoices.data.data;
    },
    indexFailure(state) {
      state.invoices = [];
    },

    create(state, invoice) {
      state.invoice = invoice;
    },
    createFailure(state) {
      state.invoice = {};
    },
    show(state, invoice) {
      state.invoice = invoice;
    },
  },
  getters: {
    index: (state) => {
      return state.invoices;
    },
    create: (state) => {
      return state.invoice;
    },
    show: (state) => {
      return state.invoice.data;
    },
  },
};
