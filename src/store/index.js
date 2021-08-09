import { createStore } from 'vuex'
import {auth} from './auth.module'
import {company} from './company.module'
import {category} from './category.module'
import {daybook} from './daybook.module'

export default createStore({
  modules:{
    auth,
    company,
    category,
    daybook
  }
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
