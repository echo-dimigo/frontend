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
      {{ post.content }}
    </div>
    <div class="post__reaction">
      <span class="post__reaction__comment">
        댓글 {{ post.comments.length }}개
      </span>
      <span class="post__reaction__like">
        좋아요 {{ post.likes.length }}개
      </span>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.post {
  border-radius: 6px;
  border: solid 1.5px rgba(21, 19, 19, 0.05);

  padding: 5px;

  /** 임시 */
  width: 50%;
  margin: 50px;

  &__info {
    display: flex;
    align-items: center;
    padding: 6px;
    border-bottom: solid 2px rgba(21, 19, 19, 0.05);

    &__image {
      width: 3.5em;
      height: 3.5rem;
      display: inline-block;
      background-size: cover;
      border-radius: 50%;
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
  }

  &__reaction {
    width: 100%;
    height: 2rem;

    &__comment,
    &__like {
      float: right;
      color: $dark-gray;
    }

    &__like {
      margin-right: 8px;
    }
  }
}
</style>
