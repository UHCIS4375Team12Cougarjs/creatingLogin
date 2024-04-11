import axios from "axios";
import { defineStore } from "pinia";
// import { verify, sign } from "jsonwebtoken";

export const useUserStore = defineStore('user', {
    state: () => ({
        token: localStorage.getItem('authToken') || null
    }), 
    getters: {
        isAuthenicated: (state) => !!state.token,
    },
    actions: {
        async login(credentials)  {
            try {
                const response = await axios.post('localhost:3123/login', credentials)
                this.token = response.data.token
                localStorage.setItem('authToken', this.token)

                console.log(localStorage.getItem("authToken"))
            } catch(error) {
                console.error('Login error: ', error)
            }
        },
        logout() {
            this.token = null
            localStorage.clear()
        }
    }
})