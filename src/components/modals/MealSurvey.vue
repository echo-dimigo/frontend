<script>
export default {
  name: 'MealSurvey',

  props: {
    mealCode: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      form: {
        code: this.mealCode,
        rating: 0,
        message: 0
      }
    }
  }
}
</script>

<template>
  <h3>급식 평가하기</h3>
</template>
