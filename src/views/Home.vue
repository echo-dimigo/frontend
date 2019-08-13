<script>
import SwaggyPost from '@/components/SwaggyPost.vue'

export default {
  name: 'Home',
  components: { SwaggyPost }
}
</script>

<template>
  <div class="home">
    <swaggy-post
      :post="{
        title: '재미있게 사는 법은?',
        content: '공부를 하지 않으면 된다. 야간 자율 학습 시간에는 공부에 열심히 해야하지만 인강실에 간 이상 공부는 포기해야 한다는 것을 오늘 깨달았다. 오늘 급식은 정말 맛이 있지는 않았지만 먹어줄 만은 했다. JnJ는 정말 멋진 동아리이다. 내년에 꼭 동아리 장을 하면 에코 프로젝트를 완성하고 싶다. 내일은 체육이 들었는데 줄넘기를 안 가져와서 좀 곤란하다. 쉬는시간에 빌리러 가야겠다.',
        writer: {
          name: '엄서훈',
          image: 'https://api.dimigo.hs.kr/user_photo/photo1_002108_uhmtoto_TffqRB.jpg'
        },
        date: new Date(),
        comments: [
          {
            content: '그렇군요!!',
            writer: {
              name: '엄서훈',
              serial: 1519,
              image: 'https://api.dimigo.hs.kr/user_photo/photo1_002108_uhmtoto_TffqRB.jpg'
            },
          }
        ],
        likes: [
          {
            name: '엄서훈',
            serial: 1519
          }
        ]
      }"
    />
  </div>
</template>

<style lang="scss" scoped>
</style>
