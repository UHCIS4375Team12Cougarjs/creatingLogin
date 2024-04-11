<template>
    <div class="loginDiv">
        <form @submit.prevent="login">
            <div class="usernameDiv">
                <label for="usernamebox">Username:</label><br>
                <input 
                type="text" 
                id="usernamebox" 
                name="usernamebox" 
                placeholder="Username"
                v-model="credentials.username"
                ><br>
            </div>
            <div class="passwordDiv">
                <label for="passwordbox">Password:</label><br>
                <input type="password" 
                id="passwordbox" 
                name="passwordbox" 
                placeholder="Password"
                v-model="credentials.password"
                ><br>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            credentials: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
    async login() {
      try {
        const response = await this.$http.post('/api/auth/login', this.credentials);
        // Store the token in local storage or vuex store
        localStorage.setItem('authToken', response.data.token);
        this.$router.push({ name: 'dashboard' });
      } catch (error) {
        console.error("Authentication failed:", error);
        // Handle errors (e.g., show error message)
      }
    },
  },
    setup() {
        const router = useRouter()
        const login = function() {
            router.push({ name: 'dashboard'})
        }

        return {login}
    }
}
</script>

<style>
.loginDiv {
    text-align: center;
}

.usernameDiv {
    padding: 5px;
    border-radius: px;
}
#usernamebox {
    padding: 7px;
}

.passwordDiv {
    padding: 5px;
    padding-bottom: 15px;
}
#passwordbox {
    padding: 7px;
}
</style>