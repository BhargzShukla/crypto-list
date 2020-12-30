<template>
  <div class="flex items-center justify-center">
    <button
      class="p-2 m-1 text-gray-800 border rounded-lg shadow-lg bg-gray-50 hover:shadow-inner disabled:opacity-50 disabled:shadow-none"
      @click="getPrev"
      :disabled="offset <= 0"
    >
      &larr; Prev
    </button>
    <button
      class="p-2 m-1 text-gray-800 border rounded-lg shadow-lg hover:shadow-inner bg-gray-50 disabled:opacity-50 disabled:shadow-none"
      @click="getNext"
      :disabled="limit + offset >= 100"
    >
      Next &rarr;
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    limit: {
      type: Number,
      required: true,
      default: 0
    },
    offset: {
      type: Number,
      required: true,
      default: 0
    }
  },
  methods: {
    ...mapActions({
      updateOffset: 'coins/updateOffset'
    }),
    getNext() {
      if (this.offset + this.limit < 100) {
        this.updateOffset(this.offset + this.limit)
      }
    },
    getPrev() {
      if (this.limit + this.offset > 0) {
        this.updateOffset(this.offset - this.limit)
      }
    }
  }
}
</script>

<style></style>
