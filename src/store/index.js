import Vue from "vue"
import Vuex from "vuex"
import questionModule from "@/store/questionModule/questionModule"
import authModule from "@/store/authModule/authModule"
Vue.use( Vuex )

export const store = new Vuex.Store( {
    modules: {
        questionModule,
        authModule
    }
} )