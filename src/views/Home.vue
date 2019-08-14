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
      class="home__post"
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

    <swaggy-post
      class="home__post"
      :post="{
        title: '오늘의 일기',
        content: '오늘은 아침에 아침 식사를 하고 대강당에 모여서 전체 조회를 했다. 나도 앞에 나가서 장학금이나 상장을 받고 싶었지만 받지 못해서 정말 아쉬웠다. 그리고 지금은 플밍 시간인데 좀 재미가 없다. 앞으로는 플밍 수업도 열심히 들어야겠다.',
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

    <swaggy-post
      class="home__post"
      :post="{
        title: '레이아웃을 다 짠 것 같다',
        content: '오늘은 일어나자 마자 점호를 갔다. 나는 호실장이기 때문에 인원 점검도 했다. 점호가 끝나고 바로 씻고 학교에 와서 에코의 레이아웃을 짰는데, 플밍시간이 10분 남은 지금 노트북에서는 꽤 잘 짠 것 같다. 하지만 핸드폰 레이아웃은 안 짰기 때문에 또 짜야한다. 미디어 쿼리를 쓸 생각을 하니 끔찍..하다..',
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
.home {
  &__post {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
