import axios from "axios"

export default {
    login({ commit }, data) {
        const API_KEY = "AIzaSyCb6GVPAYYYa6zEcynl5SdGTjoxyUUUIho"
        axios( {
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${ API_KEY }`,
            data,
            method: 'POST'
        } )
            .then( (response) => {
                console.log( response )
                const email = response.data.email
                commit( 'SET_USER', email )
            } )
            .catch( (err) => {
                console.log( err )
            } )

    }


}