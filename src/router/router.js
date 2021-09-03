import Vue from "vue"
import VueRouter from "vue-router"
import MainPage from "@/view/MainPage"
import QuestionForm from "@/components/QuestionForm"

Vue.use( VueRouter )

const router = new VueRouter( {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/new_ques',
            component: QuestionForm
        }
    ]
} )
export default router