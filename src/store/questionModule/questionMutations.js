export default {
    NEW_QUES(state, quest) {
        state.questList.push( quest )
    },
    GET_LIST(state, list) {
        state.questList = list
    }
}