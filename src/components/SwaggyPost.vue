<script>
import { format } from 'date-fns'
import locale from 'date-fns/locale/ko'

import { PostService, CommentService } from '@/api/service'
import { mapGetters } from 'vuex'

import SwaggyComment from '@/components/SwaggyComment'

export default {
  name: 'SwaggyPost',

  components: { SwaggyComment },

  props: {
    post: {
      type: Object,
      required: true
    },
    commentsPreviewCount: {
      type: Number,
      default: 3
    }
  },

  computed: {
    ...mapGetters([
      'user'
    ]),

    reversedComments () {
      return this.currentPost.comments.slice().reverse()
    },

    previewComments () {
      return this.reversedComments.slice(0, this.commentsPreviewCount)
    }
  },

  methods: {
    async refresh () {
      this.currentPost = await PostService.getPostById(this.post.idx)
    },

    toggleComment () {
      this.showComments = !this.showComments
    },

    initForm () {
      this.commentForm = {
        postIdx: this.post.idx,
        targetType: 'post',
        targetIdx: this.post.idx,
        content: ''
      }
    },

    expandComment () {
      this.showFullComments = true
    },

    async addComment () {
      if (!this.commentForm.content || !this.commentForm.content.trim()) {
        this.$toast.error('댓글을 입력해 주세요.')
        return
      }
      this.commentPending = true
      this.showComments = true
      await CommentService.addComment(this.commentForm)
      this.commentPending = false
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
    this.refresher = setInterval(() => {
      this.refresh()
    }, 5000)
  },

  data () {
    return {
      currentPost: this.post,
      refresher: () => {},
      comment: null,
      showComments: true,
      showFullComments: false,
      commentForm: {},
      commentPending: false
    }
  },

  destroyed () {
    clearInterval(this.refresher)
  }
}
</script>

<template>
  <article class="post">
    <div class="post__info">
      <div class="post__info__image" />
      <div class="post__info__text">
        <span class="post__info__name">
          {{ currentPost.writer.name }}
        </span>
        <span class="post__info__date">
          {{ currentPost.date | formatDate }}
        </span>
      </div>
    </div>
    <div class="post__content">
      <span class="post__content__title">
        {{ currentPost.title }}
      </span>
      <span v-html="currentPost.content" />
    </div>
    <div
      @click="toggleComment"
      class="post__reaction"
    >
      <span class="post__reaction__comment">
        댓글 {{ currentPost.comments.length }}개
      </span>
    </div>
    <div
      v-show="showComments"
      class="post__comment__list"
    >
      <swaggy-comment
        :key="`comment-${i}`"
        v-for="(comment, i) in showFullComments ? reversedComments : previewComments"
        :comment="comment"
        class="post__comment"
        @refresh="refresh"
      />
      <div
        v-show="currentPost.comments.length > commentsPreviewCount && !showFullComments"
        @click="expandComment"
        class="post__comment__more"
      >
        댓글 더보기
      </div>
    </div>
    <div class="post__add-comment">
      <echoos-input
        v-model="commentForm.content"
        @enter="addComment"
        placeholder="댓글을 입력하세요"
        class="post__add-comment__input"
      />
      <echoos-button
        @click="addComment"
        class="post__add-comment__button"
        :pending="commentPending"
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

  padding: 15px 15px 0;

  &__info {
    display: flex;
    align-items: center;
    padding: 0 0 10px;
    border-bottom: solid 1.5px rgba(21, 19, 19, 0.05);

    &__image {
      width: 3.5em;
      height: 3.5rem;
      display: inline-block;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 50%;
      border: solid 1px rgba(21, 19, 19, 0.05);
      margin-right: 10px;
    }

    &__name {
      display: block;
      margin-bottom: 2px;
      font-size: 1.3rem;
      font-weight: 700;
    }

    &__date {
      font-size: 0.8rem;
      color: $dark-gray;
    }
  }

  &__content {
    padding: 12px 6px;
    padding-top: 15px;
    word-break: break-word;

    &__title {
      display: block;
      line-height: 40px;
      font-weight: bold;
      color: black;
    }

    &__text {
      line-height: 1.5;
      white-space: pre-line;
      word-wrap: break-word;
      font-family: inherit;
      color: #151313;
    }
  }

  &__reaction {
    width: 100%;
    height: 2rem;
    user-select: none;
    border-bottom: solid 1.5px rgba(21, 19, 19, 0.05);

    &__comment {
      cursor: pointer;
      float: right;
      color: $dark-gray;
    }
  }

  &__comment {
    &:not(:last-child) {
      border-bottom: solid 1.5px rgba(21, 19, 19, 0.05);
    }

    &__more {
      cursor: pointer;
      color: $dark-gray;
      padding-top: 15px;
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
