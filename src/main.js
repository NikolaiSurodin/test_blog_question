import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router"
import {store} from "@/store"

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'firebase/auth'
import 'firebase/database'
import firebase from "firebase/compat";

Vue.config.productionTip = false


Vue.use( BootstrapVue )
Vue.use( IconsPlugin )

const firebaseConfig = {
    apiKey: "AIzaSyCb6GVPAYYYa6zEcynl5SdGTjoxyUUUIho",
    authDomain: "question-9e013.firebaseapp.com",
    databaseURL: "https://question-9e013-default-rtdb.firebaseio.com",
    projectId: "question-9e013",
    storageBucket: "question-9e013.appspot.com",
    messagingSenderId: "508758367693",
    appId: "1:508758367693:web:59f478f6e5d6b15904b884"
}
firebase.initializeApp( firebaseConfig )

firebase.auth().onAuthStateChanged( () => {
    new Vue( {
        render: h => h( App ),
        router,
        store
    } ).$mount( '#app' )
} )

