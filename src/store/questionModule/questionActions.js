import {Question} from "@/classes/Question";
import axios from "axios";

export default {

    createQuestion({ commit }, data) {
        let quest = new Question( data )
        const id_prod = 'question-9e013'
        axios( {
            url: `https://${ id_prod }-default-rtdb.firebaseio.com/list/data.json`,
            data: quest,
            method: 'POST'
        } )
            .then( commit( 'NEW_QUES', quest ) )
    },
    fetchQuestList({ commit }) {
        return new Promise( resolve => {
            const id_prod = 'question-9e013'
            axios
                .get( `https://${ id_prod }-default-rtdb.firebaseio.com/list/data.json` )
                .then( res => {
                    let questionList = Object.values( res.data )
                    commit( 'GET_LIST', questionList )
                    resolve( questionList )
                } )

        } )


    }
}