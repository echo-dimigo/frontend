<script>
import { format } from 'date-fns'

export default {
  name: 'SwaggyPost',

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  filters: {
    formatDate (val) {
      return format(val, 'M월 D일 h시 m분')
    }
  },

  data () {
    return {
      comment: null
    }
  }
}
</script>

<template>
  <article class="post">
    <div class="post__info">
      <div
        class="post__info__image"
        :style="{
          'background-image': `url('${post.writer.image}')`
        }"
      />
      <div class="post__info__text">
        <span class="post__info__name">
          {{ post.writer.name }}
        </span>
        <span class="post__info__date">
          {{ post.date | formatDate }}
        </span>
      </div>
    </div>
    <div class="post__content">
      <span class="post__content__title">
        {{ post.title }}
      </span>
      {{ post.content }}
    </div>
    <div class="post__reaction">
      <span class="post__reaction__comment">
        댓글 {{ post.comments.length }}개
      </span>
    </div>
    <div class="post__add-comment">
      <echoos-input
        v-model="comment"
        placeholder="댓글을 입력하세요"
        class="post__add-comment__input"
      />
      <echoos-button
        class="post__add-comment__button"
      >
        댓글 달기
      </echoos-button>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.post {
  border-radius: 6px;
  border: solid 1.5px rgba(21, 19, 19, 0.05);

  background-color: $white;

  padding: 6px 10px;

  &__info {
    display: flex;
    align-items: center;
    padding: 6px 0;
    border-bottom: solid 2px rgba(21, 19, 19, 0.05);

    &__image {
      width: 3.5em;
      height: 3.5rem;
      display: inline-block;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 50%;
      border: solid 1px rgba(21, 19, 19, 0.05);
      margin-right: 7px;
    }

    &__name {
      font-size: 1.3rem;
      display: block;
    }

    &__date {
      color: $dark-gray;
    }
  }

  &__content {
    padding: 15px 6px;
    line-height: 25px;

    &__title {
      display: block;
      line-height: 40px;
      font-weight: bold;
    }
  }

  &__reaction {
    width: 100%;
    height: 2rem;

    border-bottom: solid 2px rgba(21, 19, 19, 0.05);

    &__comment,
    &__like {
      float: right;
      color: $dark-gray;
    }

    &__like {
      margin-right: 8px;
    }
  }

  &__add-comment {
    padding: 15px 6px;
    display: flex;
    justify-content: space-between;

    &__input {
      flex: 1;
      margin-right: 5px;
      display: inline-block;
    }
  }
}
</style>
