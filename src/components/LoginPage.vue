<template>
    <div class="loginDiv">
        <form>
            <div class="usernameDiv">
                <label for="usernamebox">Username:</label><br>
                <input type="text" id="usernamebox" name="usernamebox" placeholder="Username"><br>
            </div>
            <div class="passwordDiv">
                <label for="passwordbox">Password:</label><br>
                <input type="text" id="passwordbox" name="passwordbox" placeholder="Password"><br>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        redirectToPage() {
            this.$router.push()
        }
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