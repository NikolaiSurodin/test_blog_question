<template>
  <div class="wrap">
    <div class="container-form">
      <p>Login</p>
      <header class="from">
        <b-input placeholder='Email' v-model="user.email"></b-input>
      </header>
      <section class="area-question">
        <div>
          <b-input placeholder='Password' v-model="user.password"></b-input>
        </div>
      </section>
      <footer class="footer">
        <b-button variant="link">Register</b-button>
        <b-button variant="success" @click="sendUser">Login</b-button>
        <b-button variant="danger" @click="cancel">Cancel</b-button>

      </footer>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions( [ 'login' ] ),
    sendUser() {
      this.login( this.user )
    },
    cancel() {
      this.$emit( 'cancel' )
    }
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

.container-form {
  border: 1px solid;
  padding: 45px 47px;
  margin: 16px;
  border-radius: 10px;
  width: 40rem;
  position: center;
  top: 500px;
  background: linear-gradient(#e6e6e6, #c7c7c7);
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 9999;
}

.footer {
  display: flex;
  justify-content: space-around;
}
</style>