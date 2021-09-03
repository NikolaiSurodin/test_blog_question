<template>
  <div>
    <question-item v-for="(ques, id) in questionList" :key="id"
                   :quest="ques"
    />
  </div>
</template>

<script>
import QuestionItem from "@/components/QuestionItem"

export default {
  name: "QuestionList",
  components: { QuestionItem },
  props: {
    questionList: Array
  }
}
</script>

<style scoped>

</style>