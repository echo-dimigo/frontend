<script>
import { format } from 'date-fns'
import locale from 'date-fns/locale/ko'

import service from '@/api/service'
import { mapGetters } from 'vuex'

export default {
  name: 'SwaggyPost',

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters([
      'user'
    ])
  },

  methods: {
    async refresh () {
      this.post = await service.getPostById(this.post.idx)
    },

    toggleComment () {
      this.showComments = !this.showComments
    },

    async deleteComment (idx) {
      await service.deleteComment(idx)
      await this.refresh()
    },

    isMyComment (comment) {
      return comment.writer.idx === this.user.idx
    },

    initForm () {
      this.commentForm = {
        postIdx: this.post.idx,
        targetType: 'post',
        targetIdx: this.post.idx,
        content: ''
      }
    },

    async addComment () {
      this.showComments = true
      await service.addComment(this.commentForm)
      await this.refresh()
      this.initForm()
    }
  },

  filters: {
    formatDate (val) {
      return format(val, 'M월 D일 a h시 m분', { locale })
    }
  },

  created () {
    this.initForm()
    setInterval(() => {
      this.refresh()
    }, 10000)
  },

  data () {
    return {
      comment: null,
      showComments: false,
      commentForm: {}
    }
  }
}
</script>

<template>
  <article class="post">
    <div class="post__info">
      <div class="post__info__image" />
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
    <div
      @click="toggleComment"
      class="post__reaction"
    >
      <span class="post__reaction__comment">
        댓글 {{ post.comments.length }}개
      </span>
    </div>
    <div
      v-show="showComments"
      class="post__comment__list"
    >
      <div
        :key="`comment-${i}`"
        v-for="(comment, i) in post.comments"
        class="post__comment"
      >
        <div class="post__comment__photo" />
        <div class="post__comment__content">
          <div class="post__comment__info">
            <span class="post__comment__info__writer">
              {{ comment.writer.name }}
            </span>
            <span class="post__comment__info__date">
              {{ comment.wroteDate | formatDate }}
            </span>
            <span
              v-if="isMyComment(comment)"
              @click="deleteComment(comment.idx)"
              class="post__comment__tool icon-delete"
            />
          </div>
          <span class="post__comment__info__date">
            {{ comment.content }}
          </span>
        </div>
      </div>
    </div>
    <div class="post__add-comment">
      <echoos-input
        v-model="commentForm.content"
        placeholder="댓글을 입력하세요"
        class="post__add-comment__input"
      />
      <echoos-button
        @click="addComment"
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
    user-select: none;
    border-bottom: solid 2px rgba(21, 19, 19, 0.05);

    &__comment {
      float: right;
      color: $dark-gray;
    }
  }

  &__comment {
    padding: 13px 10px;
    display: flex;
    align-items: center;
    border-bottom: solid 1.5px rgba(21, 19, 19, 0.05);

    &__photo {
      width: 3rem;
      height: 3rem;
      border: 2px solid $gray;
      border-radius: 50%;
    }

    &__content {
      margin-left: 7px;
      flex: 1;
    }

    &__info {
      line-height: 30px;

      &__writer {
        font-size: 1.1rem;
      }

      &__date {
        color: $dark-gray;
        font-size: 0.8rem;
      }
    }

    &__tool {
      float: right;
      margin-right: 6px;
      color: $dark-gray;
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

      @media (max-width: 900px) {
        width: 50%;
      }
    }
  }
}
</style>
