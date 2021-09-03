<template>
  <div class="wrap">
    <div class="container-form">
      <header class="from">
        <b-input :placeholder="'from' + ' ' +  email" :disabled="true">dga</b-input>
      </header>
      <section class="area-question">
        <div>
          <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Ask something..."
              rows="3"
              max-rows="6"
          ></b-form-textarea>
        </div>
      </section>
      <footer class="footer">
        <b-button variant="success" @click="sendMessage">Send</b-button>
        <b-button variant="danger" @click="cancel">Cancel</b-button>
      </footer>
    </div>
  </div>

</template>

<script>
export default {
  name: "QuestionForm",
  data() {
    return {
      text: ''
    }
  },
  props: {
    email: String
  },
  methods: {
    sendMessage() {
      this.$emit( 'sendMessage', this.text )
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
  padding: 32px 47px;
  margin: 16px;
  border-radius: 10px;
  width: 40rem;
  position: center;
  top: 500px;
  background: linear-gradient(#e6e6e6, #c7c7c7);
  box-shadow: 0 0 17px 0#8e8b8b;
  z-index: 9999;
}

.footer {
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
}

</style>