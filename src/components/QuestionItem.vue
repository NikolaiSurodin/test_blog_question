<template>
  <div class="wrapper">
    <div class="time">
      <p>{{ quest.date }}</p>
    </div>
    <div class="content">
      <p>{{ quest.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionItem",
  data() {
    return {}
  },
  props: {
    quest: Object
  }
}
</script>

<style scoped>
p {
  text-overflow: ellipsis;
  width: 370px;
  white-space: nowrap;
  overflow: hidden;
}

.wrapper {
  background-color: #e7f5e4;;
  height: 5rem;
  line-height: 20px;
  margin-right: 10rem;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 0 0 7px 0;
}
</style>