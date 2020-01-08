<script>
import { mapGetters } from 'vuex'

import { format } from 'date-fns'
import locale from 'date-fns/locale/ko'

import { CommentService } from '@/api/service'

export default {
  name: 'SwaggyComment',

  props: {
    comment: {
      type: Object,
      required: true
    }
  },

  filters: {
    formatDate (val) {
      return format(val, 'M월 D일 a h시 m분', { locale })
    }
  },

  computed: {
    ...mapGetters([
      'user'
    ])
  },

  methods: {
    isMyComment (comment) {
      return comment.writer.idx === this.user.idx
    },

    async deleteComment (idx) {
      const result = await this.$swal({
        toast: false,
        icon: 'warning',
        position: 'center',
        title: '잠깐!',
        text: '정말로 댓글을 지우시겠습니까?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#c5593b',
        cancelButtonColor: '#5fae9f',
        cancelButtonText: '취소',
        confirmButtonText: '확인'
      })

      if (result.value) {
        await CommentService.deleteComment(idx)
        this.$emit('refresh')
      }
    }
  }
}
</script>

<template>
  <div class="comment">
    <div class="comment__photo" />
    <div class="comment__content">
      <div class="comment__info">
        <span class="comment__info__writer">
          {{ comment.writer.name }}
        </span>
        <span class="comment__info__date">
          {{ comment.wroteDate | formatDate }}
        </span>
        <span
          v-if="isMyComment(comment)"
          @click="deleteComment(comment.idx)"
          class="comment__tool icon-delete"
        />
      </div>
      <span class="comment__info__content">
        {{ comment.content }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.comment {
  padding: 13px 10px;
  display: flex;
  align-items: center;
  align-content: center;

  &__photo {
    align-self: flex-start;
    width: 3rem;
    height: 3rem;
    border: 2px solid $gray;
    border-radius: 50%;
    margin-right: 8px;
  }

  &__content {
    flex: 1;
    word-break: break-word;
  }

  &__info {
    margin-bottom: 2px;

    &__writer {
      font-size: 1.1rem;
      font-weight: 700;
    }

    &__date {
      font-size: 0.9rem;
      color: $dark-gray;
    }

    &__content {
      font-size: 0.9rem;
      font-weight: 500;
      color: $dark-gray;
    }
  }

  &__tool {
    cursor: pointer;
    float: right;
    margin-right: 6px;
    color: $dark-gray;
  }

  &__more {
    cursor: pointer;
    margin-left: 10px;
    margin-top: 10px;

    color: $brand;
    font-weight: 600;
  }
}
</style>
